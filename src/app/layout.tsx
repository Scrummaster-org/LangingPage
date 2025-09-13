import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Modern, readable sans-serif for body text - excellent for UI
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// Premium display font for headlines - unique character and tech feel
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Code/terminal font for logo and code snippets
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ghana Tech Bootcamp - Code Your Future Today",
  description: "Join thousands of Ghanaian youth mastering cutting-edge technology. From web development to AI, we're building the next generation of tech leaders across SHS, JHS, and universities.",
  keywords: ["tech bootcamp", "Ghana", "coding", "programming", "web development", "youth", "education", "technology"],
  authors: [{ name: "Ghana Tech Bootcamp" }],
  openGraph: {
    title: "Ghana Tech Bootcamp - Code Your Future Today",
    description: "Join thousands of Ghanaian youth mastering cutting-edge technology. From web development to AI, we're building the next generation of tech leaders.",
    type: "website",
    locale: "en_GH",
    siteName: "Ghana Tech Bootcamp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana Tech Bootcamp - Code Your Future Today",
    description: "Join thousands of Ghanaian youth mastering cutting-edge technology. Transform your career with our world-class tech education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
