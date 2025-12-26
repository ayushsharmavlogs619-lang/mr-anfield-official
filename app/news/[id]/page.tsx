import { Metadata } from "next";
import { Calendar, Clock, Share2, MessageSquare, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RIVALRY_ARTICLES } from "@/app/lib/rivalry_content";
import { getArticleById } from "@/app/lib/api";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        return { title: "Article Not Found — Mr. Anfield Football" };
    }

    return {
        title: `${article.title} — Mr. Anfield Football`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            images: [
                {
                    url: article.image?.startsWith("http") ? article.image : `https://mranfieldfootball.com${article.image || '/stadium.png'}`,
                    width: 1200,
                    height: 630,
                }
            ],
            siteName: 'Mr. Anfield Football',
            type: 'article'
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.image?.startsWith("http") ? article.image : `https://mranfieldfootball.com${article.image || '/stadium.png'}`],
        }
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await getArticleById(id);

    if (!article) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-6xl font-black italic uppercase">404</h1>
                    <p className="text-zinc-500 uppercase tracking-widest">Match Abandoned. Article not found.</p>
                    <Link href="/" className="inline-block bg-[#c8102e] px-8 py-4 rounded-xl font-black uppercase italic mt-8">Back to Pitch</Link>
                </div>
            </div>
        );
    }

    const rivalryContent = RIVALRY_ARTICLES[id];

    // Simple Markdown-ish renderer
    const renderContent = (content: string) => {
        return content.split('\n\n').map((block, i) => {
            if (block.startsWith('### ')) {
                return <h3 key={i} className="text-2xl md:text-3xl font-black text-white font-sans mt-12 mb-6 border-l-4 border-[#c8102e] pl-6 italic uppercase tracking-tighter">{block.replace('### ', '')}</h3>;
            }
            if (block.startsWith('## ')) {
                return <h2 key={i} className="text-3xl md:text-5xl font-black text-white font-sans mt-16 mb-8 uppercase tracking-tighter italic leading-none">{block.replace('## ', '')}</h2>;
            }
            if (block.startsWith('# ')) {
                return null; // Skip main title as it's in the header
            }
            if (block.trim().startsWith('- ')) {
                return (
                    <ul key={i} className="space-y-4 my-6">
                        {block.split('\n').map((li, j) => (
                            <li key={j} className="flex gap-3 text-zinc-300">
                                <span className="text-[#c8102e] font-black">/</span>
                                {li.replace('- ', '')}
                            </li>
                        ))}
                    </ul>
                );
            }
            if (block.trim().startsWith('{{IMAGE:')) {
                const imageName = block.replace('{{IMAGE:', '').replace('}}', '').trim();
                return (
                    <div key={i} className="my-12 relative w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={`/${imageName}`}
                            alt="Article Visual"
                            fill
                            className="object-cover"
                        />
                    </div>
                );
            }
            return <p key={i} className="mb-6 text-zinc-300 leading-relaxed font-serif text-xl">{block.trim()}</p>;
        });
    };

    return (
        <div className="min-h-screen bg-[#050505] text-zinc-100 pb-20 relative overflow-hidden">
            {/* Background Glows - RED EVERYWHERE */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1000px] bg-red-900/40 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-[1200px] -left-[20%] w-[80%] h-[800px] bg-red-900/30 blur-[180px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-[2000px] -right-[20%] w-[80%] h-[800px] bg-red-900/20 blur-[180px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[600px] bg-red-900/30 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-lfc-radial pointer-events-none" />

            {/* Article Header Image */}
            <div className="relative h-[70vh] md:h-[85vh] w-full">
                <Image
                    src={article.image.startsWith("http") ? article.image : article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 relative z-10">
                    <div className="max-w-6xl mx-auto space-y-6 md:space-y-10">
                        <Link href="/" className="inline-flex items-center gap-3 text-zinc-300 hover:text-white transition-all text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-2 group bg-black/60 backdrop-blur-xl px-4 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-2 transition-transform text-[#c8102e]" /> Back
                        </Link>
                        <div className="flex flex-wrap gap-3 md:gap-6 items-center">
                            <div className="px-4 py-2 md:px-6 md:py-3 bg-[#c8102e] text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] rounded-lg md:rounded-xl shadow-[0_15px_40px_rgba(200,16,46,0.6)] border border-white/20">
                                {article.category}
                            </div>
                            <span className="flex items-center gap-2 md:gap-3 text-white font-black text-[9px] md:text-xs uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl border border-white/10">
                                <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#f6eb61]" /> {article.readTime}
                            </span>
                            <span className="hidden sm:flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.3em] bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                                <Calendar className="w-5 h-5 text-[#f6eb61]" /> {article.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-9xl font-black leading-[0.85] md:leading-[0.75] tracking-tighter text-white uppercase italic drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-6 md:gap-10 pt-8 md:pt-12 border-t border-white/10 w-full max-w-2xl">
                            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-[#c8102e] to-[#800a0a] p-[2px] md:p-[3px] shadow-[0_20px_40px_rgba(200,16,46,0.4)]">
                                <div className="w-full h-full bg-black rounded-[14px] md:rounded-[28px] flex items-center justify-center font-black text-xl md:text-3xl text-white italic">MA</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter italic leading-none">{article.author}</div>
                                <div className="text-[10px] md:text-[12px] text-[#c8102e] font-black uppercase tracking-[0.5em] mt-2 md:mt-3 bg-[#c8102e]/10 px-3 md:px-4 py-1 rounded-full border border-[#c8102e]/20 w-fit">Editor-at-Large</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-12 py-16 md:py-32 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_120px] gap-12 md:gap-24">

                    {/* Main Content */}
                    <article className="max-w-none">
                        <div className="mb-12 md:mb-20 p-8 md:p-20 bg-gradient-to-br from-[#1a0505] to-[#050505] border border-[#c8102e]/30 rounded-[2.5rem] md:rounded-[5rem] relative overflow-hidden group shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                            <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MessageSquare className="w-32 h-32 md:w-48 md:h-48 text-[#c8102e]" />
                            </div>
                            <p className="relative z-10 text-xl md:text-5xl font-black text-white leading-[1.2] md:leading-[1.1] italic tracking-tighter uppercase drop-shadow-lg">
                                "{article.excerpt}"
                            </p>
                        </div>

                        <div className="space-y-6 selection:bg-[#c8102e]/50">
                            {rivalryContent ? renderContent(rivalryContent.content) : (
                                <div className="space-y-6 md:space-y-10 text-zinc-300 leading-relaxed font-serif text-lg md:text-2xl">
                                    <p>
                                        Anfield witnessed another European night for the history books. From the first whistle, the intensity was palpable. The Kop was in full voice, creating that famous wall of sound that has paralyzed so many opponents before.
                                    </p>
                                    <h3 className="text-2xl md:text-5xl font-black text-white font-sans mt-12 md:mt-20 mb-6 md:mb-10 uppercase tracking-tighter italic border-l-[8px] md:border-l-[12px] border-[#c8102e] pl-6 md:pl-10 drop-shadow-xl">Tactical Breakdown</h3>
                                    <p>
                                        Slot's men pressed high, suffocating the midfield and forcing turnover after turnover. It wasn't just about energy; it was about organized chaos. The data shows Liverpool recovered the ball in the final third 14 times in the first half alone—a season record.
                                    </p>
                                    <div className="my-16 md:my-24 p-8 md:p-16 bg-gradient-to-br from-[#2a0505] to-black border border-[#c8102e]/40 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_rgba(200,16,46,0.2)] relative">
                                        <div className="absolute top-8 md:top-10 left-8 md:left-10 w-1.5 md:w-2 h-16 md:h-24 bg-[#c8102e] rounded-full shadow-[0_0_20px_#c8102e]" />
                                        <p className="pl-6 md:pl-10 text-xl md:text-6xl font-black text-white italic leading-[1.2] md:leading-[1] uppercase tracking-tighter drop-shadow-2xl">
                                            "This is exactly what we train for. The boys were magnificent tonight. Every duel, every second ball—it was ours."
                                        </p>
                                        <div className="mt-8 md:mt-12 pl-6 md:pl-10 flex items-center gap-4 md:gap-6">
                                            <div className="w-12 md:w-16 h-[2px] md:h-[3px] bg-[#c8102e]" />
                                            <p className="text-[#f6eb61] font-black uppercase tracking-[0.4em] text-[10px] md:text-sm italic">THE MANAGER — POST MATCH REVOLUTION</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Sidebar Actions */}
                    <div className="hidden lg:flex flex-col gap-10 sticky top-40 h-fit items-center">
                        <div className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-700 mb-6 vertical-text rotate-180">RED REVOLUTION</div>
                        <button title="Share" className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c8102e] text-zinc-500 hover:text-white transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-110 active:scale-95">
                            <Share2 className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                        </button>
                        <button title="Comment" className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#c8102e] text-zinc-500 hover:text-white transition-all group shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-110 active:scale-95">
                            <MessageSquare className="w-10 h-10 group-hover:-rotate-12 transition-transform" />
                        </button>
                        <div className="w-px h-32 bg-gradient-to-b from-[#c8102e] to-transparent" />
                    </div>
                </div>
            </div>
        </div>
    );
}
