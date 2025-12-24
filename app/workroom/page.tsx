'use client'

import { useState, useRef, useEffect } from 'react';
import { chatAction } from './actions';
import { Send, ArrowLeft, User, Bot, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WorkroomPage() {
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
        { role: 'ai', content: "Welcome to the Anfield Tactical Room, Boss. I'm Mr. Anfield, your chief scout. Which LFC intel are we diving into today?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [modelType, setModelType] = useState<'pro' | 'flash' | 'cerebras'>('flash');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || loading) return;

        const userMsg = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        const formData = new FormData();
        formData.append('message', userMsg);
        formData.append('modelType', modelType);

        try {
            const result = await chatAction(formData);
            if (result.response) {
                setMessages(prev => [...prev, { role: 'ai', content: result.response }]);
            } else {
                setMessages(prev => [...prev, { role: 'ai', content: "Tactical breakdown failed. The pitch is flooded!" }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Communication blackout. Try again." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-[#c8102e]/30 font-sans">
            <div className="max-w-4xl mx-auto h-screen flex flex-col p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 hover:bg-white/5 rounded-xl transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-black uppercase tracking-tighter italic">Tactical Room</h1>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Live Analysis
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 bg-zinc-900/50 p-1.5 rounded-2xl border border-white/5">
                        <button
                            title="Select Junior Model"
                            onClick={() => setModelType('flash')}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${modelType === 'flash' ? 'bg-[#c8102e] text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Junior
                        </button>
                        <button
                            title="Select Senior Model"
                            onClick={() => setModelType('pro')}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${modelType === 'pro' ? 'bg-[#c8102e] text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Senior
                        </button>
                        <button
                            title="Select Elite Model"
                            onClick={() => setModelType('cerebras')}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${modelType === 'cerebras' ? 'bg-rev-gradient text-black shadow-lg shadow-[#f6eb61]/10' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Elite
                        </button>
                    </div>
                </div>

                {/* Chat Area */}
                <div
                    ref={scrollRef}
                    className="flex-1 overflow-y-auto space-y-6 mb-8 scrollbar-hide pr-2"
                >
                    {messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-gradient-to-br from-[#c8102e] to-[#800a1d]'
                                }`}>
                                {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-400" /> : <Bot className="w-5 h-5 text-white" />}
                            </div>
                            <div className={`max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed font-bold shadow-xl ${msg.role === 'user'
                                ? 'bg-zinc-900 border border-white/5 text-zinc-200 rounded-tr-none'
                                : 'bg-white/5 border border-white/10 text-white rounded-tl-none'
                                }`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="flex gap-4 animate-pulse">
                            <div className="w-10 h-10 rounded-2xl bg-zinc-900 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-zinc-700" />
                            </div>
                            <div className="bg-white/5 border border-white/5 p-5 rounded-3xl rounded-tl-none flex gap-1 items-center">
                                <div className="w-1.5 h-1.5 bg-[#c8102e] rounded-full animate-bounce" />
                                <div className="w-1.5 h-1.5 bg-[#c8102e] rounded-full animate-bounce [animation-delay:0.2s]" />
                                <div className="w-1.5 h-1.5 bg-[#c8102e] rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Input area */}
                <form onSubmit={handleSubmit} className="relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask for intel..."
                        className="w-full bg-zinc-900/80 border-2 border-white/5 rounded-[2rem] px-8 py-5 text-white outline-none focus:border-[#c8102e]/30 focus:bg-zinc-900 transition-all font-bold placeholder:text-zinc-600"
                    />
                    <button
                        type="submit"
                        title="Send Message"
                        disabled={loading || !input.trim()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gradient-to-br from-[#c8102e] to-[#800a1d] text-white rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-700">
                        Elite Intelligence powered by Cerebras & Llama 3.3
                    </p>
                </div>
            </div>
        </div>
    );
}
