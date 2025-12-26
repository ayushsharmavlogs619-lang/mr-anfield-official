
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
        title: "The Konate Mystery: Slot’s Defensive Depth Faces Final Test before Wolves",
        content: "Reports from the AXA Training Centre suggest Ibrahima Konate was surprisingly absent from today's session. For Arne Slot, this isn't just an injury concern—it's a tactical crisis for the Wolves clash.\n\n### The Quansah Opportunity?\nWith Konate potentially sidelined, all eyes turn to Jarell Quansah. Is the youngster ready to step back into the heat of a Premier League title charge? Slot has praised his maturity, but Molineux is a different beast.\n\n### Tactical Shift\nWithout Konate's recovery speed, Liverpool may have to drop the defensive line by 5 yards to avoid being caught on the break by Matheus Cunha. This is where Slot's discipline will be measured.",
        category: "Breaking News",
        author: "Mr. Anfield Ghostwriter",
        type: "Exclusive"
    },
    {
        title: "Wolves Predicted XI: Slot’s Rotation Games and the Chiesa Factor",
        content: "Predicting a Liverpool XI under Arne Slot is becoming an art form. With a congested fixture list, here is how we expect the Reds to line up at Molineux.\n\n### The Surprise Inclusion\n**Federico Chiesa** has been knocking on the door. With Diaz playing heavy minutes globally, this could be the moment the Italian maestro gets his full Premier League initiation.\n\n### The 'Engine Room'\nMac Allister and Gravenberch remain untouchable, but don't be surprised to see Curtis Jones handed a disruptive role to nullify Wolves' midfield energy.\n\n**Predicted XI**: Alisson; Trent, Quansah, Van Dijk, Robertson; Gravenberch, Mac Allister, Szoboszlai; Salah, Jota, Chiesa.",
        category: "Match Preview",
        author: "Mr. Anfield Ghostwriter",
        type: "Tactical"
    },
    {
        title: "Gerrard Speaks: The Trent Question and the Weight of the Armband",
        content: "Steven Gerrard’s recent comments on Trent Alexander-Arnold have sent shockwaves through the fan base. 'He had everything I craved,' Gerrard noted, referring to the modern setup Trent enjoys.\n\n### The Legacy Factor\nTrent isn't just a right-back; he is the heir to the local legend status. Gerrard's words carry a double meaning—a plea for Trent to recognize the unique 'Scouse' legacy he carries compared to the lure of Real Madrid.\n\n### The Mr. Anfield Take\nLoyalty in 2025 is rarely rewarded, but Trent has the chance to surpass even the greats. The weight of the armband is heavy, but the rewards at Anfield are eternal.",
        category: "Editor's Choice",
        author: "Ayush (Editor-in-Chief)",
        type: "Trending"
    }
];

async function publish() {
    console.log("🏟️ Launching Counter-Strike Blitz...");
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
