'use client';

import Link from "next/link";
import Image from "next/image";
import {
  TrendingUp,
  Calendar,
  ChevronRight,
  Search,
  Menu,
  Share2,
  MessageSquare,
  Trophy,
  Star,
  Zap,
  Clock,
  ExternalLink,
  Shield,
  User,
  Send,
  Flame,
  Mail
} from "lucide-react";

import { useState, useEffect } from 'react';
import { HERO_ARTICLE, UPCOMING_MATCH, LATEST_NEWS, TRENDING_NEWS, GENERAL_FOOTBALL } from "@/app/lib/data";
import { getLatestNews, getHeroArticle, getExclusiveNews, getUpcomingMatches, getLeagueTable, Article } from "@/app/lib/api";

const ScreenReaderOnly = ({ children }: { children: React.ReactNode }) => (
  <h1 className="sr-only">{children}</h1>
);

export default function Home() {
  const [newsGrid, setNewsGrid] = useState<Article[]>([]);
  const [tickerNews, setTickerNews] = useState<{ tag: string; title: string }[]>(TRENDING_NEWS.map(art => ({ tag: art.tag.toUpperCase(), title: art.title })));
  const [heroPost, setHeroPost] = useState<Article>(HERO_ARTICLE as Article);
  const [exclusiveNews, setExclusiveNews] = useState<Article[]>([]);
  const [upcomingMatch, setUpcomingMatch] = useState<any>(null); // Keeping any for now until Match interface is better defined or imported
  const [leagueTable, setLeagueTable] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (date: any) => {
    if (!date) return "Dec 2025";
    if (typeof date === 'string') return date;
    if (date && typeof date === 'object' && 'toDate' in date) {
      return (date as any).toDate().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const [hero, latest, exclusive, matches, table] = await Promise.all([
          getHeroArticle(),
          getLatestNews(15),
          getExclusiveNews(4),
          getUpcomingMatches(1),
          getLeagueTable()
        ]);

        if (hero) setHeroPost(hero);
        if (latest.length > 0) setNewsGrid(latest);
        if (exclusive.length > 0) setExclusiveNews(exclusive);
        if (matches.length > 0) setUpcomingMatch(matches[0]);
        if (table.length > 0) setLeagueTable(table.slice(0, 5));

        // Update Ticker
        const tickerSource = latest.length > 0 ? latest : LATEST_NEWS;
        const tickerFormatted = tickerSource.slice(0, 10).map((art) => ({
          tag: (art.category || "NEWS").toUpperCase(),
          title: art.title
        }));
        setTickerNews(tickerFormatted);

      } catch (error) {
        console.error("Failed to load news", error);
        setNewsGrid(LATEST_NEWS as any);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  const worldNews = newsGrid.slice(8, 11).length > 0 ? newsGrid.slice(8, 11) : GENERAL_FOOTBALL;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-[#c8102e]/30 font-sans pb-20 overflow-x-hidden">
      {/* ⚡ BREAKING NEWS TICKER */}
      <div className="bg-[#c8102e] py-3 overflow-hidden border-b border-white/20 shadow-[0_4px_30px_rgba(200,16,46,0.5)] relative z-50 group">
        <div className="absolute left-0 top-0 bottom-0 px-6 bg-[#c8102e] z-10 flex items-center shadow-[20px_0_30px_#c8102e]">
          <span className="flex items-center gap-2 text-white font-[900] italic text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-white rounded-full animate-ping" /> Live
          </span>
        </div>
        <div className="flex whitespace-nowrap animate-marquee pl-[120px]">
          {[...tickerNews, ...tickerNews, ...tickerNews, ...tickerNews].map((news, i) => (
            <span key={i} className="mx-12 flex items-center gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] text-white/90 hover:text-white transition-colors cursor-default">
              <span className="text-[#f6eb61] font-black">{news.tag}</span>
              <span className="w-1 h-1 bg-white/30 rounded-full" />
              {news.title}
              <Zap className="w-3 h-3 fill-[#f6eb61] text-[#f6eb61] ml-4 opacity-50" />
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-10 space-y-24 relative">
        <ScreenReaderOnly>Mr. Anfield Football - Premium Liverpool FC News & Tactical Analysis</ScreenReaderOnly>
        {/* Background Atmospheric Glows - RED EVERYWHERE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[120%] h-[1000px] bg-red-900/40 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[800px] -left-[20%] w-[80%] h-[800px] bg-red-900/30 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-[1600px] -right-[20%] w-[80%] h-[800px] bg-red-900/20 blur-[180px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[600px] bg-red-900/30 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-lfc-radial pointer-events-none" />

        {/* 🔥 BREAKING FROM ANFIELD SECTION */}
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 relative z-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c8102e] blur-3xl opacity-60 animate-pulse" />
                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-3xl md:text-4xl text-[#c8102e]">🔥</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic text-white">
              BREAKING FROM<br /><span className="text-[#c8102e] drop-shadow-[0_0_30px_rgba(200,16,46,0.6)] font-black">ANFIELD</span>
            </h2>
            <p className="text-zinc-400 font-bold text-base md:text-2xl max-w-lg mx-auto italic px-4">
              The hottest Liverpool FC news that&apos;s got everyone talking... 🚀
            </p>
          </div>

          {/* MAIN HERO CARD */}
          <Link href={`/news/${heroPost.slug || heroPost.id}`} className="block group px-0 md:px-0">
            <div className={`relative aspect-[4/5] sm:aspect-[16/9] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-[#c8102e]/30 shadow-[0_40px_100px_rgba(200,16,46,0.2)] bg-zinc-900 ${loading ? 'animate-pulse' : ''}`}>
              {!loading && (
                <Image
                  src={heroPost.image || "/stadium.png"}
                  alt="Hero"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />

              {/* Floating Tag */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <div className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#c8102e] rounded-xl md:rounded-2xl border border-white/30 shadow-[0_0_40px_rgba(200,16,46,0.6)]">
                  <Flame className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
                  <span className="text-white text-[10px] md:text-sm font-black uppercase tracking-[0.3em]">
                    {heroPost.category}
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 space-y-4 md:space-y-8 text-left">
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-3xl md:text-8xl font-black text-white leading-[0.85] tracking-tighter uppercase group-hover:text-[#f6eb61] transition-colors drop-shadow-2xl italic">
                    {heroPost.title}
                  </h3>
                  <p className="text-zinc-300 font-bold text-sm md:text-2xl max-w-4xl line-clamp-2 md:line-clamp-3 italic opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {heroPost.excerpt || "Dive deep into the latest tactical evolution and club news from the heart of Anfield..."}
                  </p>
                </div>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">
                  <div className="px-8 py-4 bg-white text-black text-xs md:text-sm font-black uppercase tracking-[0.2em] rounded-2xl flex items-center gap-3 shadow-2xl">
                    Read Analysis <ChevronRight className="w-4 h-4" />
                  </div>
                  <div className="hidden md:flex items-center gap-3 text-white/60 text-xs font-black uppercase tracking-widest">
                    <Clock className="w-4 h-4 text-[#f6eb61]" /> {heroPost.readTime || '5 min read'}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* 🌍 WORLD OF FOOTBALL SECTION */}
        <section className="space-y-12">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-4 italic text-white">
              <span className="w-8 md:w-12 h-1 bg-[#c8102e] rounded-full" />
              GLOBAL INSIGHTS
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(worldNews as Article[]).map((item: Article, i: number) => (
              <Link href={`/news/${item.slug || item.id}`} key={i} className="group relative h-[400px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#c8102e]/50 transition-all shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-4 md:space-y-6">
                  <span className="px-3 py-1.5 bg-[#c8102e]/20 backdrop-blur-md border border-[#c8102e]/30 text-[#f6eb61] text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl">
                    {item.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-[#f6eb61] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs font-black text-zinc-500 uppercase tracking-widest">
                      <User className="w-3 h-3 text-[#c8102e]" />
                      {item.author || "Mr. Anfield"}
                    </div>
                    <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">
                      {formatDate(item.timestamp || item.date)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 📊 GRID SECTION: TRENDING & LISTS */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LATEST LIST */}
          <div className="space-y-8 md:space-y-10">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-4 italic text-white">
              <Flame className="w-6 h-6 md:w-8 md:h-8 text-[#c8102e] fill-current" /> LATEST STORIES
            </h3>
            <div className="grid gap-4">
              {((newsGrid.length > 0 ? newsGrid : LATEST_NEWS) as Article[]).slice(1, 7).map((item: Article, i: number) => (
                <Link href={`/news/${item.slug || item.id}`} key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#c8102e]/30 transition-all group gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center group-hover:bg-[#c8102e] transition-all">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#c8102e] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="font-black text-lg md:text-xl text-white group-hover:text-[#c8102e] block transition-colors leading-tight">{item.title}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1 block">
                        {item.category} • {formatDate(item.timestamp || item.date)}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/5 items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* EXCLUSIVE LIST */}
          <div className="space-y-8 md:space-y-10">
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-4 italic text-white">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#f6eb61] fill-current" /> EXCLUSIVE INSIGHTS
            </h3>
            <div className="grid gap-4">
              {((exclusiveNews.length > 0 ? exclusiveNews : TRENDING_NEWS) as Article[]).map((item: Article, i: number) => (
                <Link href={`/news/${item.slug || item.id}`} key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#f6eb61]/30 transition-all group gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-[#f6eb61] transition-all">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#f6eb61] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <span className="font-black text-lg md:text-xl text-white group-hover:text-[#f6eb61] block transition-colors leading-tight">{item.title}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1 block">
                        PREMIUM ANALYSIS • {item.category} {item.timestamp || item.date ? `• ${formatDate(item.timestamp || item.date)}` : ''}
                      </span>
                    </div>
                  </div>
                  <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/5 items-center justify-center group-hover:bg-[#f6eb61] group-hover:text-black transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 📋 MATCH HUB & INNER SANCTUM */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 py-12 relative">

          {/* Match Hub */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-white mb-12 flex items-center gap-6">
                <Trophy className="w-8 h-8 md:w-12 md:h-12 text-[#f6eb61] fill-current" /> MATCH HUB
              </h3>

              {/* Next Match Card */}
              <div className="p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#c8102e] to-[#800a1d] shadow-[0_30px_100px_rgba(200,16,46,0.4)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                  <Shield className="w-48 h-48 text-white" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-8">
                  <span className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-white border border-white/20">NEXT FIXTURE • {upcomingMatch?.competition || "PREMIER LEAGUE"}</span>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-center gap-4 w-1/3">
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-white flex items-center justify-center shadow-xl">
                        <span className="text-3xl md:text-5xl font-black text-[#c8102e] italic shrink-0">{upcomingMatch?.home?.substring(0, 3).toUpperCase() || "LIV"}</span>
                      </div>
                      <span className="text-white font-black uppercase tracking-wider text-xs md:text-sm">{upcomingMatch?.home || "LIVERPOOL"}</span>
                    </div>
                    <div className="flex items-center flex-col gap-2">
                      <span className="text-white/40 font-black italic text-4xl">VS</span>
                      <div className="h-px w-12 bg-white/20" />
                      <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{formatDate(upcomingMatch?.date)}</span>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-1/3">
                      <div className="w-20 h-20 md:w-28 md:h-28 rounded-[2rem] bg-zinc-900 flex items-center justify-center shadow-xl border border-white/10">
                        <span className="text-3xl md:text-5xl font-black text-white/50 italic shrink-0">{upcomingMatch?.away?.substring(0, 3).toUpperCase() || "MCI"}</span>
                      </div>
                      <span className="text-white font-black uppercase tracking-wider text-xs md:text-sm">{upcomingMatch?.away || "MAN CITY"}</span>
                    </div>
                  </div>
                  <Link href="/match-center" className="w-full bg-white text-black font-black uppercase py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-100 transition-all shadow-xl text-sm tracking-widest active:scale-95">
                    Match Center <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mini Table */}
            <div className="p-8 md:p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 backdrop-blur-xl">
              <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white mb-8 flex items-center gap-4">
                <TrendingUp className="w-6 h-6 text-[#c8102e]" /> League Standings
              </h4>
              <div className="space-y-4">
                {(leagueTable.length > 0 ? leagueTable : [{ team: 'Liverpool', p: 9, pts: 24, pos: 1 }]).map((team, idx) => (
                  <div key={idx} className={`flex items-center justify-between p-5 rounded-2xl border ${team.team === 'Liverpool' ? 'bg-[#c8102e]/10 border-[#c8102e]/30 shadow-lg shadow-[#c8102e]/10' : 'bg-black/20 border-white/5'}`}>
                    <div className="flex items-center gap-6">
                      <span className="text-lg font-black italic text-zinc-600 w-4">{team.pos || idx + 1}</span>
                      <span className={`text-base font-black tracking-tight ${team.team === 'Liverpool' ? 'text-white' : 'text-zinc-400'}`}>{team.team}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] text-zinc-600 font-black uppercase">P</span>
                        <span className="text-zinc-500 font-black">{team.p || 0}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] text-zinc-600 font-black uppercase">PTS</span>
                        <span className="text-white font-black text-xl">{team.pts || 0}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="https://www.premierleague.com/tables" target="_blank" className="mt-8 flex items-center justify-center gap-2 text-zinc-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest group">
                Full Premier League Table <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Inner Sanctum / Newsletter */}
          <div className="flex flex-col justify-center">
            <div className="p-8 md:p-20 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-black border border-[#c8102e]/20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              {/* Visual Flares */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#c8102e]/20 blur-[100px] rounded-full group-hover:bg-[#c8102e]/30 transition-all duration-1000" />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#f6eb61]/10 blur-[80px] rounded-full" />

              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <span className="text-[#c8102e] font-black uppercase tracking-[0.5em] text-xs">JOIN THE REVOLUTION</span>
                  <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-[0.85]">
                    THE <span className="text-[#c8102e]">INNER</span><br />SANCTUM
                  </h2>
                </div>

                <p className="text-zinc-400 text-lg md:text-2xl font-bold italic leading-relaxed">
                  Get tactical insights, transfer leaks, and matchday intelligence directly from the Mr. Anfield office. No spam. Just pure Red passion.
                </p>

                <div className="space-y-6">
                  <div className="relative flex items-center">
                    <Mail className="absolute left-6 w-6 h-6 text-zinc-500" />
                    <input
                      type="email"
                      placeholder="Your tactical email..."
                      className="w-full bg-black/50 border border-white/10 rounded-2xl py-6 pl-16 pr-6 text-white text-lg focus:border-[#c8102e] outline-none transition-all placeholder:italic placeholder:text-zinc-700"
                    />
                  </div>
                  <button className="w-full bg-white text-black font-[1000] uppercase py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#c8102e] hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-lg tracking-[0.1em] italic active:scale-95 group">
                    SUBSCRIBE TO THE INTELLIGENCE
                    <Send className="w-5 h-5 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />
                  </button>
                </div>

                <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest text-center">
                  TRUSTED BY 25,000+ REDS WORLDWIDE
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
