
import { Metadata } from "next";
import { Calendar, Clock, Share2, MessageSquare, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { LATEST_NEWS, HERO_ARTICLE } from "@/app/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const article = LATEST_NEWS.find(n => n.id === id) || HERO_ARTICLE;

    return {
        title: `${article.title} — Mr. Anfield`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [
                {
                    url: article.image.startsWith("http") ? article.image : `https://mr-anfield.netlify.app${article.image}`,
                    width: 1200,
                    height: 630,
                }
            ],
            siteName: 'Mr. Anfield',
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.image.startsWith("http") ? article.image : `https://mr-anfield.netlify.app${article.image}`],
        }
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // Simulated data fetch. In a real app, we'd fetch from Firebase using the 'id'.
    // For now, we fallback to the Hero Article if ID doesn't match the list (for demo purposes).
    const article = LATEST_NEWS.find(n => n.id === id) || HERO_ARTICLE;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 pb-20">

            {/* Article Header Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={article.image.startsWith("http") ? article.image : "/stadium.png"}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-xs font-black uppercase tracking-widest mb-4">
                            <ChevronLeft className="w-4 h-4" /> Back to News
                        </Link>
                        <div className="flex flex-wrap gap-4 items-center">
                            <span className="px-4 py-1.5 bg-[#c8102e] text-white text-[10px] font-black uppercase tracking-widest rounded-full">{article.category}</span>
                            <span className="flex items-center gap-2 text-zinc-300 text-xs font-bold">
                                <Clock className="w-4 h-4" /> {article.readTime}
                            </span>
                            <span className="flex items-center gap-2 text-zinc-300 text-xs font-bold">
                                <Calendar className="w-4 h-4" /> {article.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tighter text-white">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-4 pt-4">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10" />
                            <div>
                                <div className="text-lg font-bold text-white">{article.author}</div>
                                <div className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Senior Writer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
                <div className="grid md:grid-cols-[1fr_200px] gap-12">

                    {/* Main Content */}
                    <article className="prose prose-invert prose-lg prose-red max-w-none">
                        <p className="lead text-2xl font-medium text-white mb-8 leading-relaxed">
                            {article.excerpt}
                        </p>
                        <div className="space-y-6 text-zinc-300 leading-relaxed font-serif text-lg">
                            <p>
                                Anfield witnessed another European night for the history books. From the first whistle, the intensity was palpable. The Kop was in full voice, creating that famous wall of sound that has paralyzed so many opponents before.
                            </p>
                            <h3 className="text-2xl font-black text-white font-sans mt-8 mb-4">Tactical Breakdown</h3>
                            <p>
                                Slot's men pressed high, suffocating the midfield and forcing turnover after turnover. It wasn't just about energy; it was about organized chaos. The data shows Liverpool recovered the ball in the final third 14 times in the first half alone—a season record.
                            </p>
                            <div className="my-8 p-8 bg-zinc-900 border-l-4 border-[#c8102e] rounded-r-xl">
                                <p className="text-xl font-bold text-white italic">
                                    "This is exactly what we train for. The boys were magnificent tonight. Every duel, every second ball—it was ours." - The Manager
                                </p>
                            </div>
                            <p>
                                As the clock wound down, the result was never in doubt. This team is building something special, brick by brick. The resilience shown after conceding the early goal demonstrates a mental fortitude that has been the hallmark of all great Liverpool sides.
                            </p>
                        </div>
                    </article>

                    {/* Sidebar Actions */}
                    <div className="hidden md:flex flex-col gap-6 sticky top-24 h-fit">
                        <div className="text-xs font-black uppercase tracking-widest text-zinc-500 mb-2">Share</div>
                        <button className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-all">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:bg-[#c8102e] hover:text-white transition-all">
                            <MessageSquare className="w-5 h-5" />
                        </button>
                        <div className="w-12 h-[1px] bg-zinc-800 my-2" />
                        <div className="text-center text-xs font-black text-zinc-600">
                            2.4k<br />Shares
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
