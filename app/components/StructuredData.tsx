import Script from 'next/script';

export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Mr. Anfield Football",
        "description": "Premium Liverpool FC news, tactical analysis, transfer updates, and fan culture destination.",
        "url": "https://mr-anfield.vercel.app",
        "logo": "https://mr-anfield.vercel.app/logo.png",
        "sameAs": [
            "https://x.com/AyushKrishnaa",
            "https://www.instagram.com/mr.anfieldfootball",
            "https://www.instagram.com/mr.anfieldfootballreborn",
            "https://www.youtube.com/@mr.anfieldfootball",
            "https://in.pinterest.com/anfieldtimes/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "ayush@brandverse.tech"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Mr. Anfield Football",
        "url": "https://mr-anfield.vercel.app",
        "description": "The premium destination for Liverpool FC tactical analysis, transfer news, and fan culture.",
        "publisher": {
            "@type": "Organization",
            "name": "Mr. Anfield Football"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://mr-anfield.vercel.app/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const sportsOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "SportsOrganization",
        "name": "Liverpool FC Coverage by Mr. Anfield Football",
        "sport": "Football/Soccer",
        "description": "Comprehensive Liverpool FC news coverage including match analysis, transfers, and team updates."
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([organizationSchema, websiteSchema, sportsOrganizationSchema])
            }}
        />
    );
}
