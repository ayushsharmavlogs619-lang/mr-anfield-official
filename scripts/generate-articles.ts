// Script to generate full articles using AI Ghostwriter
import { ghostwriterAction } from '../app/workroom/actions.js';
import { db } from '../app/lib/firebase.js';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const articlesToGenerate = [
    {
        title: "The Tactical Masterminds: How Pep and Klopp Redefined the Premier League",
        prompt: "Write a deep tactical analysis of how Pep Guardiola and Jurgen Klopp revolutionized Premier League football with their contrasting philosophies - Positional Play vs Gegenpressing. Include specific tactical examples, key matches, and how they pushed each other to perfection.",
        category: "Tactics",
        slug: "pep-klopp-tactical-masterclass",
        image: "/rivalry-pep-klopp.png"
    },
    {
        title: "Six Years of Perfection: The Iconic Matches That Defined an Era",
        prompt: "Analyze the most memorable Liverpool vs Manchester City matches from 2017-2023. Include the 2019 title race, the 11mm goal-line clearance, and key tactical moments that defined these epic encounters.",
        category: "Match Analysis",
        slug: "city-lfc-iconic-matches",
        image: "/stadium.png"
    },
    {
        title: "Beyond the Pitch: The Cultural Legacy and the Future of Elite Rivalries",
        prompt: "Explore how the Pep vs Klopp era changed football culture and what it means for the next generation of managers like Arne Slot and Mikel Arteta. Discuss the evolution of tactical philosophy and elite rivalry.",
        category: "Culture",
        slug: "lfc-city-legacy-future",
        image: "/trophy-ribbons.png"
    },
    {
        title: "Szoboszlai Century: Midfielder reaches 100 long-range attempts",
        prompt: "Analyze Dominik Szoboszlai's revolutionary approach to long-range shooting for Liverpool. Include stats, tactical positioning, and how this adds a new dimension to Liverpool's attack under Arne Slot.",
        category: "News",
        slug: "szoboszlai-long-range",
        image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=640&auto=format&fit=crop"
    },
    {
        title: "New 80,000 Capacity Vision: FSG weighing up further stadium expansion",
        prompt: "Report on Liverpool's potential Anfield expansion plans to 80,000 capacity. Include architectural details, waiting list demand, financial implications, and comparisons to other Premier League stadiums.",
        category: "Club",
        slug: "anfield-expansion-v3",
        image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=640&auto=format&fit=crop"
    },
    {
        title: "The Next Trent? Scouting the U18 right-back currently impressing Slot",
        prompt: "Scout report on Liverpool's promising U18 right-back prospect who's catching Arne Slot's attention. Include technical analysis, comparisons to Trent Alexander-Arnold, and potential pathway to first team.",
        category: "Academy",
        slug: "academy-starlets",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=640&auto=format&fit=crop"
    }
];

async function generateAllArticles() {
    console.log('🤖 Starting AI Ghostwriter batch generation...\n');

    for (const article of articlesToGenerate) {
        console.log(`📝 Generating: ${article.title}`);

        try {
            const result = await ghostwriterAction(article.prompt);

            if (result.article) {
                // Save to Firestore
                await addDoc(collection(db, 'news'), {
                    title: result.article.title || article.title,
                    excerpt: result.article.excerpt,
                    content: result.article.content,
                    category: result.article.category || article.category,
                    readTime: result.article.readTime || '8 min read',
                    slug: article.slug,
                    image: article.image,
                    author: 'Mr. Anfield Football Editorial',
                    timestamp: serverTimestamp(),
                    type: 'Exclusive'
                });

                console.log(`✅ Published: ${article.title}\n`);
            } else {
                console.error(`❌ Failed: ${article.title} - ${result.error}\n`);
            }

            // Wait 2 seconds between requests to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (error) {
            console.error(`❌ Error generating ${article.title}:`, error);
        }
    }

    console.log('\n🎉 All articles generated and published!');
}

// Run the script
generateAllArticles().catch(console.error);
