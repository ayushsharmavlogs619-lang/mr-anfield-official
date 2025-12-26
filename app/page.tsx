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
import { getLatestNews, Article } from "@/app/lib/api";

export default function Home() {
  const [newsGrid, setNewsGrid] = useState<Article[]>([]);
  const [tickerNews, setTickerNews] = useState<any[]>(TRENDING_NEWS);
  const [heroPost, setHeroPost] = useState<any>(HERO_ARTICLE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNews() {
      try {
        const latest = await getLatestNews(20);
        if (latest.length > 0) {
          setNewsGrid(latest);
          setHeroPost(latest[0]);

          // Use latest articles for ticker if no specific trending data exists
          const tickerFormatted = latest.slice(0, 5).map(art => ({
            tag: art.category?.toUpperCase() || "NEWS",
            title: art.title
          }));
          setTickerNews(tickerFormatted);
        } else {
          setNewsGrid(LATEST_NEWS as any);
        }
      } catch (error) {
        console.error("Failed to load news", error);
        setNewsGrid(LATEST_NEWS as any);
      } finally {
        setLoading(false);
      }
    }
    loadNews();
  }, []);

  const trendingNews = tickerNews;
  const matchData = UPCOMING_MATCH;
  const worldNews = newsGrid.slice(6, 9).length > 0 ? newsGrid.slice(6, 9) : GENERAL_FOOTBALL;
  const exclusiveNews = newsGrid.filter(a => a.type === 'Exclusive').slice(0, 4);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-[#c8102e]/30 font-sans pb-20 overflow-x-hidden">
      {/* ⚡ BREAKING NEWS TICKER */}
      <div className="bg-[#c8102e] py-2 overflow-hidden border-b border-white/10 shadow-[0_4px_30px_rgba(200,16,46,0.4)] relative z-50">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerNews, ...tickerNews].map((news, i) => (
            <span key={i} className="mx-10 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-white">
              <Zap className="w-3 h-3 fill-[#f6eb61] text-[#f6eb61]" /> {news.tag}: {news.title}
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-10 space-y-24 relative">
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
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] italic text-white">
              BREAKING FROM<br /><span className="text-[#c8102e] drop-shadow-[0_0_30px_rgba(200,16,46,0.6)] font-black">ANFIELD</span>
            </h1>
            <p className="text-zinc-400 font-bold text-base md:text-2xl max-w-lg mx-auto italic px-4">
              The hottest Liverpool FC news that's got everyone talking... 🚀
            </p>
          </div>

          {/* MAIN HERO CARD */}
          <Link href={`/news/${heroPost.slug || heroPost.id}`} className="block group px-0 md:px-0">
            <div className={`relative aspect-[4/5] sm:aspect-[16/9] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-[#c8102e]/30 shadow-[0_40px_100px_rgba(200,16,46,0.2)] bg-zinc-900 ${loading ? 'animate-pulse' : ''}`}>
              {!loading && (
                <Image src={heroPost.image || "/stadium.png"} alt="Hero" fill className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
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
              <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 space-y-4 text-left">
                <h3 className="text-3xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase group-hover:text-[#f6eb61] transition-colors drop-shadow-2xl">
                  {heroPost.title}
                </h3>
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
            {worldNews.map((item, i) => (
              <Link href={`/news/${item.slug || item.id}`} key={i} className="group relative h-[400px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/5 hover:border-[#c8102e]/50 transition-all shadow-xl">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-4 md:space-y-6">
                  <span className="px-3 py-1.5 bg-[#c8102e]/20 backdrop-blur-md border border-[#c8102e]/30 text-[#f6eb61] text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-xl">
                    {item.category}
                  </span>
                  <h4 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-[#f6eb61] transition-colors">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-black text-zinc-500 uppercase tracking-widest">
                    <User className="w-3 h-3 text-[#c8102e]" />
                    Editorial Board
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
              {newsGrid.slice(1, 6).map((item, i) => (
                <Link href={`/news/${item.slug || item.id}`} key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#c8102e]/30 transition-all group gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#c8102e]/10 border border-[#c8102e]/20 flex items-center justify-center group-hover:bg-[#c8102e] transition-all">
                      <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-[#c8102e] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <span className="font-black text-lg md:text-xl text-white group-hover:text-[#c8102e] block transition-colors leading-tight">{item.title}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1 block">{item.category} • {item.date}</span>
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
              {(exclusiveNews.length > 0 ? exclusiveNews : TRENDING_NEWS as any[]).map((item, i) => (
                <Link href={`/news/${item.slug || item.id}`} key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#f6eb61]/30 transition-all group gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center group-hover:bg-[#f6eb61] transition-all">
                      <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#f6eb61] group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <span className="font-black text-lg md:text-xl text-white group-hover:text-[#f6eb61] block transition-colors leading-tight">{item.title}</span>
                      <span className="text-[9px] md:text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1 block">PREMIUM ANALYSIS • {item.category || item.tag}</span>
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

        {/* 📋 QUICK LINKS & MATCHES */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 py-12">
          <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-zinc-900/40 border border-white/5 space-y-6 md:space-y-8 backdrop-blur-sm">
            <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-white">Quick Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {[{ n: 'Match Fixtures', i: Calendar }, { n: 'Player Stats', i: User }, { n: 'League Table', i: TrendingUp }].map((link, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 md:p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-[#c8102e]/10 hover:border-[#c8102e]/30 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#c8102e]">
                      <link.i className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 group-hover:text-white" />
                    </div>
                    <span className="font-black uppercase tracking-widest text-[10px] md:text-sm text-zinc-300 group-hover:text-white">{link.n}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#c8102e]/5 border border-[#c8102e]/20 space-y-6 md:space-y-8 backdrop-blur-sm">
            <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-[#c8102e]">Upcoming Battles</h4>
            <div className="grid gap-4">
              {[{ t: 'Manchester City', v: 'Anfield', d: 'March 20 • 17:30' }, { t: 'Arsenal', v: 'Emirates', d: 'March 27 • 14:00' }].map((m, idx) => (
                <div key={idx} className="p-6 rounded-[2rem] bg-black/40 border border-white/10 flex flex-col sm:flex-row justify-between items-center group hover:border-[#c8102e] transition-all relative overflow-hidden gap-4">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8102e]/5 blur-3xl rounded-full" />
                  <div className="relative z-10 text-center sm:text-left">
                    <div className="text-base md:text-lg font-black text-white uppercase tracking-tighter mb-1 select-none">vs {m.t}</div>
                    <div className="text-[9px] md:text-[10px] font-black text-[#c8102e] uppercase tracking-[0.2em]">{m.d}</div>
                  </div>
                  <span className="relative z-10 text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-[#c8102e] text-white px-5 py-2 rounded-xl shadow-lg shadow-[#c8102e]/20">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
