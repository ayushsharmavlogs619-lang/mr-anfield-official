'use client';

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
  ExternalLink
} from "lucide-react";

export default function Home() {
  const trendingNews = [
    { title: "Klopp's Legacy: Five years since the Madrid triumph", time: "2h ago", tag: "Editorial" },
    { title: "Transfer Update: Midfield target spotted in Liverpool", time: "5h ago", tag: "Rumors" },
    { title: "Injury News: Key defender returns to full training", time: "8h ago", tag: "Team News" },
    { title: "Tactical Analysis: How slot is evolving the high press", time: "1d ago", tag: "Analysis" },
  ];

  const newsGrid = [
    {
      title: "Liverpool secured dramatic late winner at Anfield",
      excerpt: "A look back at the most emotional moments under the lights as Anfield roared the Reds to victory...",
      image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
      category: "Match Report",
      author: "James Pearce",
      date: "Oct 24, 2025"
    },
    {
      title: "Inside the Scouting: The Next Generation of Reds",
      excerpt: "Our deep dive into the academy structure and the rising stars pushing for a first-team place this season.",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
      category: "Feature",
      author: "Melissa Reddy",
      date: "Oct 23, 2025"
    },
    {
      title: "Exclusive: Transfer targets for the Winter Window",
      excerpt: "We break down the three key positions the recruitment team is looking to bolster in January.",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop",
      category: "Transfer News",
      author: "Fabrizio Romano",
      date: "Oct 22, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-[#c8102e]/30">
      {/* Top Bar Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#c8102e] rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black italic tracking-tighter text-white uppercase">MR. ANFIELD</span>
            </div>
            <div className="hidden lg:flex gap-10 text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
              <a href="#" className="hover:text-[#c8102e] transition-colors text-zinc-100 border-b-2 border-[#c8102e] pb-1">News</a>
              <a href="#" className="hover:text-[#c8102e] transition-colors">Transfers</a>
              <a href="#" className="hover:text-[#c8102e] transition-colors">Tactics</a>
              <a href="#" className="hover:text-[#c8102e] transition-colors">Academy</a>
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Feature */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/stadium.png"
                alt="Featured News"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-20 p-8 md:p-12 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-[#c8102e] text-white text-[10px] font-black uppercase tracking-widest rounded-full">MUST READ</span>
                <span className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                  <Clock className="w-3 h-3" /> 15 min read
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Anfield Reimagined: The Future of the Historic Stand
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-medium">
                Deep dive into the club's long-term vision for the stadium expansion and how it will transform the atmosphere on European nights.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 border border-white/10" />
                  <div>
                    <div className="text-sm font-bold text-white leading-none">Oliver Kay</div>
                    <div className="text-xs text-zinc-500 font-medium mt-1">Senior Correspondent</div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#c8102e] font-black text-sm uppercase tracking-widest group/btn">
                  Read Article <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Trending */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-[2rem] bg-[#c8102e]/5 border border-[#c8102e]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp className="w-16 h-16 text-[#c8102e]" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#c8102e] fill-current" /> Trending Now
              </h3>
              <div className="space-y-8">
                {trendingNews.map((news, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#c8102e]">{news.tag}</span>
                      <span className="text-[10px] text-zinc-600 font-bold">• {news.time}</span>
                    </div>
                    <h4 className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-zinc-900 border border-white/5">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-zinc-500" /> Match Center
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="flex items-center justify-between mb-4 text-[10px] font-black text-zinc-600 uppercase tracking-widest">
                    <span>Premier League</span>
                    <span className="text-[#c8102e]">Full Time</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-black">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10" />
                      <span className="text-[10px] uppercase tracking-wider">LFC</span>
                    </div>
                    <div className="text-3xl">3 - 1</div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10" />
                      <span className="text-[10px] uppercase tracking-wider">MCFC</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 text-center">
                    <button className="text-[10px] font-black uppercase tracking-widest text-[#c8102e] hover:text-[#e01e37] transition-colors">
                      View Match Stats
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories / Grid Section */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tighter flex items-center gap-3">
              <Star className="w-8 h-8 text-[#c8102e] fill-current" /> Latest Updates
            </h2>
            <div className="flex gap-4">
              <button className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-white/5 transition-all">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <button className="p-3 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-white/5 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsGrid.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 bg-zinc-900 border border-white/5 shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest rounded-full border border-white/10">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500">
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-white group-hover:text-[#c8102e] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-6 pt-2">
                    <button className="flex items-center gap-1.5 text-zinc-600 hover:text-white transition-colors">
                      <MessageSquare className="w-4 h-4" /> <span className="text-xs font-bold">24</span>
                    </button>
                    <button className="flex items-center gap-1.5 text-zinc-600 hover:text-white transition-colors">
                      <Share2 className="w-4 h-4" /> <span className="text-xs font-bold">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 relative py-20 rounded-[3rem] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c8102e] to-[#800a1d]" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,white_0%,transparent_50%)]" />
          <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">
              The Reds in your inbox
            </h2>
            <p className="text-white/80 text-lg font-medium">
              Join 50,000+ Liverpool fans getting exclusive tactical breakdowns and transfer news delivered daily.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 rounded-2xl bg-black/20 border border-white/10 placeholder:text-white/40 text-white outline-none focus:bg-black/40 transition-all font-bold"
              />
              <button className="px-10 py-5 bg-white text-[#c8102e] rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-zinc-100 transition-all shadow-xl">
                Subscribe
              </button>
            </div>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
              Unsubscribe anytime. Privacy policy applies.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 pb-20 px-4 md:px-8 border-t border-white/5">
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
                <li><a href="#" className="hover:text-white transition-colors">Latest News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Match Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">The Kop Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Premium Analysis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">Support</h4>
              <ul className="space-y-4 text-sm font-bold text-zinc-500">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Writers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
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
    </div>
  );
}
