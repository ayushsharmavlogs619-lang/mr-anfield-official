'use client';

import { useState, useEffect } from 'react';
import { ghostwriterAction } from '../actions';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Wand2, Save, FileText, Loader2, Trophy, Zap, AlertCircle, CheckCircle2 } from 'lucide-react';
import ArticleRenderer from '@/app/components/ArticleRenderer';
import Image from 'next/image';

const statusMessages = [
    "Analyzing tactical blueprints...",
    "Checking the Kop's reaction...",
    "Consulting the Manager's office...",
    "VAR checking draft quality...",
    "Fueling the Slot Machine precision...",
    "Polishing the silverware..."
];

export default function GhostwriterPage() {
    const [prompt, setPrompt] = useState('');
    const [articleData, setArticleData] = useState<any>(null); // Keeping any as this matches AI dynamic output structure
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [status, setStatus] = useState({ type: 'idle', message: '' });

    const [currentLoadingMessage, setCurrentLoadingMessage] = useState(statusMessages[0]);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setCurrentLoadingMessage(statusMessages[Math.floor(Math.random() * statusMessages.length)]);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [loading]);

    const handleGenerate = async () => {
        if (!prompt) return;
        setLoading(true);
        setStatus({ type: 'loading', message: statusMessages[0] });
        try {
            const result = await ghostwriterAction(prompt);
            if (result.article) {
                setArticleData(result.article);
                setStatus({ type: 'success', message: 'GOAL! The Ghostwriter has delivered a masterpiece.' });
            } else if (result.error) {
                setStatus({ type: 'error', message: result.error });
            }
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Match abandoned. Tactical breakdown in the engine room.' });
        }
        setLoading(false);
    };

    const handleSave = async () => {
        if (!articleData) return;
        setSaving(true);
        setStatus({ type: 'loading', message: 'Publishing to the Stadium...' });
        try {
            await addDoc(collection(db, 'news'), {
                title: articleData.title,
                excerpt: articleData.excerpt,
                content: articleData.content,
                category: articleData.category || 'News',
                readTime: articleData.readTime || '5 min read',
                slug: articleData.slug || articleData.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, ''),
                image: '/stadium.png', // Default premium image
                author: 'Mr. Anfield Editor',
                timestamp: serverTimestamp(),
                type: 'Exclusive'
            });
            setStatus({ type: 'success', message: 'Article is LIVE at Anfield Stadium!' });
            setArticleData(null);
            setPrompt('');
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Save failed. The referee has blown for a foul.' });
        }
        setSaving(false);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8102e]/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#c8102e]/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto p-6 md:p-12 lg:p-20">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-[#c8102e] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(200,16,46,0.3)]">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#c8102e]">TACTICAL WORKROOM</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
                            AI <span className="text-zinc-500">GHOST</span>WRITER
                        </h1>
                        <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs">Summon the spirit of Anfield to draft world-class features.</p>
                    </div>

                    {status.message && (
                        <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-xl animate-in fade-in slide-in-from-right-4 duration-500 ${status.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                            status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-500' :
                                'bg-white/5 border-white/10 text-zinc-400'
                            }`}>
                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> :
                                status.type === 'error' ? <AlertCircle className="w-5 h-5" /> :
                                    <Loader2 className="w-5 h-5 animate-spin" />}
                            <span className="text-sm font-black uppercase tracking-wider italic">{status.message}</span>
                        </div>
                    )}
                </div>

                <div className="grid gap-12">
                    {/* Input Section */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#c8102e] to-zinc-800 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                        <div className="relative bg-zinc-900/90 border border-white/5 p-8 md:p-12 rounded-[2rem] backdrop-blur-2xl">
                            <label className="block text-[10px] font-black text-zinc-500 mb-6 uppercase tracking-[0.4em]">What&apos;s the next headline from the Kop?</label>
                            <textarea
                                className="w-full bg-black/50 border border-white/10 rounded-2xl p-6 md:p-8 text-xl md:text-2xl font-black text-white focus:border-[#c8102e] outline-none transition-all h-48 placeholder:text-zinc-800 placeholder:italic leading-tight selection:bg-[#c8102e]/30"
                                placeholder="e.g. Analysis of the Reds' dominance in the derby..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            />

                            <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                        <Trophy className="w-4 h-4 text-[#f6eb61]" />
                                        <span className="text-[10px] font-black uppercase text-zinc-400">Model: Gemini 1.5 Pro</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-black uppercase text-zinc-400">Server: Optimal</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleGenerate}
                                    disabled={loading || !prompt}
                                    className="w-full md:w-auto bg-[#c8102e] hover:bg-[#a00d25] disabled:bg-zinc-800 text-white font-black py-5 px-12 rounded-2xl flex items-center justify-center gap-4 transition-all uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(200,16,46,0.3)] hover:scale-105 active:scale-95 disabled:scale-100 group"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            <span>{currentLoadingMessage}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Wand2 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                            <span>Generate Draft</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Preview Section */}
                    {articleData && (
                        <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-12">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-black flex items-center gap-4 italic uppercase tracking-tighter">
                                    <div className="w-8 h-1 bg-[#c8102e]" />
                                    The Scouting Report
                                </h2>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(articleData.content);
                                            setStatus({ type: 'success', message: 'Draft copied to clipboard!' });
                                        }}
                                        className="bg-zinc-800 text-white hover:bg-zinc-700 px-6 py-4 rounded-2xl font-black flex items-center gap-3 transition-all uppercase tracking-tighter"
                                    >
                                        <FileText className="w-5 h-5" />
                                        Copy Draft
                                    </button>
                                    <button
                                        onClick={handleSave}
                                        disabled={saving}
                                        className="bg-white text-black hover:bg-[#f6eb61] px-10 py-4 rounded-2xl font-black flex items-center gap-3 transition-all uppercase tracking-tighter shadow-2xl hover:scale-105 active:scale-95 disabled:bg-zinc-800 disabled:text-zinc-500"
                                    >
                                        {saving ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
                                        Publish to the Stadium
                                    </button>
                                </div>
                            </div>

                            {/* Actual Preview Mock */}
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
                                {/* Header Preview */}
                                <div className="relative h-[400px] w-full bg-zinc-900 flex items-end p-12 overflow-hidden">
                                    <Image
                                        src="/stadium.png"
                                        alt="Preview"
                                        fill
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                        className="object-cover opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                                    <div className="relative space-y-6 max-w-4xl">
                                        <div className="flex gap-4">
                                            <span className="px-4 py-1.5 bg-[#c8102e] text-white text-[9px] font-black uppercase tracking-widest rounded-lg">{articleData.category}</span>
                                            <span className="px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[9px] font-black uppercase tracking-widest rounded-lg italic">{articleData.readTime}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-black uppercase italic leading-none tracking-tighter">{articleData.title}</h3>
                                    </div>
                                </div>

                                {/* Body Preview */}
                                <div className="p-8 md:p-20">
                                    <div className="mb-12 p-8 md:p-12 bg-white/5 border border-white/10 rounded-[2.5rem] italic text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight text-white/90">
                                        &quot;{articleData.excerpt}&quot;
                                    </div>
                                    <ArticleRenderer content={articleData.content} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
