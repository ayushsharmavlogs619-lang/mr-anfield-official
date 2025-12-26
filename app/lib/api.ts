
import { db } from "./firebase";
import { collection, query, orderBy, limit, getDocs, doc, getDoc, where } from "firebase/firestore";

export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    image: string;
    date: string;
    slug: string;
    type?: string;
    timestamp?: any;
    readTime?: string;
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

        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Article));
    } catch (error) {
        // Fallback to latest if trending fails or is empty
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
        return getLatestNews(count);
    }
}
