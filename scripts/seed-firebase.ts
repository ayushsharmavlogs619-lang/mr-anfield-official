/**
 * Firebase Data Seeding Script
 * 
 * This script populates Firebase Firestore with initial data for Mr. Anfield
 * 
 * Run with: npx ts-node scripts/seed-firebase.ts
 */

import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

// Initialize Firebase Admin (server-side only)
const app = !getApps().length ? initializeApp({
    projectId: 'mr-anfield',
}) : getApp();

const db = getFirestore(app);

// Sample news articles data
const NEWS_ARTICLES = [
    {
        id: 'liverpool-tactical-masterclass',
        type: 'hero',
        category: 'Tactics',
        title: 'The Slot Era: How Liverpool\'s Midfield Box is Dominating Europe',
        excerpt: 'From double pivots to inverted wing-backs, we break down the tactical evolution at Anfield that has the Reds top of the table.',
        content: `# The Slot Era: How Liverpool's Midfield Box is Dominating Europe

Arne Slot has quietly implemented one of the most sophisticated tactical systems in European football. The Dutch manager's midfield structure resembles a dynamic box that shifts between a 2-3 and a 3-2 depending on possession phase.

## The Core Principles

1. **Positional Fluidity**: Gravenberch drops between the center-backs in build-up
2. **Wing-Back Inversion**: Robertson and Alexander-Arnold tuck inside to overload central areas
3. **High Press Triggers**: Coordinated pressing from specific opposition touches

## Statistical Evidence

- 73% possession in opponent's half (League best)
- 91% pass completion in the final third
- +18 goal difference from set pieces

The evolution from Klopp's "heavy metal football" to Slot's calculated dominance represents a maturation of Liverpool's tactical identity.`,
        author: 'Mr. Anfield',
        image: '/stadium.png',
        slug: 'liverpool-tactical-masterclass',
        readTime: '8 min read',
        timestamp: Timestamp.fromDate(new Date('2025-12-25')),
        published: true,
        featured: true
    },
    {
        id: 'salah-contract-latest',
        type: 'news',
        category: 'News',
        title: 'Salah Contract: Latest Updates on Liverpool\'s Star Forward',
        excerpt: 'Breaking down the latest developments in Mohamed Salah\'s contract negotiations with Liverpool FC.',
        content: `# Mohamed Salah Contract Situation: Latest Updates

Liverpool and Mohamed Salah are in advanced negotiations over a contract extension, with sources close to the club indicating significant progress.

## Key Points:
- Current deal expires June 2026
- Player seeking 3-year extension
- Wage demands in line with top Premier League earners
- Liverpool keen to secure long-term future

Salah remains pivotal to Liverpool's attacking threat with 18 goals in 22 appearances this season.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=640&auto=format&fit=crop',
        slug: 'salah-contract-latest',
        readTime: '5 min read',
        timestamp: Timestamp.fromDate(new Date('2025-12-26')),
        published: true,
        featured: false
    },
    {
        id: 'transfer-zubimendi',
        type: 'transfer',
        category: 'Transfer',
        title: 'Reds Confident in Securing Zubimendi Deal in January Window',
        excerpt: 'Liverpool remain optimistic about landing Real Sociedad midfielder Martin Zubimendi when the transfer window reopens.',
        content: `# Liverpool Close to Zubimendi Breakthrough

Real Sociedad's Martin Zubimendi remains Liverpool's top midfield target for January, with sources suggesting a breakthrough could be imminent.

## Transfer Details:
- **Fee**: €60m release clause
- **Personal Terms**: Agreement in principle reached
- **Competition**: Manchester City also interested
- **Player Preference**: Anfield move preferred

Zubimendi would provide additional depth in the #6 position alongside Ryan Gravenberch.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=640&auto=format&fit=crop',
        slug: 'transfer-zubimendi',
        readTime: '4 min read',
        timestamp: Timestamp.fromDate(new Date('2025-12-27')),
        published: true,
        featured: false
    }
];

// Sample match data
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
        status: 'scheduled',
        kickoffTime: Timestamp.fromDate(new Date('2025-12-28T15:00:00Z')),
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
        status: 'completed',
        kickoffTime: Timestamp.fromDate(new Date('2025-12-24T20:00:00Z')),
        venue: 'Anfield',
        referee: 'Anthony Taylor',
        scorers: ['Salah 23\'', 'Gakpo 45+2\'', 'Salah 67\'']
    }
];

// Premier League table data
const LEAGUE_TABLE = [
    {
        id: 'premier-league-2025-26',
        season: '2025-26',
        competition: 'Premier League',
        lastUpdated: Timestamp.now(),
        standings: [
            { position: 1, team: 'Liverpool', played: 18, won: 14, drawn: 3, lost: 1, gf: 45, ga: 15, gd: 30, points: 45 },
            { position: 2, team: 'Arsenal', played: 18, won: 12, drawn: 4, lost: 2, gf: 38, ga: 18, gd: 20, points: 40 },
            { position: 3, team: 'Chelsea', played: 18, won: 11, drawn: 5, lost: 2, gf: 35, ga: 19, gd: 16, points: 38 },
            { position: 4, team: 'Manchester City', played: 18, won: 11, drawn: 4, lost: 3, gf: 42, ga: 22, gd: 20, points: 37 },
            { position: 5, team: 'Nottingham Forest', played: 18, won: 10, drawn: 4, lost: 4, gf: 28, ga: 21, gd: 7, points: 34 }
        ]
    }
];

async function seedFirebase() {
    console.log('🔥 Starting Firebase data seeding...\n');

    try {
        // Seed News Articles
        console.log('📰 Seeding news articles...');
        for (const article of NEWS_ARTICLES) {
            await db.collection('news').doc(article.id).set(article);
            console.log(`  ✅ Added: ${article.title}`);
        }

        // Seed Matches
        console.log('\n⚽ Seeding match data...');
        for (const match of MATCHES) {
            await db.collection('matches').doc(match.id).set(match);
            console.log(`  ✅ Added: ${match.homeTeam} vs ${match.awayTeam}`);
        }

        // Seed League Table
        console.log('\n🏆 Seeding league table...');
        for (const table of LEAGUE_TABLE) {
            await db.collection('leagueTable').doc(table.id).set(table);
            console.log(`  ✅ Added: ${table.competition} standings`);
        }

        console.log('\n✅ Firebase seeding completed successfully!\n');
        console.log('📊 Summary:');
        console.log(`  - ${NEWS_ARTICLES.length} news articles`);
        console.log(`  - ${MATCHES.length} matches`);
        console.log(`  - ${LEAGUE_TABLE.length} league table(s)`);
        console.log('\n🚀 Your Firebase database is ready!');

    } catch (error) {
        console.error('❌ Error seeding Firebase:', error);
        process.exit(1);
    }
}

// Run the seeding script
seedFirebase()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
