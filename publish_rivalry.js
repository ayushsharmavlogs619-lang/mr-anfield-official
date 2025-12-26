
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc } = require("firebase/firestore");

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
        title: "The Tactical Masterminds: How Pep and Klopp Redefined the Premier League",
        category: "Tactics",
        author: "Mr. Anfield Editorial",
        type: "Exclusive",
        id: "pep-klopp-tactical-masterclass",
        excerpt: "A deep-dive into the stylistic clash that dominated a decade of English football."
    },
    {
        title: "Six Years of Perfection: The Iconic Matches That Defined an Era",
        category: "Match Analysis",
        author: "Mr. Anfield Editorial",
        type: "Premium",
        id: "city-lfc-iconic-matches",
        excerpt: "Remembering the nights when the world stopped to watch Liverpool and City battle."
    },
    {
        title: "Beyond the Pitch: The Cultural Legacy and the Future of Elite Rivalries",
        category: "Culture",
        author: "Mr. Anfield Editorial",
        type: "In-Depth",
        id: "lfc-city-legacy-future",
        excerpt: "How the Pep vs Klopp era changed the way we talk about football."
    }
];

async function publish() {
    console.log("🏟️ Publishing Rivalry Specials to Firebase...");
    for (const a of articles) {
        try {
            // Check if already exists to avoid duplicates
            const q = query(collection(db, "news"), where("id", "==", a.id));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                console.log(`⚠️ ALREADY EXISTS: ${a.title}. Updating...`);
                // For this script, we'll just skip or delete/re-add. Let's skip.
                continue;
            }

            await addDoc(collection(db, "news"), {
                ...a,
                timestamp: new Date(),
                slug: a.id
            });
            console.log(`✅ LIVE ON FIREBASE: ${a.title}`);
        } catch (e) {
            console.log(`❌ FAILED: ${a.title}`, e);
        }
    }
    console.log("🏁 All articles processed.");
    process.exit(0);
}

publish();
