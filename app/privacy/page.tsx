export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter bg-[#c8102e] inline-block px-6 py-3">Privacy Policy</h1>
                    <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Last updated: December 23, 2025</p>
                </div>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">1. Commitment to Privacy</h2>
                    <p>Mr. Anfield is dedicated to protecting the privacy of the Liverpool FC fan community. This policy outlines how we handle data collected through our news platform, newsletter, and tactical analysis features.</p>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">2. Data We Collect</h2>
                    <div className="space-y-4 text-zinc-400">
                        <p>To provide a premium experience, we collect:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-zinc-200">Personal Info:</strong> Email addresses for newsletter subscriptions.</li>
                            <li><strong className="text-zinc-200">Engagement Data:</strong> User comments and community interaction data.</li>
                            <li><strong className="text-zinc-200">Analytics:</strong> IP addresses and browser fingerprints for traffic analysis and site optimization.</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight border-l-4 border-[#c8102e] pl-4">3. Cookies and Tracking</h2>
                    <p>We use essential and analytical cookies to personalize your viewing experience. By using the site, you consent to our use of these tracking technologies to improve our content delivery.</p>
                </section>

                <section className="space-y-6 text-zinc-500 text-sm border-t border-white/5 pt-12">
                    <p>Mr. Anfield is a fan-run publication. We do not sell your personal information to third-party marketing agencies. If you have questions about your privacy on the Kop, reach out at <span className="text-[#c8102e]">ayush@brandverse.tech</span>.</p>
                </section>
            </div>
        </div>
    );
}
