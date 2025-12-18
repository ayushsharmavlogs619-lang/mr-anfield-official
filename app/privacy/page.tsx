export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 bg-[#c8102e] inline-block px-4 py-2">Privacy Policy</h1>
                <p>Last updated: December 19, 2025</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                    <p>Mr. Anfield (&quot;we&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy details how we handle your data on our Liverpool FC news platform.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
                    <p>We may collect email addresses for our newsletter, user comments, and analytics data to improve your reading experience.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">3. Cookies</h2>
                    <p>We use cookies to personalize content and analyze traffic. You can choose to disable cookies through your browser settings.</p>
                </section>
            </div>
        </div>
    );
}
