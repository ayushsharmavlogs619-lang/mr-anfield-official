
'use client';

import { useState } from 'react';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Shield, Send, Check } from 'lucide-react';

export default function AdminPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        // Construct the article object
        const article = {
            title: formData.get('title'),
            excerpt: formData.get('excerpt'),
            image: formData.get('image'), // In a real app, this would be a file upload URL
            category: formData.get('category'),
            author: formData.get('author') || "Mr. Anfield Staff",
            readTime: `${Math.floor(Math.random() * 10) + 2} min read`,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            content: formData.get('content'), // We should probably use a Rich Text Editor later
            timestamp: serverTimestamp(), // For sorting
            isPremium: formData.get('isPremium') === 'on'
        };

        try {
            await addDoc(collection(db, 'articles'), article);
            setSuccess(true);
            e.currentTarget.reset();
            setTimeout(() => setSuccess(false), 3000);
        } catch (err) {
            console.error("Error publishing:", err);
            alert("Failed to publish content. Check console.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 p-8 flex items-center justify-center">
            <div className="max-w-2xl w-full bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#c8102e] rounded-xl flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-black uppercase tracking-tighter text-white">The War Room</h1>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Authorized Personnel Only</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Headline</label>
                        <input required name="title" type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors font-bold" placeholder="Liverpool agree personal terms..." />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Category</label>
                            <select name="category" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors">
                                <option>Transfer News</option>
                                <option>Match Report</option>
                                <option>Tactical Analysis</option>
                                <option>Academy</option>
                                <option>Opinion</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Author</label>
                            <input name="author" type="text" defaultValue="Ayush Sharma" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Image URL</label>
                        <input required name="image" type="url" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors text-sm font-mono" placeholder="https://..." />
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Excerpt (Teaser)</label>
                        <textarea required name="excerpt" rows={2} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors text-sm" placeholder="A brief summary for the homepage card..." />
                    </div>

                    <div>
                        <label className="block text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Full Content</label>
                        <textarea required name="content" rows={8} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8102e] outline-none transition-colors font-serif text-lg leading-relaxed" placeholder="Write your article here..." />
                    </div>

                    <div className="flex items-center gap-3">
                        <input type="checkbox" name="isPremium" id="isPremium" className="w-5 h-5 rounded border-white/10 bg-black/40 text-[#c8102e]" />
                        <label htmlFor="isPremium" className="text-sm font-bold text-zinc-400">Mark as Premium (Subscribers Only)</label>
                    </div>

                    <button disabled={loading} className="w-full py-4 bg-[#c8102e] hover:bg-[#a00d25] text-white font-black uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2">
                        {loading ? 'Publishing...' : success ? <><Check className="w-5 h-5" /> Live on Site</> : <><Send className="w-4 h-4" /> Publish Article</>}
                    </button>
                </form>

            </div>
        </div>
    );
}
