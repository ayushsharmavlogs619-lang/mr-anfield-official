import { Trophy, Youtube, Twitter, Instagram, Pin, Mail, Flame, Zap, Shield, Heart, Facebook, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/app/lib/data";

export default function Footer() {
    return (
        <footer className="mt-40 relative overflow-hidden bg-[#050505]">
            {/* Top Red Gradient Backdrop - RED EVERYWHERE */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#c8102e]/30 to-transparent pointer-events-none" />
            <div className="absolute top-[200px] -left-[10%] w-[60%] h-[600px] bg-red-900/20 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[400px] -right-[10%] w-[60%] h-[600px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-16">
                {/* Newsletter Card */}
                <div className="mb-32 bg-gradient-to-br from-[#1a0505] via-[#050505] to-[#0a0a0a] rounded-[4rem] p-10 md:p-20 border border-[#c8102e]/30 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Trophy className="w-64 h-64 text-[#c8102e]" />
                    </div>
                    <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
                        <div className="flex justify-center mb-4">
                            <div className="p-5 bg-[#c8102e]/10 rounded-3xl border border-[#c8102e]/30">
                                <Zap className="w-12 h-12 text-[#f6eb61] fill-current animate-pulse" />
                            </div>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                            JOIN THE <span className="text-[#c8102e] drop-shadow-[0_0_20px_rgba(200,16,46,0.4)]">REDS</span><br />REVOLUTION!
                        </h3>
                        <p className="text-zinc-400 font-bold text-lg md:text-xl italic">
                            Get breaking Liverpool FC news before anyone else! 🔥
                        </p>
                        <div className="pt-6 grid md:grid-cols-[1fr,auto] gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email for the revolution..."
                                className="w-full bg-black/60 border border-[#c8102e]/30 rounded-2xl px-8 py-6 text-white outline-none focus:border-[#f6eb61] transition-all font-bold text-lg placeholder:text-zinc-700"
                            />
                            <button className="px-12 py-6 bg-gradient-to-r from-[#f6d365] to-[#fda085] hover:from-[#f6eb61] hover:to-[#f6d365] text-black font-black uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_20px_40px_rgba(246,235,97,0.2)] active:scale-95 group/btn">
                                <Mail className="w-6 h-6 group-hover/btn:scale-110 transition-transform" />
                                JOIN
                            </button>
                        </div>
                    </div>

                    <div className="mt-32 flex flex-col items-center text-center">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 group/logo">
                            <div className="relative w-24 h-24 md:w-32 md:h-32">
                                <div className="absolute inset-0 bg-[#c8102e] rounded-3xl group-hover/logo:scale-110 transition-transform shadow-[0_20px_40px_rgba(200,16,46,0.3)]" />
                                <div className="absolute inset-0 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                                    <Image src="/logo.png" alt="Logo" width={80} height={80} className="object-contain" />
                                </div>
                                <div className="absolute -top-3 -right-3 bg-[#f6eb61] text-black p-2 rounded-full shadow-lg">
                                    <Flame className="w-6 h-6 fill-current animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-[0.8] drop-shadow-2xl">
                                    MR ANFIELD<br />
                                    <span className="text-[#f6eb61]">FOOTBALL</span>
                                </h2>
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <div className="h-1 w-12 bg-[#c8102e] rounded-full" />
                                    <p className="text-[#c8102e] font-black text-xs tracking-[0.4em] uppercase">
                                        Mr. Anfield Football REVOLUTION
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="max-w-3xl text-zinc-400 text-xl md:text-2xl font-bold leading-relaxed mb-12 italic">
                            The ultimate Liverpool FC news destination for the modern era. Bringing you closer to the heart of Anfield with breaking news, exclusive content, and pure Red passion!
                        </p>

                        {/* Social Row */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { Icon: Twitter, url: SOCIAL_LINKS.twitter, color: 'hover:bg-white/10', name: 'X' },
                                { Icon: Instagram, url: SOCIAL_LINKS.instagram_official, color: 'hover:bg-[#E1306C]/20', name: 'IG Official' },
                                { Icon: Instagram, url: SOCIAL_LINKS.instagram_backup, color: 'hover:bg-[#E1306C]/20', name: 'IG Reborn' },
                                { Icon: Youtube, url: SOCIAL_LINKS.youtube, color: 'hover:bg-[#FF0000]/20', name: 'YouTube' },
                                { Icon: Facebook, url: '#', color: 'hover:bg-[#1877F2]/20', name: 'Facebook' },
                                { Icon: Pin, url: SOCIAL_LINKS.pinterest, color: 'hover:bg-[#E60023]/20', name: 'Pinterest' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={social.name}
                                    aria-label={social.name}
                                    className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all ${social.color} hover:-translate-y-2 hover:border-[#c8102e]/50 shadow-xl group`}
                                >
                                    <social.Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-32">
                    <div className="space-y-10 group">
                        <h4 className="flex items-center gap-4 text-3xl font-black italic uppercase tracking-tighter text-white">
                            <div className="p-3 bg-[#c8102e]/10 rounded-2xl border border-[#c8102e]/20 group-hover:bg-[#c8102e] transition-colors">
                                <Flame className="w-6 h-6 text-[#c8102e] group-hover:text-white fill-current" />
                            </div>
                            Latest News
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { text: 'Breaking Headlines', href: '/' },
                                { text: 'Transfer Exclusives', href: '#' },
                                { text: 'Anfield Match Center', href: '/match-center' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group/link font-black uppercase text-xs tracking-widest">
                                        <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover/link:bg-[#c8102e] transition-colors" />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10 group">
                        <h4 className="flex items-center gap-4 text-3xl font-black italic uppercase tracking-tighter text-white">
                            <div className="p-3 bg-[#c8102e]/10 rounded-2xl border border-[#c8102e]/20 group-hover:bg-[#c8102e] transition-colors">
                                <Zap className="w-6 h-6 text-[#f6eb61] group-hover:text-white fill-current" />
                            </div>
                            Tactical Analysis
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { text: 'Inside Tactical Analysis', href: '#' },
                                { text: 'Exclusive Interviews', href: '#' },
                                { text: 'Squad Deep Dives', href: '#' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group/link font-black uppercase text-xs tracking-widest">
                                        <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover/link:bg-[#c8102e] transition-colors" />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10 group">
                        <h4 className="flex items-center gap-4 text-3xl font-black italic uppercase tracking-tighter text-white">
                            <div className="p-3 bg-[#c8102e]/10 rounded-2xl border border-[#c8102e]/20 group-hover:bg-[#c8102e] transition-colors">
                                <Shield className="w-6 h-6 text-[#c8102e] group-hover:text-white fill-current" />
                            </div>
                            The Legacy
                        </h4>
                        <ul className="space-y-6">
                            {[
                                { text: 'Privacy Policy', href: '/privacy' },
                                { text: 'Terms of Revolution', href: '/terms' },
                                { text: 'Contact Anfield', href: '#' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all group/link font-black uppercase text-xs tracking-widest">
                                        <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover/link:bg-[#c8102e] transition-colors" />
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-600">
                    <div className="flex items-center gap-3 order-2 md:order-1">
                        <span>© 2025 Mr. Anfield Football. CREATED BY THE REDS</span>
                        <Heart className="w-4 h-4 text-[#c8102e] fill-current animate-pulse" />
                        <span>FOR LIVERPOOL FC</span>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 order-1 md:order-2">
                        <Link href="/terms" className="hover:text-white transition-colors">TERMS & CONDITIONS</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
                        <span className="flex items-center gap-3 text-zinc-800">
                            <Shield className="w-4 h-4" />
                            SECURED BY ANFIELD CORE
                        </span>
                    </div>
                </div>
            </div>
            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[rgba(200,16,46,0.1)] to-transparent pointer-events-none" />
        </footer>
    );
}
