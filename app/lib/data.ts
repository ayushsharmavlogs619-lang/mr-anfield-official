
export interface MatchStats {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    league: string;
    status: string;
}

export const UPCOMING_MATCH: MatchStats = {
    homeTeam: "LFC",
    awayTeam: "MCFC",
    homeScore: 3,
    awayScore: 1,
    league: "Premier League",
    status: "Full Time"
};

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    isPremium: boolean;
}

export interface TrendingItem {
    id: string;
    title: string;
    time: string;
    tag: string;
}

export const TRENDING_NEWS: TrendingItem[] = [
    { id: '1', title: "Klopp's Legacy: Five years since the Madrid triumph", time: "2h ago", tag: "Editorial" },
    { id: '2', title: "Transfer Update: Midfield target spotted in Liverpool", time: "5h ago", tag: "Rumors" },
    { id: '3', title: "Injury News: Key defender returns to full training", time: "8h ago", tag: "Team News" },
    { id: '4', title: "Tactical Analysis: How slot is evolving the high press", time: "1d ago", tag: "Analysis" },
];

export const HERO_ARTICLE: Article = {
    id: 'hero-1',
    title: "Anfield Reimagined: The Future of the Historic Stand",
    excerpt: "Deep dive into the club's long-term vision for the stadium expansion and how it will transform the atmosphere on European nights.",
    image: "/stadium.png",
    category: "MUST READ",
    author: "Oliver Kay",
    date: "Oct 25, 2025",
    readTime: "15 min read",
    isPremium: true
};

export const LATEST_NEWS: Article[] = [
    {
        id: 'news-1',
        title: "Liverpool secured dramatic late winner at Anfield",
        excerpt: "A look back at the most emotional moments under the lights as Anfield roared the Reds to victory...",
        image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
        category: "Match Report",
        author: "James Pearce",
        date: "Oct 24, 2025",
        readTime: "5 min",
        isPremium: false
    },
    {
        id: 'news-2',
        title: "Inside the Scouting: The Next Generation of Reds",
        excerpt: "Our deep dive into the academy structure and the rising stars pushing for a first-team place this season.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop",
        category: "Feature",
        author: "Melissa Reddy",
        date: "Oct 23, 2025",
        readTime: "10 min",
        isPremium: true
    },
    {
        id: 'news-3',
        title: "Exclusive: Transfer targets for the Winter Window",
        excerpt: "We break down the three key positions the recruitment team is looking to bolster in January.",
        image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=800&auto=format&fit=crop",
        category: "Transfer News",
        author: "Fabrizio Romano",
        date: "Oct 22, 2025",
        readTime: "7 min",
        isPremium: true
    }
];
