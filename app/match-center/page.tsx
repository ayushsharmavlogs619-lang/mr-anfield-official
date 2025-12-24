
import { Calendar, ChevronRight, Clock, MapPin, Shield, Trophy } from "lucide-react";
import Link from "next/link";

export default function MatchCenter() {
    const matches = [
        {
            home: "Liverpool",
            away: "Man City",
            date: "Oct 27, 16:30",
            venue: "Anfield",
            competition: "Premier League",
            status: "Upcoming"
        },
        {
            home: "Arsenal",
            away: "Liverpool",
            date: "Nov 03, 17:30",
            venue: "Emirates Stadium",
            competition: "Premier League",
            status: "Upcoming"
        },
        {
            home: "Liverpool",
            away: "B. Leverkusen",
            date: "Nov 06, 20:00",
            venue: "Anfield",
            competition: "Champions League",
            status: "Upcoming"
        }
    ];

    const table = [
        { pos: 1, team: "Liverpool", p: 9, pts: 24, form: "WWWDW" },
        { pos: 2, team: "Man City", p: 9, pts: 23, form: "WDWWW" },
        { pos: 3, team: "Arsenal", p: 9, pts: 20, form: "DWLWW" },
        { pos: 4, team: "Aston Villa", p: 9, pts: 18, form: "WWLDW" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">
            <div className="relative bg-[#c8102e] h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/stadium.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-2 mb-2 text-white/60 text-sm font-bold uppercase tracking-widest">
                            <Trophy className="w-4 h-4" /> Premier League
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">Match Center</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-10 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Fixtures Column */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="p-8 rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-[#c8102e]" /> Upcoming Fixtures
                            </h3>
                            <div className="space-y-4">
                                {matches.map((match, i) => (
                                    <div key={i} className="group p-6 rounded-3xl bg-black/40 border border-white/5 hover:border-[#c8102e]/50 transition-all flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 w-full md:w-32 justify-center md:justify-start">
                                            <div className="flex flex-col items-center md:items-start">
                                                <span className="text-[#c8102e] uppercase tracking-widest text-[10px]">{match.competition}</span>
                                                <span className="text-white">{match.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-center gap-8 text-xl md:text-2xl font-black uppercase tracking-tighter">
                                            <div className="text-right w-1/3">{match.home}</div>
                                            <div className="px-4 py-1 rounded bg-zinc-800 text-sm font-bold text-zinc-500">VS</div>
                                            <div className="text-left w-1/3">{match.away}</div>
                                        </div>
                                        <div className="w-full md:w-32 flex justify-center md:justify-end">
                                            <button className="px-6 py-2 rounded-full bg-white/5 text-white text-xs font-bold uppercase tracking-widest group-hover:bg-[#c8102e] transition-colors">
                                                Tickets
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Last Result */}
                        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5">
                            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
                                <Clock className="w-6 h-6 text-[#c8102e]" /> Latest Result
                            </h3>
                            <div className="flex flex-col items-center">
                                <div className="text-[#c8102e] text-xs font-black uppercase tracking-[0.2em] mb-4">Full Time • Premier League</div>
                                <div className="flex items-center gap-12 mb-8">
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="w-20 h-20 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-3xl font-black">LIV</div>
                                        <span className="text-2xl font-black">3</span>
                                    </div>
                                    <div className="text-zinc-600 text-xl font-bold">-</div>
                                    <div className="flex flex-col items-center gap-4">
                                        <span className="text-2xl font-black text-zinc-500">1</span>
                                        <div className="w-20 h-20 rounded-2xl bg-zinc-800 border border-white/5 flex items-center justify-center text-3xl font-black text-zinc-500">CHE</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-xs font-bold text-zinc-500">
                                    <div>⚽ Salah 29' (P)</div>
                                    <div>⚽ Jones 51'</div>
                                    <div>⚽ Gakpo 82'</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* League Table Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="p-8 rounded-[2.5rem] bg-[#c8102e] text-white">
                            <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                                <Shield className="w-5 h-5" /> Premier League
                            </h3>
                            <table className="w-full text-sm font-bold">
                                <thead>
                                    <tr className="border-b border-white/20 text-white/60">
                                        <th className="text-left py-3">#</th>
                                        <th className="text-left py-3">Team</th>
                                        <th className="text-center py-3">P</th>
                                        <th className="text-center py-3">Pts</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    {table.map((row) => (
                                        <tr key={row.pos} className={row.team === 'Liverpool' ? 'bg-white/10' : ''}>
                                            <td className="py-4">{row.pos}</td>
                                            <td className="py-4">{row.team}</td>
                                            <td className="py-4 text-center text-white/60">{row.p}</td>
                                            <td className="py-4 text-center text-xl">{row.pts}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-8 pt-6 border-t border-white/20 text-center">
                                <Link href="https://www.premierleague.com/tables" target="_blank" className="text-xs font-black uppercase tracking-widest hover:text-white/80 transition-colors flex items-center justify-center gap-2">
                                    Full Standings <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
