
import { Calendar, ChevronRight, Clock, MapPin, Shield, Trophy, Flame, Zap } from "lucide-react";
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
        <div className="min-h-screen bg-[#050505] text-zinc-100 pb-20 relative overflow-hidden">
            {/* Background Atmospheric Glows - RED EVERYWHERE */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-red-900/30 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#c8102e]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative bg-[#c8102e] h-64 md:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/stadium.png')] bg-cover bg-center opacity-30 mix-blend-overlay scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center gap-3 mb-3 md:mb-4">
                            <div className="w-8 md:w-12 h-1 bg-white/30 rounded-full" />
                            <div className="flex items-center gap-2 text-white/80 text-[10px] md:text-sm font-black uppercase tracking-[0.3em]">
                                <Trophy className="w-3 h-3 md:w-4 md:h-4 text-[#f6eb61]" /> Premier League Division
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none drop-shadow-2xl">
                            MATCH <span className="text-white/20">CENTER</span>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 -mt-12 md:-mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                    {/* Fixtures Column */}
                    <div className="lg:col-span-8 space-y-8 md:space-y-12">
                        <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#0a0a0a] border border-[#c8102e]/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Calendar className="w-48 h-48 text-[#c8102e]" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10 flex items-center gap-4 text-white relative z-10">
                                <div className="p-2 md:p-3 bg-[#c8102e]/20 rounded-xl md:rounded-2xl border border-[#c8102e]/30">
                                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#c8102e]" />
                                </div>
                                Upcoming Fixtures
                            </h3>
                            <div className="space-y-4 md:space-y-6 relative z-10">
                                {matches.map((match, i) => (
                                    <div key={i} className="group p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#c8102e] transition-all flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-xl">
                                        <div className="flex items-center gap-6 text-sm font-black text-zinc-500 w-full md:w-40 justify-center md:justify-start">
                                            <div className="flex flex-col items-center md:items-start gap-1">
                                                <span className="text-[#c8102e] uppercase tracking-[0.2em] text-[10px] bg-[#c8102e]/10 px-3 py-1 rounded-lg border border-[#c8102e]/20">{match.competition}</span>
                                                <span className="text-white text-base md:text-lg tracking-tighter">{match.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-center justify-center gap-6 md:gap-10 text-xl md:text-4xl font-black uppercase tracking-tighter w-full">
                                            <div className="text-right w-1/3 text-white group-hover:text-[#c8102e] transition-colors">{match.home}</div>
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#c8102e] flex items-center justify-center text-[10px] md:text-xs font-black text-white shadow-lg shadow-[#c8102e]/40">VS</div>
                                            </div>
                                            <div className="text-left w-1/3 text-white group-hover:text-[#c8102e] transition-colors">{match.away}</div>
                                        </div>
                                        <div className="w-full md:w-32 flex justify-center md:justify-end">
                                            <button className="w-full md:w-auto px-8 py-3 rounded-2xl bg-white/5 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border border-white/10 group-hover:bg-[#c8102e] group-hover:border-transparent transition-all shadow-xl active:scale-95">
                                                Tickets
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Last Result */}
                        <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-[#1a0505] to-[#050505] border border-[#c8102e]/30 shadow-2xl relative overflow-hidden group">
                            <div className="absolute -bottom-10 -left-10 p-12 opacity-10">
                                <Trophy className="w-64 h-64 text-[#c8102e]" />
                            </div>
                            <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-8 md:mb-10 flex items-center gap-4 text-white relative z-10">
                                <div className="p-2 md:p-3 bg-[#c8102e]/20 rounded-xl md:rounded-2xl border border-[#c8102e]/30">
                                    <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#c8102e]" />
                                </div>
                                Latest Result
                            </h3>
                            <div className="flex flex-col items-center relative z-10">
                                <div className="text-[#c8102e] text-[9px] md:text-xs font-black uppercase tracking-[0.4em] mb-6 md:mb-8 bg-[#c8102e]/10 px-6 py-2 rounded-full border border-[#c8102e]/20">Full Time • Premier League</div>
                                <div className="flex items-center gap-6 md:gap-20 mb-10 md:mb-12">
                                    <div className="flex flex-col items-center gap-4 md:gap-6">
                                        <div className="w-20 h-20 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] bg-white text-[#c8102e] border-4 border-[#c8102e] flex items-center justify-center text-3xl md:text-5xl font-black shadow-[0_20px_40px_rgba(200,16,46,0.3)] italic">LIV</div>
                                        <span className="text-4xl md:text-7xl font-black italic">3</span>
                                    </div>
                                    <div className="text-[#c8102e] text-3xl md:text-4xl font-black animate-pulse">-</div>
                                    <div className="flex flex-col items-center gap-4 md:gap-6">
                                        <span className="text-4xl md:text-7xl font-black text-zinc-600 italic">1</span>
                                        <div className="w-20 h-20 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-900 border border-white/10 flex items-center justify-center text-3xl md:text-5xl font-black text-zinc-500 italic">CHE</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[10px] md:text-sm font-black text-zinc-400 uppercase tracking-widest bg-black/40 px-6 md:px-10 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] border border-white/5">
                                    <div className="flex items-center gap-2 font-bold"><Flame className="w-3 h-3 md:w-4 md:h-4 text-[#c8102e] fill-current" /> Salah 29' (P)</div>
                                    <div className="flex items-center gap-2 font-bold"><Flame className="w-3 h-3 md:w-4 md:h-4 text-[#c8102e] fill-current" /> Jones 51'</div>
                                    <div className="flex items-center gap-2 font-bold"><Flame className="w-3 h-3 md:w-4 md:h-4 text-[#c8102e] fill-current" /> Gakpo 82'</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* League Table Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-[#c8102e] to-[#800a1d] text-white shadow-[0_30px_60px_rgba(200,16,46,0.4)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/5 pointer-events-none group-hover:opacity-20 transition-opacity" />
                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4 relative z-10 italic">
                                <Shield className="w-6 h-6 md:w-8 md:h-8 fill-white/20" /> Premier League
                            </h3>
                            <div className="relative z-10 overflow-x-auto">
                                <table className="w-full text-sm font-black tracking-widest uppercase min-w-[300px]">
                                    <thead>
                                        <tr className="border-b border-white/20 text-white/50">
                                            <th className="text-left py-4">#</th>
                                            <th className="text-left py-4 text-[10px]">Team Name</th>
                                            <th className="text-center py-4">P</th>
                                            <th className="text-center py-4">Pts</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        {table.map((row) => (
                                            <tr key={row.pos} className={row.team === 'Liverpool' ? 'bg-white/20 backdrop-blur-md' : 'hover:bg-white/5 transition-colors'}>
                                                <td className="py-5 font-black italic">{row.pos}</td>
                                                <td className="py-5 font-black text-base md:text-lg tracking-tighter italic">{row.team}</td>
                                                <td className="py-5 text-center text-white/60">{row.p}</td>
                                                <td className="py-5 text-center text-xl md:text-2xl drop-shadow-lg">{row.pts}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-10 pt-8 border-t border-white/20 text-center relative z-10">
                                <Link href="https://www.premierleague.com/tables" target="_blank" className="bg-white text-black px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-200 transition-colors inline-flex items-center gap-3">
                                    Full Standings <ChevronRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Badge Card */}
                        <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-zinc-900 border border-[#c8102e]/30 flex flex-col items-center justify-center text-center space-y-4 shadow-2xl">
                            <Zap className="w-12 h-12 md:w-16 md:h-16 text-[#f6eb61] animate-pulse" />
                            <h4 className="text-lg md:text-xl font-black uppercase italic text-white tracking-tighter">RED REVOLUTION STATUS</h4>
                            <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Currently Ranking #1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
