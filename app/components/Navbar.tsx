
import { Menu, Search, Trophy } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#c8102e] rounded-lg flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black italic tracking-tighter text-white uppercase">MR. ANFIELD</span>
                    </Link>
                    <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                        <Link href="/" className="hover:text-[#c8102e] transition-colors text-zinc-100 border-b-2 border-[#c8102e] pb-1">News</Link>
                        <Link href="/match-center" className="hover:text-[#c8102e] transition-colors">Match Center</Link>
                        <Link href="#" className="hover:text-[#c8102e] transition-colors">Tactics</Link>
                        <Link href="#" className="hover:text-[#c8102e] transition-colors">Academy</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm text-zinc-400">
                        <Search className="w-4 h-4" />
                        <input type="text" placeholder="Search news..." className="bg-transparent border-none outline-none w-32" />
                    </div>
                    <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
