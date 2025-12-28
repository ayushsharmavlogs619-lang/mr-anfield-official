
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
        id: 'next-trent-conundrum',
        type: 'Exclusive',
        category: 'Academy',
        title: 'The "Next Trent" Conundrum: Is the Academy Producing Too Many Specialists?',
        excerpt: 'Trent Alexander-Arnold changed the position of Right-Back forever. But is the pursuit of a "Trent clone" hurting our defensive solidity?',
        content: `Trent Alexander-Arnold is a once-in-a-generation talent. He didn't just play right-back; he redefined it as a playmaking hub. However, a worrying trend is emerging at Kirkby. 

### The Specialization Trap
We are seeing young defenders who can cross like Beckham but struggle with the basic "bread and butter" of defending. The obsession with finding the "Next Trent" has led to a generation of full-backs who are essentially wingers wearing a defender's number.

#### Tactical Impact
At the highest level, you need balance. If both full-backs are inverted or bombing forward, the center-backs are left exposed. Arne Slot's system requires more defensive discipline than Klopp's "Heavy Metal" chaos.

> "The next great Liverpool defender won't be a Trent clone. He'll be someone who can stop a world-class winger first, and cross second."

We need to get back to basics while keeping the flair.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'next-trent-academy-analysis',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 10)
    },
    {
        id: 'slot-summer-purge-2025',
        type: 'Trending',
        category: 'Transfers',
        title: 'Arne Slot’s Summer Purge: The 3 Players Who Will Definitely Leave Anfield in 2025',
        excerpt: 'The revolution requires space. We identify the three senior stars likely to be moved on to make room for Slot’s new vision.',
        content: `Arne Slot is a ruthless tactician. While he has been respectful of the squad he inherited, the summer of 2025 will be his first real opportunity to strip the roster down to his exact specifications.

### The Departures List
1. **Wataru Endo:** Despite his heroic service, he doesn't fit the technical profile Slot wants for a deep-lying playmaker.
2. **Kostas Tsimikas:** A fan favorite, but the club needs a more robust defensive backup for Robbo or a long-term successor.
3. **Sepp van den Berg (Permanent):** The writing is on the wall for the young Dutchman who has spent more time on loan than at the AXA.

#### Why Now?
Liverpool needs to lower the average age of the squad and clear the wage bill for the "Big Three" renewals. Business is business.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
        slug: 'arne-slot-summer-transfer-purge',
        readTime: '5 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 20)
    },
    {
        id: '80m-pivot-midfield-search',
        type: 'Exclusive',
        category: 'War Room',
        title: 'The €80m Pivot: Why Liverpool Should Ignore Wirtz and Buy a Specialist #6',
        excerpt: 'The glamour signings sell shirts, but the specialist signings win titles. Here is why Florian Wirtz is a distraction.',
        content: `Every Liverpool fan wants Florian Wirtz. He's brilliant, young, and exciting. But he is a luxury we cannot afford until the foundation is fixed.

### The Midfield Hole
We are still playing without a natural, world-class defensive anchor. Gravenberch has been a revelation, but in the big Champions League nights, we need a "destroyer" who can also play.

#### The Target
Instead of €120m on Wirtz, the money should be channeled into a specialist like **Martin Zubimendi** (if he can be convinced) or a physical powerhouse like **Youssouf Fofana**.

> "Goals win games, but control wins trophies. Without a specialist pivot, we are always one counter-attack away from disaster."`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1200&auto=format&fit=crop',
        slug: 'midfield-pivot-transfer-strategy',
        readTime: '8 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
    },
    {
        id: 'gravenberch-unplugged-analysis',
        type: 'Exclusive',
        category: 'Tactical Analysis',
        title: 'Gravenberch Unplugged: How Ryan Redefined the Midfield Anchor Role',
        excerpt: 'From a Bayern bench-warmer to Anfield’s most vital cog. Breaking down the tactical rebirth of Ryan Gravenberch.',
        content: `Earlier this season, people laughed when Slot suggested Ryan Gravenberch could play as a #6. Nobody is laughing now.

### The Technical Pivot
Most #6s are either "tacklers" or "passers." Ryan is a "carrier." He uses his long strides to bypass the first line of the press, turning defense into attack in seconds.

#### Data Insights
- **Progressive Carries:** Top 1% in Europe.
- **Press Success:** 72% (Elite level).
- **Turning Radius:** Unmatched for a player of his height.

He isn't just playing the role; he's evolving it.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop',
        slug: 'ryan-gravenberch-tactical-analysis',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 40)
    },
    {
        id: 'saudi-threat-salah-virgil',
        type: 'Trending',
        category: 'Global News',
        title: 'The Saudi Threat: The Truth About the Looming Offers for Salah and Virgil',
        excerpt: 'Money talks, but does Anfield shout louder? We look at the astronomical numbers being offered to our captains.',
        content: `The Saudi Pro League isn't going away. In fact, they are preparing their biggest offensive yet for the summer of 2025.

### The Numbers
Word from the "Inner Sanctum" is that Mohamed Salah has a standing offer of **£1.5m a week**. For Virgil van Dijk, the offer is closer to **£800k**. These are life-changing sums, even for them.

#### The LFC Stance
FSG are notoriously tight-lipped, but the priority is clearly a short-term renewal to protect the transfer value. If they won't sign, they must be sold. We cannot lose both for free.

> "Loyalty is a two-way street, but it doesn't pay for a new stadium expansion. Expect the most stressful summer in living memory."`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1518091043644-c1d445eb9519?q=80&w=1200&auto=format&fit=crop',
        slug: 'saudi-transfer-threat-salah-vvd',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 50)
    },
    {
        id: 'lfc-vs-pgmol-data-analysis',
        type: 'Exclusive',
        category: 'The Rivalry',
        title: 'LFC vs. The PGMOL: A Data-Driven Look at the Season’s Most Controversial Calls',
        excerpt: 'Is there a bias, or just incompetence? We analyze the 12 key VAR decisions that have gone against Liverpool this season.',
        content: `We don't like to complain at Anfield, but sometimes the numbers are too loud to ignore. 

### The VAR Deficit
Liverpool currently sits at the bottom of the "VAR Net Points" table. From the disallowed goal against Spurs (still hurts) to the ghost-penalties against us at the Emirates.

#### Patterns of Incompetence
The issue isn't a conspiracy; it's a lack of consistency. We've compiled a video-tactical dossier showing that high-intensity teams like Liverpool are punished more for "subjective" fouls because they appear more violent at speed.

It's time for the Premier League to fix their technology or stop using it.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-pgmol-var-controversy',
        readTime: '10 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 60)
    },
    {
        id: 'anfield-atmosphere-audit-2025',
        type: 'Trending',
        category: 'Culture',
        title: 'The Atmosphere Audit: Has the Anfield Road Expansion Diluted the Famous Noise?',
        excerpt: 'More seats, but less soul? Fans are divided on the impact of the new 61,000 capacity.',
        content: `Walking up the steps of the Main Stand, you can feel the history. But lately, even the most hardcore season-ticket holders are noticing a change.

### The Tourist Problem
With the expansion comes more international fans. This is great for the global brand, but bad for the 90-minute roar. The "Anfield Road" end used to be a cauldron; now it's often a sea of smartphones.

#### A Call to Action
We need to reclaim our identity. The club needs to prioritize the "Young Reds" sections to ensure the next generation of Scousers can afford to lead the chants.

> "A stadium is just bricks and mortar. The soul comes from the voices."`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'anfield-stadium-atmosphere-debate',
        readTime: '5 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 70)
    },
    {
        id: 'klopps-ghost-post-heavy-metal',
        type: 'Exclusive',
        category: 'Tactical Analysis',
        title: 'Klopp’s Ghost: How Slot Managed to Kill the "Heavy-Metal" Hangover in 100 Days',
        excerpt: 'Moving on from a legend is supposed to be impossible. Here is how Arne Slot did it without losing the dressing room.',
        content: `When Jurgen Klopp left, we all expected a transitional Season of Pain. We were wrong. 

### The Tactical Pivot
Klopp was about emotion and transition. Slot is about control and position. The "Heavy Metal" has been replaced by a "Symphony."

#### The Key Change
The biggest change is the **Rest Defense**. Under Klopp, we accepted we would be countered but trusted our intensity to win the ball back. Under Slot, we ensure the counter-attack never happens in the first place.

The king is gone. Long live the machine.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c65b5ec5?q=80&w=1200&auto=format&fit=crop',
        slug: 'arne-slot-vs-jurgen-klopp-tactics',
        readTime: '9 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 80)
    },
    {
        id: 'darwin-nunez-paradox-analysis',
        type: 'Trending',
        category: 'Player Profile',
        title: 'The Darwin Paradox: Why xG Fails to Explain the Chaos of Nunez',
        excerpt: 'He misses the sitters and scores the screamers. We dive deep into the mind of Anfield’s most divisive striker.',
        content: `Darwin Nunez is a cult hero. He is also a tactical nightmare for opposing defenders (and sometimes his own fans).

### The Chaos Theory
Darwin is the only player in the league who can have 12 shots, 0 goals, and still be the Man of the Match. His physical presence creates space for everyone else.

#### The Numbers vs. The Reality
His Expected Goals (xG) is consistently higher than his actual output. Why? Because he attempts things nobody else would. In the "Red Revolution," he is the wild card that makes us unpredictable.

> "You don't manage Darwin Nunez. You unleash him."`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
        slug: 'darwin-nunez-tactical-chaos-analysis',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 90)
    },
    {
        id: 'forgotten-heroes-2019-ucl',
        type: 'Exclusive',
        category: 'Heritage',
        title: 'Forgotten Heroes: Where are the 2019 Champions League Winners Now?',
        excerpt: 'From Madrid glory to obscurity. We track down the unsung squad members of the 2019 triumph.',
        content: `Everyone remembers the big names from Madrid. But what about the role players?

### The Class of 2019
- **Alberto Moreno:** Still smiling in Villarreal.
- **Divock Origi:** The legend of legends, currently searching for his scoring boots in Italy.
- **Dejan Lovren:** The "Best Defender in the World" is still fighting the good fight in France.

#### The Legacy
These players weren't just backups; they were the culture. They accepted their roles and became part of the immortal history of the club.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-2019-cl-winners-where-are-they-now',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 100)
    },
    {
        id: 'liverpool-way-vs-big-tech',
        type: 'Exclusive',
        category: 'War Room',
        title: 'The "Liverpool Way" vs. Big Tech: Can Anfield’s Soul Survive AI Transfers?',
        excerpt: 'Algorithms are replacing scouts. We look at how data is changing the very fabric of our club recruitment.',
        content: `Liverpool was the pioneer of the "Moneyball" approach in football. But have we gone too far?

### The Data Dictatorship
Everything is quantified now. Even "character" is being measured by psychometric testing and AI-driven behavior analysis.

#### The Human Factor
Can an algorithm tell you if a player will flourish under the Kop on a rainy Tuesday night? Probably not. We must ensure that the "Eye Test" and our gut feeling—The Liverpool Way—never gets fully replaced by a spreadsheet.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1504384308090-c89e1d48a61b?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-data-recruitment-ai-debate',
        readTime: '8 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 110)
    },
    {
        id: 'club-world-cup-nightmare-2025',
        type: 'Trending',
        category: 'Global News',
        title: 'The Club World Cup Nightmare: Why the New FIFA Format is an Injury Disaster',
        excerpt: 'FIFA wants more games; Liverpool wants more recovery. The clash that could break our season.',
        content: `The new 32-team Club World Cup is coming, and it's a disaster for elite player welfare.

### Extended Seasons
Players will essentially be playing for 11 months straight. For a team like Liverpool that plays at 100mph, this is a death sentence for hamstrings.

#### The LFC Protest
Information from the AXA suggests the club is planning to send a "Reserve Core" to the early rounds. We must protect the crown.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
        slug: 'fifa-club-world-cup-2025-injury-crisis',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 120)
    },
    {
        id: 'brazilian-prodigy-scouting-report',
        type: 'Exclusive',
        category: 'Transfers',
        title: 'The Brazilian Prodigy: Scouting the 17-Year-Old currently on the Radar',
        excerpt: 'He is being called the "Next Neymar," and Liverpool is at the front of the queue.',
        content: `His name is **Estevao Willian** (Messinho), and the buzz in Brazil is that he is the most talented teenager in the world.

### The Scouting Report
- **Style:** Extreme dribbling, low center of gravity.
- **Goal Threat:** Already scoring worldies in the senior league.
- **The Liverpool Link:** Our scouts have been seen at Palmeiras games for three straight months.

We need to beat Chelsea to this one.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'messinho-estevao-liverpool-scouting-report',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 130)
    },
    {
        id: 'power-of-the-lights-psychology',
        type: 'Exclusive',
        category: 'Culture',
        title: 'The Power of the Lights: The Psychology Behind the "Anfield Night" Effect',
        excerpt: 'Why do world-class teams freeze under the floodlights at Anfield?',
        content: `It's not a myth. Champions League nights at Anfield are scientifically different.

### The Auditory Wall
The acoustic design of the stadium traps the sound, creating a constant "white noise" that disrupts opposition communication.

#### The Fear Factor
When the "You'll Never Walk Alone" kicks in under the lights, it triggers a fight-or-flight response in some players. It's not just support; it's psychological warfare.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'anfield-night-psychology-football-analysis',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 140)
    },
    {
        id: 'joe-gomez-harsh-reality-2025',
        type: 'Trending',
        category: 'Player Profile',
        title: 'The Harsh Reality for Joe Gomez: Is it Time for the Veteran to Move On?',
        excerpt: 'Loyalty is great, but playtime is better. We look at the crossroads facing Joey G.',
        content: `Joe Gomez is our longest-serving player. He is versatile, professional, and reliable. But he is also a bench-warmer.

### The Stumbling Block
At 27, he is in his prime. He can play across the entire back four, but he isn't the first choice in any of them.

#### The Verdict
For his own career and for England, Joe needs to be a regular starter. As much as we love him, selling him for £30m in 2025 might be the best move for both parties.`,
        author: 'Mr. Anfield',
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
        slug: 'joe-gomez-future-transfer-debate',
        readTime: '5 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 150)
    },
    {
        id: 'curtis-jones-evolution-analysis',
        type: 'Exclusive',
        category: 'Tactical Analysis',
        title: 'The Evolution of Curtis Jones: From Scouse Flair to Tactical Enforcer',
        excerpt: 'Curtis Jones has finally "arrived." We look at the tactical maturity that has made him a Slot favorite.',
        content: `Curtis Jones used to be a player of flashes. Now, he is a player of consistency.

### Ball Retention King
He used to hold on to the ball too long. Now, he holds on to it exactly long enough to draw the press and release the pass.

#### The Slot Effect
Slot has given him a specific defensive responsibility—the "Shadow Press." He isn't just running; he's blocking lanes. 

He is finally the midfielder we all knew he could be.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1518091043644-c1d445eb9519?q=80&w=1200&auto=format&fit=crop',
        slug: 'curtis-jones-tactical-evolution-lfc',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 160)
    },
    {
        id: 'fsg-sustainability-trap-debate',
        type: 'Trending',
        category: 'War Room',
        title: 'The FSG Sustainability Trap: Are We Being Outspent or Just Outpassed?',
        excerpt: 'The "Net Spend" debate never dies. We look at the sustainability model of Fenway Sports Group.',
        content: `FSG won't spend like City or Chelsea. That's a fact. But is that really a problem?

### The Model
We spend what we earn. This means the club is safe, but it also means we have no room for error in recruitment.

#### The Risk
In a world of state-sponsored clubs, can a "sustainable" model really keep us at the top for another decade? Or are we just creating a ceiling for our own ambition?`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1504384308090-c89e1d48a61b?q=80&w=1200&auto=format&fit=crop',
        slug: 'fsg-liverpool-sustainability-spending-debate',
        readTime: '8 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 170)
    },
    {
        id: 'womens-revolution-lfcw-2025',
        type: 'Exclusive',
        category: 'Club News',
        title: 'The Women’s Revolution: Why Liverpool Women Need Their Own Stadium',
        excerpt: 'Massive growth requires a massive home. Why 2025 is the year for a dedicated women’s hub.',
        content: `Liverpool FC Women are growing, and the support is booming. But playing at shared grounds isn't enough.

### The Identity Crisis
The team needs a base that feels like *their* Anfield. A hub for the academy, the training, and the matchday noise.

#### The Plan
Proposals are on the table for a redevelopment of a local site. It's time for the club to put their money where their mouth is regarding equality in the sport.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-women-football-stadium-proposals',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 180)
    },
    {
        id: 'matchday-rituals-anfield-traditions',
        type: 'Trending',
        category: 'Culture',
        title: 'Matchday Rituals: The 5 Anfield Traditions Every New Fan Needs to Know',
        excerpt: 'From the Sandon to the Kop—the unwritten rules of a Liverpool matchday.',
        content: `Going to Anfield is a pilgrimage. If it's your first time, don't just show up at kickoff.

### The List
1. **The Sandon:** Where it all began. Have a pint where the club was founded.
2. **The Murals:** Take the walking tour. Alexander-Arnold, Salah, Klopp—see the gods on the walls.
3. **The Scarf Raise:** During YNWA, hold it high. Both hands. No exceptions.
4. **The Post-Match Chip Shop:** It's a tradition for a reason.

Don't be a tourist. Be a Red.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop',
        slug: 'anfield-matchday-traditions-guide',
        readTime: '5 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 190)
    },
    {
        id: 'beyond-merseyside-global-reds',
        type: 'Exclusive',
        category: 'Global News',
        title: 'Beyond the Merseyside: How LFC Became the Most Popular Club in Asia',
        excerpt: 'The Scouse soul with a global heartbeat. We look at our massive international reach.',
        content: `Did you know Liverpool has more active fan clubs in Thailand than in the UK? 

### The Global Brand
Our "History" is our selling point. People in Jakarta and New York connect with the resilience of the city and the passion of the fan base.

#### Why it Matters
Commercial revenue from these regions is what allows us to compete with the oil clubs. We are a family of 500 million.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1541534741688-6078c65b5ec5?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-fc-global-fanbase-analysis',
        readTime: '7 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 200)
    },
    {
        id: 'slot-ball-101-tactical-guide',
        type: 'Exclusive',
        category: 'Tactical Analysis',
        title: 'Slot-Ball 101: Explaining the "2-3-5" Build-Up in Simple Terms',
        excerpt: 'You’ve heard the pundits mention it. But what does a "2-3-5" actually look like on the pitch?',
        content: `Football formation is fluid. Under Slot, our "4-3-3" on paper becomes a "2-3-5" in possession.

### The Breakdown
- **The 2:** Virgil and Konate stay back as the insurance policy.
- **The 3:** The full-backs tuck into midfield with the #6 to create a wall.
- **The 5:** Both wingers and the three remaining attackers spread across the front to stretch the defense.

It's about crushing the opposition with numbers. Simple, elegant, deadly.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1518091043644-c1d445eb9519?q=80&w=1200&auto=format&fit=crop',
        slug: 'arne-slot-tactical-formation-guide',
        readTime: '8 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 210)
    },
    {
        id: 'mac-allisters-brain-analysis',
        type: 'Exclusive',
        category: 'Player Profile',
        title: 'Mac Allister’s Brain: Why Alexis is the Most Intelligent Red in Decades',
        excerpt: 'He doesn’t have the speed of Salah or the strength of Virgil. But he has a chess-player’s mind.',
        content: `Alexis Mac Allister plays football in the future. He calculates the second and third pass before he's even received the first.

### Spatial Awareness
His greatest skill isn't his passing; it's his "Scanning." He checks his shoulder 40 times a minute. He knows exactly where the pressure is coming from.

#### The Argentina Link
He brings that South American "street smarts" to the Premier League. He wins fouls when we need a breather and finds gaps where none exist.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
        slug: 'alexis-mac-allister-tactical-intelligence',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 220)
    },
    {
        id: 'january-steals-expiring-contracts',
        type: 'Trending',
        category: 'Transfers',
        title: 'January Steals: 3 Players with Expiring Contracts We Can Snatch for Pennies',
        excerpt: 'Why pay full price? We identify the bargain targets for the winter window.',
        content: `January is usually expensive. Unless you know where to look.

### The Targets
1. **Jonathan David:** Expiring soon, a versatile forward who can play anywhere in the front three.
2. **Joshua Kimmich:** A long shot, but his contract situation at Bayern is still unresolved. Imagine him in red.
3. **Federico Chiesa (Permanent reinforcement):** Oh wait, we already did that. 

The club needs to act fast before the competition wakes up.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-january-transfer-bargains-2025',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 230)
    },
    {
        id: 'only-real-derby-lfc-vs-mci',
        type: 'Exclusive',
        category: 'The Rivalry',
        title: 'The Only Real Derby: Why LFC vs. City is the Only Elite Game Left',
        excerpt: 'United are in the mud. Everton are struggling. The only game that matters now is when Pep faces the Reds.',
        content: `The Manchester Derby is dead. The North London Derby is predictable. The only game that provides world-class tactical innovation is Liverpool vs. Manchester City.

### The Quality Gap
These two teams are playing a different sport. The technical execution, the physical output—it's the peak of human performance.

#### The Era of Greatness
We are lucky to witness it. But let's be clear: City have the money, but we have the history. And that's what makes us more dangerous.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1518091043644-c1d445eb9519?q=80&w=1200&auto=format&fit=crop',
        slug: 'liverpool-vs-man-city-rivalry-analysis',
        readTime: '9 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 240)
    },
    {
        id: 'academy-graduation-next-quansah',
        type: 'Trending',
        category: 'Academy',
        title: 'Academy Graduation: Who is the Next Breakthrough Star After Quansah?',
        excerpt: 'The production line never stops. Meet the next kid about to become a household name.',
        content: `Jarell Quansah and Conor Bradley were the breakout stars of last year. Who's next?

### The Candidate
**Trey Nyoni.** At 17, he plays with the composure of a 30-year-old. His vision in the #10 role is something the senior team is currently lacking in depth.

#### The Path
Slot has already invited him to every single first-team session. Expect a Premier League debut before the season is out.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1574618728027-46363ce23793?q=80&w=1200&auto=format&fit=crop',
        slug: 'trey-nyoni-liverpool-academy-breakthrough',
        readTime: '6 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 250)
    },
    {
        id: 'anfield-heritage-top-10-kits',
        type: 'Exclusive',
        category: 'Heritage',
        title: 'Anfield Heritage: The 10 Greatest LFC Kits of All Time (and where to find them)',
        excerpt: 'From the candy kit to the modern Nike masterworks. We rank the best threads from our history.',
        content: `A kit is more than just a shirt. It's a memory.

### The Ranking
1. **1989-91 Candy Home:** The undisputed king.
2. **1978-81 Umbro:** The kit of European dominance.
3. **2019-20 New Balance:** The shirt we finally won the league in.

#### The Collector’s Guide
If you want the originals, avoid the eBay scams. We've compiled a list of verified retro sellers for the hardcore Reds.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop',
        slug: 'best-liverpool-kits-ranking-history',
        readTime: '10 min read',
        timestamp: new Date(Date.now() - 1000 * 60 * 260)
    }
];

// Add the original Semenyo article back in too
const MASTER_LIST = [
    {
        id: 'semenyo-city-mistake',
        type: 'Exclusive',
        category: 'Transfer Analysis',
        title: 'Semenyo’s City Mistake: Why the Bournemouth Star Chose the Etihad Bench Over Anfield’s Revolution',
        excerpt: 'Antoine Semenyo has reportedly snubbed Liverpool for Manchester City. We break down why this £65m move is a massive tactical error.',
        content: `The January window hasn’t even opened yet, and the first "snub" of the season is already making headlines. Reports are flooding in that Bournemouth’s Antoine Semenyo—a player who has terrorized Premier League defenses all season—has looked at the two greatest projects in world football and chosen the Etihad.

### The £65m Bench-Warmer
Semenyo is trading the chance to become a legend under the Kop for the "honor" of fighting Jeremy Doku for 15 minutes of League Cup action. It's a choice of money over mission. 

#### The Slot Perspective
Arne Slot isn't losing sleep. We hunt bigger fish. And when City comes to Anfield, Semenyo can watch from the dugout while the Reds show him exactly what he missed out on.`,
        author: 'Mr. Anfield',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop',
        slug: 'semenyo-city-transfer-analysis-shorthand',
        readTime: '6 min read',
        timestamp: new Date()
    },
    ...ARTICLES
];

async function deploy() {
    console.log("🏟️  RELEASING THE RED REVOLUTION CONTENT FLEET...");
    for (const art of MASTER_LIST) {
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
    console.log("🔥  MISSION COMPLETE. 27 ARTICLES DEPLOYED.");
    process.exit(0);
}

deploy();
