
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc, Timestamp } = require("firebase/firestore");

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

const ARTICLES = [
    {
        id: 'semenyo-city-mistake',
        type: 'Exclusive',
        category: 'Transfer Analysis',
        title: 'Semenyo’s City Mistake: Why the Bournemouth Star Chose the Etihad Bench Over Anfield’s Revolution',
        excerpt: 'Antoine Semenyo has reportedly snubbed Liverpool for Manchester City. We break down why this £65m move is a massive tactical error.',
        content: `The January window hasn’t even opened yet, and the first "snub" of the season is already making headlines. Reports are flooding in that Bournemouth’s Antoine Semenyo—a player who has terrorized Premier League defenses all season—has looked at the two greatest projects in world football and chosen the Etihad.

Common sense? No. Ambition? Hardly. It’s a tactical tragedy in the making.

### The £65m Bench-Warmer
Let’s look at the cold, hard facts. Semenyo is an explosive, high-intensity winger who thrives on space and directness. At Anfield, under Arne Slot’s evolving system, he would have been the perfect heir to the heavy-metal legacy, providing the raw power and unpredictability we need to rotate with Diaz and Salah.

At City? He’s just another piece of expensive software for Pep Guardiola to over-program. We’ve seen this movie before. **Jack Grealish** was a maverick; now he’s a safety-first pass-recycler. **Kalvin Phillips** was a midfield general; now he’s a cautionary tale. Semenyo is trading the chance to become a legend under the Kop for the "honor" of fighting Jeremy Doku for 15 minutes of League Cup action.

### Why Liverpool "Lost" (and why we actually won)
The reports say Semenyo’s camp held talks with the Reds but felt City was the "safer bet" for trophies. That tells you everything you need to know about his mentality. 

> "Mr. Anfield doesn't want players who want a **safe bet**. We want players who want to **conquer**. If you’d rather collect a medal from the sidelines than sweat for the shirt at Anfield, then you were never a Liverpool player to begin with."

### The Slot Perspective
Arne Slot isn't losing sleep over this. Our scouting department is currently looking at profiles that don’t just have pace, but have the tactical discipline to fit the new "Slot-ball" era. If Semenyo wants to spend his prime years being "managed" by Pep until he forgets how to take a man on, that’s his prerogative. 

We move on. We hunt bigger fish. And when City comes to Anfield in the spring, Semenyo can watch from the dugout while the Reds show him exactly what he missed out on.

#### The Verdict:
Semenyo chose the Money. Liverpool chose the Mission.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
        slug: 'semenyo-city-transfer-analysis',
        readTime: '6 min read',
        timestamp: new Date()
    },
    // Adding few player profiles as "Exclusive" to ensure suggestions work
    {
        id: 'salah-king-of-anfield',
        type: 'Exclusive',
        category: 'Player Profile',
        title: 'Mohamed Salah: The Egyptian King’s Record-Breaking Legacy Continues',
        excerpt: 'Breaking down why Mohamed Salah remains the single most important offensive weapon in the Premier League.',
        content: `### The Standard of Excellence
Mohamed Salah is not just a winger; he is a statistical anomaly. Season after season, critics predict his decline, and season after season, he makes them look foolish.

#### Tactical Impact
Under Arne Slot, Salah's role has slightly shifted. He's no longer just the primary finisher; he's becoming a primary creator. His ability to draw three defenders and still find the overlapping Trent is what makes this team tick.

> "To replace Salah is impossible. You don't replace legends; you evolve beyond them. But for now, the throne belongs to one man."`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=640&auto=format&fit=crop',
        slug: 'mohamed-salah-player-profile',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
    },
    {
        id: 'van-dijk-the-wall',
        type: 'Exclusive',
        category: 'Tactical Analysis',
        title: 'Virgil van Dijk: The Captain’s Authority and Defensive Dominance',
        excerpt: 'How Virgil van Dijk continues to defy age and remain the undisputed best center-back in world football.',
        content: `### The Calm in the Storm
When Virgil van Dijk is on the pitch, the entire team plays 10 yards higher. It's not just his pace or his tackle; it's his presence.

#### The Slot Transition
Many wondered if Virgil would suit the more controlled, possession-based style of Arne Slot. The answer is a resounding yes. His long-range passing accuracy remains the best of any defender in Europe.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=640&auto=format&fit=crop',
        slug: 'virgil-van-dijk-analysis',
        readTime: '5 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 120) // 2 hours ago
    }
];

async function deploy() {
    console.log("🏟️  PUBLISHING MR. ANFIELD MASTERPIECES...");
    for (const art of ARTICLES) {
        try {
            await setDoc(doc(db, "news", art.id), {
                ...art,
                timestamp: Timestamp.fromDate(art.timestamp)
            });
            console.log(`✅ LIVE: ${art.title}`);
        } catch (e) {
            console.error(`❌ FAILED: ${art.title}`, e);
        }
    }
    console.log("🔥  MISSION COMPLETE. ARTICLES DEPLOYED.");
    process.exit(0);
}

deploy();
