'use client';

import { useState } from 'react';
import { generateLFCArticle } from '@/lib/ghostwriter';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Wand2, Save, FileText, Loader2 } from 'lucide-react';

export default function GhostwriterPage() {
    const [prompt, setPrompt] = useState('');
    const [article, setArticle] = useState('');
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState('');

    const handleGenerate = async () => {
        if (!prompt) return;
        setLoading(true);
        setStatus('Summoning the Ghostwriter...');
        try {
            const result = await generateLFCArticle(prompt);
            setArticle(result);
            setStatus('Article drafted!');
        } catch (error) {
            console.error(error);
            setStatus('Summoning failed. Check your API key.');
        }
        setLoading(false);
    };

    const handleSave = async () => {
        if (!article) return;
        setSaving(true);
        setStatus('Saving to Anfield Stadium...');
        try {
            await addDoc(collection(db, 'news'), {
                content: article,
                title: prompt, // Simple title set to prompt for now
                timestamp: serverTimestamp(),
                author: 'AI Ghostwriter',
                type: 'Exclusive'
            });
            setStatus('Published to Stadium!');
        } catch (error) {
            console.error(error);
            setStatus('Save failed.');
        }
        setSaving(false);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <Wand2 className="w-8 h-8 text-red-600" />
                    <h1 className="text-4xl font-bold uppercase tracking-tighter">AI Ghostwriter</h1>
                </div>

                <div className="grid gap-6">
                    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                        <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase">What are we writing about today?</label>
                        <textarea
                            className="w-full bg-black border border-zinc-800 rounded-lg p-4 text-white focus:border-red-600 outline-none transition-all h-32"
                            placeholder="e.g. Liverpool 4-0 Real Madrid match report, Mo Salah contract extension news, etc."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !prompt}
                            className="mt-4 w-full bg-red-600 hover:bg-red-700 disabled:bg-zinc-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all uppercase tracking-widest"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Wand2 className="w-4 h-4" />}
                            Generate Draft
                        </button>
                    </div>

                    {article && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-lg font-bold flex items-center gap-2">
                                        <FileText className="w-4 h-4 text-red-600" />
                                        DRAFT PREVIEW
                                    </h2>
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all"
                                    >
                                        {saving ? <Loader2 className="animate-spin w-4 h-4" /> : <Save className="w-4 h-4" />}
                                        PUBLISH TO STADIUM
                                    </button>
                                </div>
                                <div className="prose prose-invert max-w-none prose-red">
                                    <pre className="whitespace-pre-wrap font-sans leading-relaxed text-zinc-300">
                                        {article}
                                    </pre>
                                </div>
                            </div>
                        </div>
                    )}

                    {status && (
                        <div className={`text-center text-sm font-medium ${status.includes('failed') ? 'text-red-500' : 'text-zinc-500'}`}>
                            {status}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
