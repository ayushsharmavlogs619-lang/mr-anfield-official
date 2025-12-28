'use client';

import { useState } from "react";
import { Menu, Search, Trophy, X, Zap, TrendingUp, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/app/lib/data";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-[60] bg-gradient-to-r from-[#0a0a0a] via-[#c8102e]/90 to-[#0a0a0a] backdrop-blur-xl border-b border-[#c8102e]/30">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between relative">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative w-12 h-12 bg-white rounded-2xl shadow-[0_0_20px_rgba(200,16,46,0.4)] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Image src="/logo.png" alt="LFC" width={40} height={40} className="object-contain" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full border-2 border-[#c8102e]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black uppercase tracking-tighter text-white leading-[0.85] italic">
                                    MR ANFIELD<br />
                                    <span className="text-[#f6eb61] text-xl">FOOTBALL</span>
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 items-center">
                            <Link href="/" className="hover:text-[#c8102e] transition-colors text-zinc-100">News</Link>
                            <Link href="/match-center" className="hover:text-[#c8102e] transition-colors">Match Center</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-black/20 rounded-xl border border-white/10 text-sm text-zinc-400 focus-within:border-[#f6eb61] transition-all">
                            <Search className="w-4 h-4" />
                            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none w-24 focus:w-48 transition-all text-white placeholder:text-zinc-600" />
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10 text-white shadow-lg active:scale-95"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile / Full Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[70] bg-[#050505] overflow-y-auto animate-in fade-in zoom-in duration-300">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#800a0a]/40 via-black/95 to-black pointer-events-none" />

                    <div className="relative min-h-screen flex flex-col">
                        {/* Header Area */}
                        <div className="flex items-center justify-between p-6 md:p-10">
                            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4">
                                <div className="relative w-16 h-16 bg-white rounded-2xl shadow-2xl flex items-center justify-center ring-4 ring-[#f6eb61]/30 animate-pulse-slow">
                                    <Image src="/logo.png" alt="Logo" width={48} height={48} className="object-contain" />
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-[#050505]" />
                                </div>
                                <div className="text-2xl md:text-3xl font-black text-white italic tracking-tighter uppercase leading-[0.8]">
                                    MR ANFIELD<br />
                                    <span className="text-[#f6eb61]">FOOTBALL</span>
                                </div>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Menu Items Area */}
                        <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 space-y-4 max-w-xl mx-auto w-full">
                            {[
                                { name: 'LATEST NEWS', href: '/', icon: <TrendingUp className="w-5 h-5 text-white/50" /> },
                                { name: 'TRANSFER UPDATES', href: '#', icon: <Zap className="w-5 h-5 text-white/50" /> },
                                { name: 'MATCH REPORTS', href: '/match-center', icon: <TrendingUp className="w-5 h-5 text-white/50" /> },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 transition-all group active:scale-[0.98]"
                                >
                                    {item.icon}
                                    <span className="text-lg font-black text-white tracking-widest">{item.name}</span>
                                </Link>
                            ))}

                            {/* Golden CTA Button */}
                            <button className="w-full mt-4 bg-gradient-to-r from-[#f6d365] to-[#fda085] hover:from-[#f6eb61] hover:to-[#f6d365] text-black font-black uppercase py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-yellow-500/20 active:scale-95 text-sm tracking-widest leading-none">
                                🚀 GET BREAKING NEWS UPDATES
                            </button>

                            {/* Social Links Row */}
                            <div className="pt-10 flex flex-wrap justify-center gap-6">
                                {[
                                    { name: 'X', url: SOCIAL_LINKS.twitter },
                                    { name: 'Insta (Official)', url: SOCIAL_LINKS.instagram_official },
                                    { name: 'Insta (Reborn)', url: SOCIAL_LINKS.instagram_backup },
                                    { name: 'YouTube', url: SOCIAL_LINKS.youtube },
                                    { name: 'Pinterest', url: SOCIAL_LINKS.pinterest }
                                ].map(social => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white cursor-pointer transition-colors"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Banner Area */}
                        <div className="bg-[#c8102e] p-8 md:p-12 text-center space-y-4 relative overflow-hidden">
                            {/* Decorative background flare */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/30 blur-sm rounded-full" />

                            <div className="flex flex-col items-center gap-2">
                                <Flame className="w-12 h-12 text-white fill-current animate-pulse" />
                                <h3 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-tight">
                                    BREAKING FROM<br />ANFIELD
                                </h3>
                            </div>
                            <p className="text-white/90 font-bold text-lg md:text-xl max-w-sm mx-auto leading-tight italic">
                                The hottest Liverpool FC news that's got everyone talking... 🚀
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
