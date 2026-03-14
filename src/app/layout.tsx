import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.summary,
  // Added SEO Keywords and Authorship
  keywords: [
    "Portfolio",
    "Developer",
    "Resume",
    "Freelance",
    "backend developer",
    "frontend developer",
    "web developer",
    "web design",
    DATA.name,
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  // Added base Open Graph Protocol (OGP) data
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    title: DATA.name,
    description: DATA.summary,
    siteName: DATA.name,
  },
  // Expanded Twitter Card data
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.summary,
    creator: "@_ss1ngh",
  },
  // Added Crawler Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Added Canonical URL configuration
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/pfp.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-white text-[#0A0A0A] antialiased relative selection:bg-[#3235F8] selection:text-white",
          inter.variable,
        )}
      >
        <TooltipProvider delayDuration={100}>{children}</TooltipProvider>
      </body>
    </html>
  );
}
