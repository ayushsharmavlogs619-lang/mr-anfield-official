"use client";

import { useState, useEffect } from "react";
import { X, Cookie, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("mr-anfield-cookie-consent");
        if (!consent) {
            // Small delay for smooth entrance
            setTimeout(() => setIsVisible(true), 1500);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("mr-anfield-cookie-consent", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("mr-anfield-cookie-consent", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6 animate-in slide-in-from-bottom duration-700">
            <div className="max-w-4xl mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between">

                {/* Text Content */}
                <div className="flex items-start gap-4 md:gap-6">
                    <div className="p-3 bg-[#c8102e]/10 rounded-xl border border-[#c8102e]/20 hidden md:block">
                        <ShieldCheck className="w-8 h-8 text-[#c8102e]" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-black text-white uppercase italic tracking-tighter flex items-center gap-2">
                            Privacy Protocol <span className="md:hidden"><ShieldCheck className="w-5 h-5 text-[#c8102e]" /></span>
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                            We use cookies to enhance your experience at Anfield. By continuing to visit this site, you agree to our use of cookies for analytics and personalized content according to our <Link href="/privacy" className="text-white underline hover:text-[#c8102e] transition-colors">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-6 py-3 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-all font-bold text-xs uppercase tracking-widest"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-8 py-3 rounded-xl bg-[#c8102e] hover:bg-[#a60d26] text-white font-black text-xs uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(200,16,46,0.2)] transition-all hover:scale-105"
                    >
                        Accept All
                    </button>
                </div>

                {/* Close X */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors md:hidden"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
