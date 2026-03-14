import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
  icons: {
    icon: "/pfp.webp",
  },
  openGraph: {
    images: [
      {
        url: "/pfp.webp",
        width: 1200,
        height: 1200,
        alt: DATA.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/pfp.webp"],
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
