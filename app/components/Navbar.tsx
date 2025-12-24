'use client';

import { useState } from "react";
import { Menu, Search, Trophy, X, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-[60] bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-full p-1 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center justify-center">
                                <Image src="/logo.png" alt="LFC" width={32} height={32} className="object-contain" />
                            </div>
                            <h1 className="text-xl font-black uppercase tracking-tighter text-white leading-none">
                                MR ANFIELD<br /><span className="text-[#f6eb61] text-lg">FOOTBALL</span>
                            </h1>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-zinc-500 items-center">
                            <Link href="/" className="hover:text-[#c8102e] transition-colors text-zinc-100">News</Link>
                            <Link href="/match-center" className="hover:text-[#c8102e] transition-colors">Match Center</Link>
                            <Link href="/workroom" className="px-4 py-2 bg-gradient-to-tr from-[#c8102e] to-[#800a1d] text-white rounded-xl shadow-lg shadow-[#c8102e]/20 flex items-center gap-2">
                                <Zap className="w-3 h-3 fill-current" /> Tactical Room
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm text-zinc-400">
                            <Search className="w-4 h-4" />
                            <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none w-24 focus:w-48 transition-all" />
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 text-white"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile / Full Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300">
                    <div className="flex flex-col items-center justify-center h-full space-y-12">
                        <div className="space-y-4 text-center">
                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-5xl font-black uppercase tracking-tighter italic text-white hover:text-[#c8102e] transition-all"
                            >
                                Home
                            </Link>
                            <Link
                                href="/match-center"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-5xl font-black uppercase tracking-tighter italic text-white hover:text-[#c8102e] transition-all"
                            >
                                Match Center
                            </Link>
                            <Link
                                href="/workroom"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-5xl font-black uppercase tracking-tighter italic text-[#f6eb61] hover:text-[#c8102e] transition-all"
                            >
                                Tactical Room
                            </Link>
                        </div>

                        <div className="flex gap-8">
                            {['Twitter', 'Instagram', 'YouTube'].map(social => (
                                <span key={social} className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white cursor-pointer">
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
