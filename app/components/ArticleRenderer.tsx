'use client';

import React from 'react';

interface ArticleRendererProps {
    content: string;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
    if (!content) return null;

    // Advanced Markdown-ish renderer (matches [id]/page.tsx)
    const renderContent = (text: string) => {
        if (!text) return null;

        // Split by double newlines for physical blocks
        const blocks = text.split(/\n\s*\n/);

        return blocks.map((block, i) => {
            const trimmedBlock = block.trim();
            if (!trimmedBlock) return null;

            // Images
            if (trimmedBlock.startsWith('{{IMAGE:') && trimmedBlock.endsWith('}}')) {
                const imageName = trimmedBlock.replace('{{IMAGE:', '').replace('}}', '');
                return (
                    <div key={i} className="my-16 md:my-24 relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img
                            src={imageName.startsWith('/') ? imageName : `/${imageName}`}
                            alt="Article Visual"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                );
            }

            // Header 3
            if (trimmedBlock.startsWith('### ')) {
                return (
                    <h3 key={i} className="text-2xl md:text-3xl font-black text-white font-sans mt-16 mb-8 border-l-[6px] border-[#c8102e] pl-8 italic uppercase tracking-tighter">
                        {trimmedBlock.replace('### ', '')}
                    </h3>
                );
            }

            // Header 2
            if (trimmedBlock.startsWith('## ')) {
                return (
                    <h2 key={i} className="text-3xl md:text-5xl font-black text-white font-sans mt-20 mb-10 uppercase tracking-tighter italic leading-none">
                        {trimmedBlock.replace('## ', '')}
                    </h2>
                );
            }

            // List Items
            if (trimmedBlock.startsWith('- ') || trimmedBlock.startsWith('* ')) {
                const items = trimmedBlock.split('\n');
                return (
                    <ul key={i} className="space-y-6 my-10 bg-white/5 p-10 rounded-[2rem] border border-white/5">
                        {items.map((li, j) => (
                            <li key={j} className="flex gap-4 text-zinc-300 text-lg md:text-xl font-medium">
                                <span className="text-[#c8102e] font-black shrink-0 mt-1">/</span>
                                {renderText(li.replace(/^[-*]\s+/, ''))}
                            </li>
                        ))}
                    </ul>
                );
            }

            // Quotes/Manager Notes
            if (trimmedBlock.startsWith('> ') || trimmedBlock.includes("Manager's Notes") || trimmedBlock.includes("Manager's Tactical Notes")) {
                return (
                    <div key={i} className="my-16 md:my-24 p-10 md:p-16 bg-gradient-to-br from-[#2a0505] to-black border border-[#c8102e]/40 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_rgba(200,16,46,0.2)] relative">
                        <div className="absolute top-10 left-10 w-2 h-24 bg-[#c8102e] rounded-full shadow-[0_0_20px_rgba(200,16,46,0.4)]" />
                        <p className="pl-10 text-xl md:text-4xl font-black text-white italic leading-tight uppercase tracking-tighter">
                            {renderText(trimmedBlock.replace('> ', ''))}
                        </p>
                    </div>
                );
            }

            // Default Paragraph
            return (
                <p key={i} className="mb-8 text-zinc-300 leading-relaxed font-[family-name:var(--font-inter)] text-xl md:text-2xl first-letter:text-5xl first-letter:font-black first-letter:text-[#c8102e] first-letter:mr-3 first-letter:float-left">
                    {renderText(trimmedBlock)}
                </p>
            );
        });
    };

    // Helper for inline bold/italics
    const renderText = (text: string) => {
        // Handle bold **text**
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="text-white font-black">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="space-y-6 selection:bg-[#c8102e]/50">
            {renderContent(content)}
        </div>
    );
}
