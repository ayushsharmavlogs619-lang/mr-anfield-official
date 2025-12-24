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
  Send
} from "lucide-react";

import { HERO_ARTICLE, UPCOMING_MATCH, LATEST_NEWS, TRENDING_NEWS } from "@/app/lib/data";

export default function Home() {
  const heroPost = HERO_ARTICLE;
  const trendingNews = TRENDING_NEWS;
  const matchData = UPCOMING_MATCH;
  const newsGrid = LATEST_NEWS;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-[#c8102e]/30 font-sans pb-20">
      {/* ⚡ BREAKING NEWS TICKER */}
      <div className="bg-[#c8102e] py-2 overflow-hidden border-b border-white/10 shadow-[0_4px_20px_rgba(200,16,46,0.3)]">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...TRENDING_NEWS, ...TRENDING_NEWS].map((news, i) => (
            <span key={i} className="mx-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white">
              <Zap className="w-3 h-3 fill-current text-[#f6eb61]" /> {news.tag}: {news.title}
            </span>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-10 space-y-12">
        {/* 🔥 BREAKING FROM ANFIELD SECTION */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-2xl animate-pulse">🔥</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none italic text-white drop-shadow-2xl">
              BREAKING FROM<br /><span className="text-[#c8102e]">ANFIELD</span>
            </h2>
            <p className="text-zinc-400 font-medium max-w-md mx-auto">The hottest Liverpool FC news that's got everyone talking 🚀</p>
          </div>

          {/* MAIN HERO CARD */}
          <Link href={`/news/${heroPost.id}`} className="block group">
            <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src="/stadium.png" alt="Hero" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-5 py-2 bg-[#c8102e] text-white text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/20">
                  {heroPost.category}
                </span>
              </div>
            </div>
            <div className="px-4 py-8 space-y-4">
              <h3 className="text-3xl md:text-5xl font-black text-white leading-tight transition-colors group-hover:text-[#c8102e]">
                {heroPost.title}
              </h3>
              <p className="text-zinc-500 text-lg leading-relaxed line-clamp-3">
                {heroPost.excerpt}
              </p>
            </div>
          </Link>
        </section>

        {/* 👑 JOIN THE REVOLUTION SECTION */}
        <section className="relative py-16 px-8 rounded-[3rem] overflow-hidden bg-black border border-white/5">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Trophy className="w-48 h-48 text-[#f6eb61]" />
          </div>
          <div className="relative z-10 text-center space-y-10 max-w-xl mx-auto">
            <div className="space-y-4">
              <Zap className="w-12 h-12 text-[#f6eb61] mx-auto animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter italic">
                JOIN THE <span className="text-[#c8102e]">REDS</span><br />REVOLUTION!
              </h2>
              <p className="text-zinc-400 font-bold">Get breaking Liverpool FC news before anyone else! 🔥</p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-zinc-900 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#f6eb61]/50 transition-all font-bold"
              />
              <button className="w-full py-5 bg-rev-gradient text-black font-black uppercase tracking-widest rounded-2xl shadow-2xl hover:scale-[1.02] transition-all animate-pulse-glow flex items-center justify-center gap-3" title="Subscribe to News">
                <Send className="w-5 h-5" /> Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* 📊 GRID SECTION: TRENDING & LISTS */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* LATEST LIST */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 italic text-white">
              <span className="text-2xl">🔥</span> LATEST
            </h3>
            <div className="space-y-4">
              {newsGrid.slice(0, 4).map((item, i) => (
                <Link href={`/news/${item.id}`} key={i} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <Zap className="w-4 h-4 text-[#c8102e]" />
                    <div>
                      <span className="font-bold text-lg group-hover:text-[#c8102e] block">{item.title}</span>
                      <span className="text-xs text-zinc-500 uppercase font-black tracking-widest">{item.category} • {item.date}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* EXCLUSIVE LIST (Trending News as stand-in for exclusive content) */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3 italic text-white">
              <Zap className="w-6 h-6 text-[#f6eb61] fill-current" /> EXCLUSIVE
            </h3>
            <div className="space-y-4">
              {trendingNews.map((item, i) => (
                <Link href="/exclusive" key={i} className="flex items-center justify-between p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-all cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <Zap className="w-4 h-4 text-[#f6eb61]" />
                    <div>
                      <span className="font-bold text-lg group-hover:text-[#f6eb61] block">{item.title}</span>
                      <span className="text-xs text-zinc-500 uppercase font-black tracking-widest">Premium Analysis • {item.tag}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 📋 QUICK LINKS & MATCHES */}
        <section className="grid md:grid-cols-2 gap-12 pt-12">
          <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/10 space-y-6">
            <h4 className="text-xl font-black uppercase italic">Quick Links</h4>
            <div className="space-y-2">
              {[{ n: 'Match Fixtures', i: Calendar }, { n: 'Player Stats', i: User }, { n: 'League Table', i: TrendingUp }].map((link, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 hover:bg-white/5 px-2 rounded-lg transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <link.i className="w-5 h-5 text-zinc-500" />
                    <span className="font-bold">{link.n}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-700 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] bg-zinc-900/30 border border-white/10 space-y-6">
            <h4 className="text-xl font-black uppercase italic text-[#c8102e]">Upcoming Matches</h4>
            <div className="space-y-4">
              {[{ t: 'Manchester City', v: 'Anfield', d: 'March 20 • 17:30' }, { t: 'Arsenal', v: 'Emirates', d: 'March 27 • 14:00' }].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center group hover:border-[#c8102e]/50 transition-all">
                  <div>
                    <div className="text-sm font-black text-zinc-500 uppercase tracking-widest mb-1">vs {m.t}</div>
                    <div className="text-xs font-bold text-zinc-600">{m.d}</div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full">{m.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
