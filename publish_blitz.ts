
import { db } from './lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const articles = [
    {
        title: "Slot’s Fury: Why the Set-Piece Struggle is a Crisis in the Making",
        content: `## The Manager’s Notes: Defensive Accountability
Arne Slot didn't hold back after the recent run of play. While the results have mostly stayed red, the 'soft' nature of our set-piece defending is starting to show cracks in the armor. 

### Tactical Breakdown
Under Klopp, it was chaos with a safety net. Under Slot, we expect control. However, the recent metrics show a 15% increase in high-danger chances conceded from corners. Slot’s annoyance isn't just for the cameras; it’s a demand for clerical precision on the pitch.

### The Verdict
If Liverpool are to maintain a title charge through the winter, the set-piece 'leak' must be plugged before the Wolves game. Expect Konate and Van Dijk to be under the microscope this weekend.`,
        category: "Tactical Deep Dive",
        author: "Mr. Anfield Ghostwriter",
        type: "Exclusive"
    },
    {
        title: "Match Intelligence: Wolves vs Liverpool - Seeking Dominance at Molineux",
        content: `## Battle Preparation
Liverpool head to Molineux with one goal: pure dominance. While ESPN reports on kickoff times, we look at the tactical mismatch.

### Key Matchup
**Salah vs. Ait-Nouri**: Mo is in world-class form, and Wolves' high-line approach during transitions is a recipe for disaster against our Egyptian King.

### Why We Win
Wolves struggle against quick central transitions. If Gravenberch continues his 'engine room' dominance, the supply line to Diaz and Jota will be too much for O'Neil's side to handle.

**Prediction**: 3-1 to the Reds.`,
        category: "Match Preview",
        author: "Mr. Anfield Ghostwriter",
        type: "Match Center"
    },
    {
        title: "The King’s Global Statement: Salah’s Form Demands Action",
        content: `## Editorial: Pay the Man
While the world watched Mo Salah lead Egypt to another crucial AFCON victory, Anfield held its breath. His performance wasn't just about the goals; it was about the sheer, gravitational pull he has on the game.

### The Contract Situation
Every goal he scores abroad is a reminder to the LFC board: He is irreplaceable. At 32, his physical metrics are still top 1% in the Premier League. 

### Final Word
Mr. Anfield stance is clear: Mo Salah is not just a player; he is the heartbeat of the modern era. Sign the extension, keep the King home.`,
        category: "Editor's Choice",
        author: "Ayush (Editor-in-Chief)",
        type: "Trending"
    }
];

async function publishArticles() {
    console.log("🚀 Initiating Stadium Blitz...");
    for (const article of articles) {
        try {
            await addDoc(collection(db, 'news'), {
                ...article,
                timestamp: new Date()
            });
            console.log(`✅ Published: ${article.title}`);
        } catch (e) {
            console.error(`❌ Failed to publish ${article.title}:`, e);
        }
    }
    console.log("🏆 All pieces are live in the Stadium.");
}

publishArticles();
