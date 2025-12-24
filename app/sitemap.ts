
import { MetadataRoute } from 'next';
import { LATEST_NEWS } from "@/app/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mr-anfield.netlify.app';

    // Static routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/match-center`,
            lastModified: new Date(),
            changeFrequency: 'hourly' as const,
            priority: 0.8,
        },
    ];

    // Dynamic article routes
    const articles = LATEST_NEWS.map((post) => ({
        url: `${baseUrl}/news/${post.id}`,
        lastModified: new Date(post.date), // Using mock date for now
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }));

    return [...routes, ...articles];
}
