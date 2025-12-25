'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

export default function Analytics() {
    // Initialize Firebase Analytics
    useEffect(() => {
        if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) {
            // Firebase Analytics will auto-initialize through the Firebase SDK
            console.log('Firebase Analytics initialized');
        }
    }, []);

    return (
        <>
            {/* Google Analytics 4 */}
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `}
                    </Script>
                </>
            )}

            {/* Meta Pixel (Facebook) */}
            {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
                <>
                    <Script id="meta-pixel" strategy="afterInteractive">
                        {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
                    </Script>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            )}

            {/* Vercel Analytics - Official SDK */}
            <VercelAnalytics />
        </>
    );
}
