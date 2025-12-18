export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 py-20 px-6 font-sans">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 bg-[#c8102e] inline-block px-4 py-2">Terms & Conditions</h1>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                    <p>Welcome to Mr. Anfield. By using our website, you agree to comply with and be bound by the following terms of use.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">2. Content Usage</h2>
                    <p>All content provided on this site is for informational purposes only. The views expressed in articles and comments are those of the authors and do not necessarily reflect the official views of the club.</p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-white">3. User Conduct</h2>
                    <p>You agree not to post abusive, defamatory, or hate speech in our comments sections. We reserve the right to ban users who violate these guidelines.</p>
                </section>
            </div>
        </div>
    );
}
