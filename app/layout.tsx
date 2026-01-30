import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ArticleX – Fast SEO Optimized Tech Blog",
  description:
    "Browse fast, searchable tech articles with category filters built using Next.js and TypeScript.",
    icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "ArticleX – Modern Tech Blog",
    description:
      "Fast SEO optimized tech blog with live API content, search and filters.",
    images: ["/og-image.jpg"],
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ArticleX",
              url: process.env.NEXT_PUBLIC_SITE_URL,
              description:
                "Fast SEO optimized tech blog built with Next.js and TypeScript",
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
