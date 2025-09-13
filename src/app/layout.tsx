import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
