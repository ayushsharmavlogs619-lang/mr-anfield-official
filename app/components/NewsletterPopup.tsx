'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Zap, Bell, Trophy, Flame } from 'lucide-react';
import { db } from '@/app/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Check if user has already seen/closed the popup
        const hasSeenNewsletter = localStorage.getItem('hasSeenNewsletter');

        if (!hasSeenNewsletter) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 45000); // 45 seconds

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closePopup();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenNewsletter', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, 'newsletter_subscribers'), {
                email,
                timestamp: serverTimestamp(),
                source: 'popup_v1'
            });

            setIsSubscribed(true);
            setTimeout(() => {
                closePopup();
            }, 3000);
        } catch (error) {
            console.error("Error subscribing:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) closePopup();
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500 cursor-pointer"
        >
            <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-[#c8102e]/60 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(200,16,46,0.4)] animate-in zoom-in duration-500 cursor-default">
                {/* Background Glows - RED EVERYWHERE */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-red-900/40 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c8102e]/30 blur-[80px] pointer-events-none" />

                {/* Close Button - More Visible */}
                <button
                    onClick={closePopup}
                    aria-label="Close newsletter popup"
                    className="absolute top-6 right-6 text-white hover:text-[#c8102e] transition-all bg-white/10 hover:bg-white/20 p-3 rounded-2xl border border-white/20 group z-50 shadow-lg"
                >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
                </button>

                <div className="p-10 md:p-14 text-center space-y-10 relative z-10">
                    {/* Header Icons */}
                    <div className="flex flex-col items-center space-y-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-[#c8102e] blur-3xl opacity-60 animate-pulse" />
                            <div className="relative w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-2xl border-4 border-[#c8102e]">
                                <Trophy className="w-12 h-12 text-[#c8102e]" />
                            </div>
                        </div>
                    </div>

                    {/* Headlines */}
                    <div className="space-y-4">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8] italic text-white drop-shadow-2xl">
                            WAIT! DON'T<br /><span className="text-[#c8102e]">MISS THE REVOLUTION</span>
                        </h3>
                        <p className="text-zinc-400 font-bold text-lg leading-tight italic">
                            Get EXCLUSIVE Liverpool FC breaking news before anyone else! 🔥
                        </p>
                    </div>

                    {!isSubscribed ? (
                        <>
                            <div className="py-4 px-6 bg-[#c8102e]/10 border border-[#c8102e]/20 rounded-2xl">
                                <p className="text-[#c8102e] text-[10px] font-black tracking-[0.2em] uppercase flex items-center justify-center gap-3">
                                    <Zap className="w-4 h-4 fill-current animate-pulse" />
                                    Join 50,000+ Reds fans getting insider updates
                                    <Zap className="w-4 h-4 fill-current animate-pulse" />
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="relative group">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-zinc-500 group-focus-within:text-[#f6eb61] transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email to join..."
                                        className="w-full bg-black/60 border border-white/10 rounded-[1.5rem] pl-16 pr-8 py-6 text-white outline-none focus:border-[#f6eb61] transition-all font-bold text-lg"
                                    />
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#f6d365] to-[#fda085] hover:from-[#f6eb61] hover:to-[#f6d365] text-black font-black uppercase py-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all shadow-[0_20px_50px_rgba(246,235,97,0.3)] active:scale-95 disabled:opacity-50 text-base tracking-widest"
                                >
                                    {isSubmitting ? 'Subscribing...' : (
                                        <>
                                            🚀 JOIN THE RED REVOLUTION
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Features List */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                {[
                                    'Transfer Bombs',
                                    'Match Insights',
                                    '100% Free',
                                    'No Spam'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                                        <Zap className="w-3 h-3 text-[#f6eb61] fill-current" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="py-14 space-y-6 animate-in fade-in zoom-in">
                            <div className="relative w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 border border-green-500/30">
                                <Flame className="w-12 h-12 fill-current" />
                            </div>
                            <h4 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">YOU'RE IN THE SQUAD!</h4>
                            <p className="text-zinc-400 font-bold text-lg">Check your inbox for the first mission. 🚨</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
