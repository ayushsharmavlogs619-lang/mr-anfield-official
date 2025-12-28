
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc, addDoc, Timestamp } = require("firebase/firestore");
const fs = require('fs');
const path = require('path');

const firebaseConfig = {
    apiKey: "AIzaSyDn1-xggEGeRDgYQqjf2hXLpDfSIy8KyK8",
    authDomain: "mr-anfield.firebaseapp.com",
    projectId: "mr-anfield",
    storageBucket: "mr-anfield.firebasestorage.app",
    messagingSenderId: "741789597634",
    appId: "1:741789597634:web:908dccce74f77be50be05b",
    measurementId: "G-RT3Z2F95C3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data structure based on Battle Plan
const NEWS_ARTICLES = [
    {
        id: 'liverpool-kit-buying-guide-2024-25',
        type: 'Hero',
        category: 'Merchandise',
        title: 'Best Liverpool Kits 2024/25: Official vs Replica - Where to Buy & Save $40',
        excerpt: 'Should you buy the official Nike kit or a replica? We compare quality, fit, and pricing to help you save $40 on your next LFC jersey.',
        content: fs.readFileSync(path.join(__dirname, '../ARTICLE_1_KIT_BUYING_GUIDE.md'), 'utf-8'),
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'best-liverpool-kits-2024-25-buying-guide',
        readTime: '8 min read',
        timestamp: new Date(),
        published: true,
        featured: true
    }
];

const MATCHES = [
    {
        id: 'lfc-vs-manu-2025-12-28',
        competition: 'Premier League',
        season: '2025-26',
        matchday: 19,
        homeTeam: 'Liverpool',
        awayTeam: 'Manchester United',
        homeScore: null,
        awayScore: null,
        status: 'Upcoming',
        date: '2025-12-28T15:00:00Z',
        venue: 'Anfield',
        referee: 'Michael Oliver'
    },
    {
        id: 'lfc-vs-lei-2025-12-24',
        competition: 'Premier League',
        season: '2025-26',
        matchday: 18,
        homeTeam: 'Liverpool',
        awayTeam: 'Leicester City',
        homeScore: 3,
        awayScore: 1,
        status: 'Finished',
        date: '2025-12-24T20:00:00Z',
        venue: 'Anfield',
        referee: 'Anthony Taylor',
        scorers: ['Salah 23\'', 'Gakpo 45+2\'', 'Salah 67\'']
    }
];

const LEAGUE_TABLE = [
    { position: 1, team: 'Liverpool', p: 18, w: 14, d: 3, l: 1, gf: 45, ga: 15, gd: 30, pts: 45 },
    { position: 2, team: 'Arsenal', p: 18, w: 12, d: 4, l: 2, gf: 38, ga: 18, gd: 20, pts: 40 },
    { position: 3, team: 'Chelsea', p: 18, w: 11, d: 5, l: 2, gf: 35, ga: 19, gd: 16, pts: 38 },
    { position: 4, team: 'Manchester City', p: 18, w: 11, d: 4, l: 3, gf: 42, ga: 22, gd: 20, pts: 37 },
    { position: 5, team: 'Nottingham Forest', p: 18, w: 10, d: 4, l: 4, gf: 28, ga: 21, gd: 7, pts: 34 }
];

async function deploy() {
    console.log("🚀 STARTING BATTLEFIELD DEPLOYMENT...");

    // 1. Seed News (Hero + Kit Guide)
    console.log("\n📰 Publishing Kit Guide (The Missile)...");
    for (const article of NEWS_ARTICLES) {
        try {
            await setDoc(doc(db, "news", article.id), {
                ...article,
                timestamp: Timestamp.fromDate(new Date())
            });
            console.log(`✅ LIVE: ${article.title}`);
        } catch (e) {
            console.error(`❌ FAILED: ${article.title}`, e);
        }
    }

    // 2. Seed Matches
    console.log("\n⚽ Seeding Match Hub...");
    for (const match of MATCHES) {
        try {
            await setDoc(doc(db, "matches", match.id), match);
            console.log(`✅ MATCH ADDED: ${match.homeTeam} vs ${match.awayTeam}`);
        } catch (e) {
            console.error(`❌ MATCH FAILED: ${match.homeTeam} vs ${match.awayTeam}`, e);
        }
    }

    // 3. Seed League Table
    console.log("\n🏆 Seeding League Table...");
    try {
        // Individual docs for league table to support the orderBy query in api.ts
        for (const team of LEAGUE_TABLE) {
            await setDoc(doc(db, "leagueTable", team.team.toLowerCase().replace(/ /g, '-')), team);
            console.log(`✅ TEAM ADDED: ${team.team}`);
        }
    } catch (e) {
        console.error("❌ LEAGUE TABLE FAILED", e);
    }

    console.log("\n🔥 BATTLEFIELD IS READY. ALL ASSETS DEPLOYED.");
    process.exit(0);
}

deploy();
