import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from '@/components/Header';
import BackToTop from '@/components/BackToTop';
import Script from 'next/script';
import { StagewiseToolbar } from '@stagewise/toolbar-next';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ["latin"] });

// Stagewise配置
const stagewiseConfig = {
  plugins: []
};

export const metadata: Metadata = {
  title: "AI Headshot Generator - Create Professional Headshots in Seconds",
  description: "Upload your selfie photo, choose your style, and generate a professional headshot in seconds. Perfect for LinkedIn, Resume, and Social Media Profiles.",
  keywords: "ai headshot generator, professional headshot generator, ai headshot, headshot generator, ai headshots, headshot generator online, ai headshot generator online, ai headshot generator free, ai headshot generator free online, ai headshot generator free online",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://aiheadshotgen.com/",
  },
  openGraph: {
    title: "AI Headshot Generator - Create Professional Headshots in Seconds",
    description: "Upload your selfie photo, choose your style, and generate a professional headshot in seconds. Perfect for LinkedIn, Resume, and Social Media Profiles.",
    url: "https://aiheadshotgen.com/",
    siteName: "AI Headshot Generator",
    images: [
      {
        url: "https://aiheadshotgen.com/og-image.png",
        width: 1024,
        height: 1024,
        alt: "AI Headshot Generator",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SD8Q3MPVZ9"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SD8Q3MPVZ9');
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rwq7ye41zx");
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <Providers>
          <Header />
          {children}
          <BackToTop />
          {/* Stagewise工具栏 - 仅在开发模式下显示 - 临时禁用避免错误 */}
          {/* {process.env.NODE_ENV === 'development' && (
            <StagewiseToolbar config={stagewiseConfig} />
          )} */}
        </Providers>
      </body>
    </html>
  );
}