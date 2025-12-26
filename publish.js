
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

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

const articles = [
    {
        title: "Slot’s Fury: Why the Set-Piece Struggle is a Crisis in the Making",
        content: "Arne Slot didn't hold back after the recent run of play. While the results have mostly stayed red, the 'soft' nature of our set-piece defending is starting to show cracks in the armor.\n\n### Tactical Breakdown\nUnder Klopp, it was chaos with a safety net. Under Slot, we expect control. However, the recent metrics show a 15% increase in high-danger chances conceded from corners. Slot’s annoyance isn't just for the cameras; it’s a demand for clerical precision on the pitch.\n\n### The Verdict\nIf Liverpool are to maintain a title charge through the winter, the set-piece 'leak' must be plugged before the Wolves game. Expect Konate and Van Dijk to be under the microscope this weekend.",
        category: "Tactical Deep Dive",
        author: "Mr. Anfield Ghostwriter",
        type: "Exclusive"
    },
    {
        title: "Match Intelligence: Wolves vs Liverpool - Seeking Dominance at Molineux",
        content: "Liverpool head to Molineux with one goal: pure dominance. While ESPN reports on kickoff times, we look at the tactical mismatch.\n\n### Key Matchup\n**Salah vs. Ait-Nouri**: Mo is in world-class form, and Wolves' high-line approach during transitions is a recipe for disaster against our Egyptian King.\n\n### Why We Win\nWolves struggle against quick central transitions. If Gravenberch continues his 'engine room' dominance, the supply line to Diaz and Jota will be too much for O'Neil's side to handle.\n\n**Prediction**: 3-1 to the Reds.",
        category: "Match Preview",
        author: "Mr. Anfield Ghostwriter",
        type: "Match Center"
    },
    {
        title: "The King’s Global Statement: Salah’s Form Demands Action",
        content: "While the world watched Mo Salah lead Egypt to another crucial AFCON victory, Anfield held its breath. His performance wasn't just about the goals; it was about the sheer, gravitational pull he has on the game.\n\n### The Contract Situation\nEvery goal he scores abroad is a reminder to the LFC board: He is irreplaceable. At 32, his physical metrics are still top 1% in the Premier League.\n\n### Final Word\nMr. Anfield stance is clear: Mo Salah is not just a player; he is the heartbeat of the modern era. Sign the extension, keep the King home.",
        category: "Editor's Choice",
        author: "Ayush (Editor-in-Chief)",
        type: "Trending"
    }
];

async function publish() {
    console.log("🏟️ Entering the Stadium...");
    for (const a of articles) {
        try {
            await addDoc(collection(db, "news"), {
                ...a,
                timestamp: new Date(),
                slug: a.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            });
            console.log(`✅ LIVE: ${a.title}`);
        } catch (e) {
            console.log(`❌ FAILED: ${a.title}`, e);
        }
    }
    process.exit(0);
}

publish();
