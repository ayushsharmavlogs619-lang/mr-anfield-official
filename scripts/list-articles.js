/**
 * AI Article Generator Script
 * Generates full professional content for all homepage articles
 */

const articles = [
    {
        title: "The Tactical Masterminds: How Pep and Klopp Redefined the Premier League",
        prompt: "Write a deep tactical analysis (minimum 1000 words) of how Pep Guardiola and Jurgen Klopp revolutionized Premier League football. Compare Positional Play vs Gegenpressing with specific tactical examples from key matches.",
        slug: "pep-klopp-tactical-masterclass",
        category: "Tactics"
    },
    {
        title: "Six Years of Perfection: The Iconic Matches That Defined an Era",
        prompt: "Write a detailed match analysis (minimum 1000 words) of the most memorable Liverpool vs Manchester City encounters from 2017-2023, including the 2019 title race and the 11mm goal-line clearance.",
        slug: "city-lfc-iconic-matches",
        category: "Match Analysis"
    },
    {
        title: "Beyond the Pitch: The Cultural Legacy and the Future of Elite Rivalries",
        prompt: "Write an in-depth feature (minimum 1000 words) exploring how the Pep vs Klopp era changed football culture and what it means for the next generation of managers like Arne Slot and Mikel Arteta.",
        slug: "lfc-city-legacy-future",
        category: "Culture"
    },
    {
        title: "Szoboszlai Century: Midfielder reaches 100 long-range attempts",
        prompt: "Write a tactical analysis (minimum 800 words) of Dominik Szoboszlai's revolutionary approach to long-range shooting for Liverpool, including stats and how it adds a new dimension to Slot's attack.",
        slug: "szoboszlai-long-range",
        category: "News"
    },
    {
        title: "New 80,000 Capacity Vision: FSG weighing up further stadium expansion",
        prompt: "Write a detailed report (minimum 800 words) on Liverpool's potential Anfield expansion to 80,000 capacity, including architectural plans, demand analysis, and financial implications.",
        slug: "anfield-expansion-v3",
        category: "Club"
    },
    {
        title: "The Next Trent? Scouting the U18 right-back currently impressing Slot",
        prompt: "Write a comprehensive scout report (minimum 800 words) on Liverpool's promising U18 right-back, including technical analysis and comparisons to Trent Alexander-Arnold.",
        slug: "academy-starlets",
        category: "Academy"
    }
];

console.log('\n🤖 AI ARTICLE GENERATOR\n');
console.log('='.repeat(60));
console.log('\nArticles to generate:');
articles.forEach((art, i) => {
    console.log(`\n${i + 1}. ${art.title}`);
    console.log(`   Category: ${art.category}`);
    console.log(`   Slug: ${art.slug}`);
});

console.log('\n' + '='.repeat(60));
console.log('\n📝 To generate these articles:');
console.log('\n1. Visit: http://localhost:3000/workroom/ghostwriter');
console.log('2. For each article above, paste the prompt into the AI');
console.log('3. Click "Generate Draft"');
console.log('4. Click "Publish to the Stadium"');
console.log('\n✨ Or use the Firebase publish scripts!\n');

// Output as JSON for automated processing
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'articles-to-generate.json');
fs.writeFileSync(outputPath, JSON.stringify(articles, null, 2));

console.log(`\n✅ Article prompts saved to: ${outputPath}\n`);
