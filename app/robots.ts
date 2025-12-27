
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/private'], // Protect future admin routes
        },
        sitemap: 'https://mr-anfield.vercel.app/sitemap.xml',
    };
}
