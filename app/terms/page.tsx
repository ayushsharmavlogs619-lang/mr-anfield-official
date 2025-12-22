export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter bg-[#c8102e] inline-block px-6 py-3">Terms & Conditions</h1>
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Last updated: December 23, 2025</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">1. Editorial Disclosure</h2>
                    <div className="pl-4 text-zinc-400">
                        <p>Mr. Anfield is an independent, unofficial fan publication. We are not affiliated with, endorsed by, or connected to Liverpool Football Club or the Premier League. All opinions expressed are those of the individual contributors.</p>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">2. Intellectual Property</h2>
                    <p>The text and original tactical analysis on this site are the property of Mr. Anfield. While we discuss public domain football news and statistics, unauthorized reproduction of our editorial content is strictly prohibited.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">3. User Community Standards</h2>
                    <div className="space-y-4 text-zinc-400">
                        <p>We encourage healthy debate in our community sections. However, we maintain a zero-tolerance policy for:</p>
                        <ul className="list-disc pl-6 space-y-2 font-bold text-zinc-200">
                            <li>Discrimination or hate speech.</li>
                            <li>Abuse towards other fans or players.</li>
                            <li>Spam or commercial promotion without approval.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6 text-zinc-500 text-sm border-t border-white/5 pt-12 italic">
                    <p>By using this platform, you agree to these terms. Mr. Anfield reserves the right to modify content or access at any time to preserve the community atmosphere. YNWA.</p>
                </section>
            </div>
        </div>
    );
}
