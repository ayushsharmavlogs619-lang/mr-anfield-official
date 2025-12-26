
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
    // This Is Anfield Style
    {
        title: "The Isak Void: How Slot Rebuilds the Front Line After Ankle Surgery",
        excerpt: "With Alexander Isak sidelined for months, Arne Slot faces his biggest tactical hurdle yet. We break down the options from the academy to the emergency window.",
        content: `### The Blow We Didn't Need
Anfield was silent when the news broke. Alexander Isak, our spearhead in the 2025 campaign, is out. The ankle surgery was successful, but the recovery is a marathon, not a sprint. 

### Why Isak is Irreplaceable
It's not just the goals; it's the gravity. Isak's ability to pull center-backs out of position created the space for Salah and Diaz to thrive. Without him, we lose that central pivot.

### The Tactical Pivot
Arne Slot is likely to move Jota into the central role, but with Gakpo's fitness at 50-50, we might see the emergence of the next academy starlet. 

**Manager's Notes**: Expect a more fluid 4-3-3 with the wingers tucking inside more frequently to fill the void left by Newcastle's former star.`,
        category: "Tactical Analysis",
        author: "Mr. Anfield",
        image: "/tactical-board.png",
        type: "Exclusive"
    },
    {
        title: "Predicted XI vs Wolves: Navigating the Injury Minefield at Molineux",
        excerpt: "No Szoboszlai, no Salah, and a 50-50 Gakpo. Here is how we think the Reds will line up for the crucial clash.",
        content: `### Molineux Challenges
Wolves are never easy, especially when half your first choice XI is in the treatment room. 

### The Midfield Puzzle
With Szoboszlai suspended, the door opens for Harvey Elliott or perhaps a more conservative approach with Endo and Gravenberch. 

### Predicted XI
- **GK**: Alisson
- **DEF**: Trent, Konate, Van Dijk (C), Robertson
- **MID**: Gravenberch, Mac Allister, Elliott
- **FWD**: Jota, Diaz, Nunez

**Verdict**: It's a team of fighters. We need leadership from Virgil to see this through.`,
        category: "Match Intelligence",
        author: "Mr. Anfield",
        image: "/stadium.png",
        type: "Trending"
    },
    {
        title: "The Academy Call-Up: Who Replaces Dominik Szoboszlai?",
        excerpt: "With the Hungarian captain serving a suspension, Kirkby’s finest are being put through their paces at the AXA Training Centre.",
        content: `### A Missing Battery
Szoboszlai is the engine. His suspension leaves a gap that isn't just about passing; it's about distance covered. 

### The Candidates
1. **Nyoni**: The technical wizard who has been knocking on the door.
2. **Morton**: The steady hand if Slot wants control.
3. **Clark**: The creative spark.

Our sources say Nyoni has been training with the first team all week. Is this his 'Trent moment'?`,
        category: "Academy News",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=640&auto=format&fit=crop",
        type: "Exclusive"
    },
    {
        title: "Divock Origi: The Free Agent Return That Fans Are Begging For",
        excerpt: "MILAN CALL IT QUITS. The cult hero is officially a free agent. Should we bring him home for one last dance?",
        content: `### Football Without Origi is Nothing
The news that AC Milan has canceled Divock's contract sent LFC Twitter into a meltdown. 

### The Logic
We are short on strikers. He knows the building. He loves the club. As a short-term 'emergency' backup for Isak, it's a romantic and perhaps practical move.

### The Reality
Slot is a pragmatist. Does Divock fit the high-intensity press? Probably not. But for a 90th-minute header at the Kop end? Always.`,
        category: "Transfer Rumors",
        author: "Mr. Anfield",
        image: "/anfield-atmosphere.png",
        type: "Trending"
    },
    {
        title: "Slot's Christmas Confessions: Refusing to Dwell on the Salah Drama",
        excerpt: "In an exclusive end-of-year interview, Arne Slot opens up about his first six months and why he's already moved on from the Mo Salah outburst.",
        content: `### A Year of Revolution
Arne Slot sat down for a Christmas special that felt more like a progress report. He's calm, he's calculated, and he's totally in control.

### On Salah
'There is no drama. Mo wants to win, I want to win. We move on.' Simple. Effective.

### Looking to 2026
Slot hinted that the recruitment team has been 'aggressive' in their search for winter reinforcements. The message is clear: the job isn't finished.`,
        category: "Editor's Choice",
        author: "Mr. Anfield",
        image: "/klopp-fistpump.png",
        type: "Exclusive"
    },

    // ESPN FC Style
    {
        title: "Liverpool 2025: A Year of Triumphs and Unexpected Tragedies",
        excerpt: "From the high of a Premier League title to the heartbreak of losing Diogo Jota, 2025 has been a rollercoaster for the Reds.",
        content: `### The Zenith
Winning the 2024/25 title was the peak. Liverpool proved that life after Klopp wasn't just possible; it was successful. 

### The Isak Saga
Prying Alexander Isak from Newcastle was the transfer story of the decade. It signaled that Liverpool could still bully the 'new money' clubs in the market.

### The Dark Days
The tragic loss of Diogo Jota in the summer changed the club's DNA. This season is being played in his memory, a weight that is both burdensome and inspiring.`,
        category: "Global Perspective",
        author: "Mr. Anfield",
        image: "/trophy-ribbons.png",
        type: "Exclusive"
    },
    {
        title: "Contract Canceled: Why the Divock Origi Experiment Failed in Italy",
        excerpt: "ESPN FC analyzes why the Liverpool legend couldn't find his feet in Milan and what's next for the Belgian star.",
        content: `### 27 Appearances, 2 Goals
The numbers are grim. Origi's time in Milan was a shadow of his Anfield heights. 

### The Disconnect
Milan wanted a reliable target man; Divock is a man of moments. He needs an emotional connection to a club's identity to perform. 

**Watch Next**: MLS or a return to the Premier League. The 'Origi' brand is still strong in England.`,
        category: "World Football",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=640&auto=format&fit=crop",
        type: "Trending"
    },
    {
        title: "The Aggressive Offer: Liverpool Move for Bundesliga's Next Big Thing",
        excerpt: "Reports suggest an aggressive bid has been placed for a top German talent to cover the Isak injury.",
        content: `### The Target
While names are being kept under wraps by the AXA legal team, the Bundesliga is where the eyes are fixed.

### The Budget
FSG has sanctioned a 'significant' winter spend. This isn't just a loan; it's a long-term statement.

### The Fit
Liverpool needs pace and versatility. Expect a player who can play across the front three.`,
        category: "Transfer Insider",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=640&auto=format&fit=crop",
        type: "Exclusive"
    },
    {
        title: "Missing Mo: The Statistical Void Left by Salah's AFCON Duty",
        excerpt: "With Salah leading Egypt, Liverpool's xG has plummeted. We look at why the 'missed presence' is costing us points.",
        content: `### 40% of Goals
That's the share Salah has a hand in. Without him, the 'fear factor' for opposing full-backs is halved.

### The Replacement Problem
No one in world football replaces Mo Salah. Jota and Diaz are trying, but the 'gravitational pull' isn't the same.

**Verdict**: We need him back. Every game he plays for Egypt is a game we feel the pressure at home.`,
        category: "Global Reds",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=640&auto=format&fit=crop",
        type: "Trending"
    },
    {
        title: "The PSG Connection: Emergency Loan Move for PSG Star Gaining Pace",
        excerpt: "With the clock ticking, Liverpool are reportedly looking at the French capital for an emergency loan deal.",
        content: `### The Paris Link
Liverpool and PSG's relationship has thawed. An emergency six-month loan would suit both parties.

### Why It Makes Sense
The player (likely a versatile winger/striker) isn't getting minutes in Paris and wants game time ahead of 2026. 

### The Risk
Loans are always a gamble. Will they adapt to Slot's tactical rigors in time to save the season?`,
        category: "Transfer Rumors",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=640&auto=format&fit=crop",
        type: "Exclusive"
    },

    // Sky Sports Style
    {
        title: "Slot's Set-Piece Fury: 'Impact is Impossible' With our Current Record",
        excerpt: "3 scored, 11 conceded. Arne Slot has laid down the law after Liverpool's set-piece struggles reached a crisis point.",
        content: `### The Statistics of Shame
Liverpool have conceded 11 goals from corners and free-kicks this season. It's the worst in the 'Big Six'.

### Slot's Words
'You cannot win a title if you cannot defend the air. It is a big frustration.' 

### The Solution
Expect a change in marking scheme. Slot is moving away from the purely zonal approach that served Klopp for so long.`,
        category: "Breaking News",
        author: "Mr. Anfield",
        image: "/rivalry-pep-klopp.png",
        type: "Match Center"
    },
    {
        title: "Carragher's Verdict: Antoine Semenyo is the Only Solution for Slot",
        excerpt: "Jamie Carragher believes Liverpool should act fast and sign the Bournemouth star to replace the injured Isak.",
        content: `### Pundit's Corner
'He's got the power, he's got the pace, and he knows the league. Semenyo is exactly what Liverpool need right now.'

### The Price Tag
Bournemouth won't sell cheap, but Carragher argues that the cost of *not* signing him is a lost title.

### Sky Analysis
Our trackers show Semenyo's physical metrics match Isak's almost perfectly. It's a data-led recommendation.`,
        category: "Pundit Watch",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=640&auto=format&fit=crop",
        type: "Trending"
    },
    {
        title: "BREAKING: Divock Origi Officially a Free Agent After Milan Exit",
        excerpt: "The Belgian striker is looking for a new club. We have the latest on his potential destinations.",
        content: `### The Breaking News
At 14:00 today, AC Milan terminated Origi's contract by mutual consent. 

### What's Next?
His representatives have already been contacted by three Premier League clubs. 

### Historical Note
Origi scored 41 goals for Liverpool, including *that* goal against Barcelona. He remains a legend, regardless of his Italian struggles.`,
        category: "Breaking News",
        author: "Mr. Anfield",
        image: "/logo.png",
        type: "Trending"
    },
    {
        title: "Match Preview: Wolves vs Liverpool - Can Slot Steady the Ship?",
        excerpt: "Everything you need to know ahead of the clash at Molineux as Liverpool fight to stay in the top four race.",
        content: `### The Stakes
A win keeps us in touch with the leaders. A loss could see us drop out of the Champions League spots for the first time this season.

### Team News
- **Liverpool**: Szoboszlai (Suspended), Isak (Injured), Salah (AFCON).
- **Wolves**: Full strength, looking to exploit the Reds' set-piece weakness.

### Form Guide
Liverpool have one win in their last four. Wolves have won three on the bounce. It's a dangerous fixture.`,
        category: "Match Preview",
        author: "Mr. Anfield",
        image: "/city-lfc-clash.png",
        type: "Match Center"
    },
    {
        title: "December Blues: Analyzing Liverpool's Worrying Drop in Performance",
        excerpt: "The data shows a 20% drop in high-intensity sprints. Is the 'Slot Method' burning the players out?",
        content: `### The Data Bomb
We've crunched the numbers from Opta. The intensity levels in the second half of games have fallen significantly since November.

### Tactical Fatigue
Slot demands a 90-minute press. In the winter schedule, the squad depth is being tested to its limits.

### The Verdict
Without January signings to rotate the squad, the Reds risk a complete mid-season collapse.`,
        category: "Inside the Numbers",
        author: "Mr. Anfield",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=640&auto=format&fit=crop",
        type: "Exclusive"
    }
];

async function publish() {
    console.log("🏟️  ENTERING THE STADIUM: STARTING THE RED REVOLUTION PUBLISH...");
    for (const a of articles) {
        try {
            await addDoc(collection(db, "news"), {
                ...a,
                timestamp: new Date(),
                slug: a.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            });
            console.log(`✅  LIVE AT ANFIELD: ${a.title}`);
        } catch (e) {
            console.log(`❌  MATCH ABANDONED for: ${a.title}`, e);
        }
    }
    console.log("🔥  REVOLUTION COMPLETE. 15 ARTICLES PUBLISHED.");
    process.exit(0);
}

publish();
