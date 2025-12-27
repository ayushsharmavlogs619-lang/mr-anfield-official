
import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs, doc, getDoc, where } from "firebase/firestore";

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    category: string;
    author: string;
    image: string;
    date: string;
    slug: string;
    type?: string;
    timestamp?: { seconds: number; nanoseconds: number } | Date | string;
    readTime?: string;
}

export interface Match {
    id: string;
    home: string;
    away: string;
    date: string;
    venue: string;
    competition: string;
    status: "Upcoming" | "Live" | "Finished";
    homeScore?: string;
    awayScore?: string;
    scorers?: string[];
}

/**
 * Fetch the hero article. 
 * Prioritizes articles tagged as 'Hero', then 'Exclusive', then just the latest news.
 */
export async function getHeroArticle(): Promise<Article | null> {
    try {
        const newsRef = collection(db, "news");

        // Try to find one explicitly tagged as Hero
        const heroQuery = query(newsRef, where("type", "==", "Hero"), limit(1));
        const heroSnap = await getDocs(heroQuery);

        if (!heroSnap.empty) {
            return { id: heroSnap.docs[0].id, ...heroSnap.docs[0].data() } as Article;
        }

        // Fallback to latest exclusive
        const exclusiveQuery = query(newsRef, where("type", "==", "Exclusive"), orderBy("timestamp", "desc"), limit(1));
        const exclusiveSnap = await getDocs(exclusiveQuery);

        if (!exclusiveSnap.empty) {
            return { id: exclusiveSnap.docs[0].id, ...exclusiveSnap.docs[0].data() } as Article;
        }

        // Fallback to absolute latest
        const latest = await getLatestNews(1);
        return latest.length > 0 ? latest[0] : null;
    } catch (error) {
        console.error("Error fetching hero article:", error);
        return null;
    }
}

export async function getLatestNews(count: number = 10): Promise<Article[]> {
    try {
        const newsRef = collection(db, "news");
        const q = query(newsRef, orderBy("timestamp", "desc"), limit(count));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Article));
    } catch (error) {
        console.error("Error fetching latest news:", error);
        return [];
    }
}

export async function getArticleById(id: string): Promise<Article | null> {
    try {
        // First try by ID
        const docRef = doc(db, "news", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() } as Article;
        }

        // If not found, try by slug
        const newsRef = collection(db, "news");
        const q = query(newsRef, where("slug", "==", id), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const firstDoc = querySnapshot.docs[0];
            return { id: firstDoc.id, ...firstDoc.data() } as Article;
        }

        return null;
    } catch (error) {
        console.error("Error fetching article by ID/Slug:", error);
        return null;
    }
}

export async function getTrendingNews(count: number = 4): Promise<Article[]> {
    try {
        const newsRef = collection(db, "news");
        const q = query(newsRef, where("type", "==", "Trending"), limit(count));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return getLatestNews(count);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Article));
    } catch (error) {
        console.error("Error fetching trending news:", error);
        return getLatestNews(count);
    }
}

export async function getExclusiveNews(count: number = 4): Promise<Article[]> {
    try {
        const newsRef = collection(db, "news");
        const q = query(newsRef, where("type", "==", "Exclusive"), limit(count));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Article));
    } catch (error) {
        console.error("Error fetching exclusive news:", error);
        return getLatestNews(count);
    }
}

/**
 * Placeholder for match data. 
 * In a real scenario, this would fetch from a 'matches' collection.
 */
export async function getUpcomingMatches(count: number = 3): Promise<Match[]> {
    try {
        const matchesRef = collection(db, "matches");
        const q = query(matchesRef, where("status", "==", "Upcoming"), orderBy("date", "asc"), limit(count));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Match));
    } catch (error) {
        console.error("Error fetching matches:", error);
        return [];
    }
}

export async function getLeagueTable(): Promise<Array<{ team: string; p: number; pts: number; gd: number; pos?: number;[key: string]: unknown }>> {
    try {
        const tableRef = collection(db, "leagueTable");
        const q = query(tableRef, orderBy("pts", "desc"), orderBy("gd", "desc"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return [];

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as unknown as { team: string; p: number; pts: number; gd: number; pos?: number;[key: string]: unknown }));
    } catch (error) {
        console.error("Error fetching league table:", error);
        return [];
    }
}

export async function getLatestResult(): Promise<Match | null> {
    try {
        const matchesRef = collection(db, "matches");
        const q = query(matchesRef, where("status", "==", "Finished"), orderBy("date", "desc"), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return null;

        return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as Match;
    } catch (error) {
        console.error("Error fetching latest result:", error);
        return null;
    }
}

export async function getNewsByCategory(category: string, count: number = 10): Promise<Article[]> {
    try {
        const newsRef = collection(db, "news");
        const q = query(newsRef, where("category", "==", category), orderBy("timestamp", "desc"), limit(count));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Article));
    } catch (error) {
        console.error(`Error fetching news for category ${category}:`, error);
        return [];
    }
}

import { SOCIAL_LINKS } from "./data";
export function getSocialLinks() {
    return SOCIAL_LINKS;
}
