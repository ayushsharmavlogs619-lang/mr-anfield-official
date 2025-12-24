
import { ExternalLink, Trophy } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-32 pb-20 px-4 md:px-8 border-t border-white/5 bg-[#0a0a0a] text-zinc-400">
            <div className="max-w-7xl mx-auto pt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-[#c8102e] rounded-lg flex items-center justify-center">
                                <Trophy className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-black italic tracking-tighter text-white uppercase">MR. ANFIELD</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                            The ultimate destination for Liverpool FC fans. Tactical analysis, transfer rumors, and in-depth stories from inside Anfield.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="/" className="hover:text-white transition-colors">Latest News</Link></li>
                            <li><Link href="/match-center" className="hover:text-white transition-colors">Match Center</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">The Kop Chat</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Premium Analysis</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Support</h4>
                        <ul className="space-y-4 text-sm font-bold text-zinc-500">
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Our Writers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Official Partners</h4>
                        <div className="flex items-center gap-4 text-zinc-700">
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5" />
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5" />
                            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/5" />
                        </div>
                        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#c8102e] flex items-center gap-2">
                            MADE BY FANS FOR FANS <ExternalLink className="w-3 h-3" />
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
