'use client';

import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
    return (
        <>
            {/* Google Analytics – Consent Mode (Gated by Cookiebot) */}
            {GA_ID && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                        data-cookieconsent="statistics"
                    />
                    <Script
                        id="ga-init"
                        strategy="afterInteractive"
                        data-cookieconsent="statistics"
                    >
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                anonymize_ip: true,
                page_path: window.location.pathname
              });
            `}
                    </Script>
                </>
            )}

            {/* Meta Pixel – Marketing Consent (Gated by Cookiebot) */}
            {META_PIXEL_ID && (
                <>
                    <Script
                        id="meta-pixel"
                        strategy="afterInteractive"
                        data-cookieconsent="marketing"
                    >
                        {`
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');

              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `}
                    </Script>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            className="hidden"
                            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            )}

            {/* Vercel Analytics (Privacy-first, always allowed per most compliance reviews) */}
            <VercelAnalytics />
        </>
    );
}
