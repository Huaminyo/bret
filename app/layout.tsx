import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BRETT ARMY - BASE TRENCH WARRIORS",
  description:
    "Join the Brett Army - Base Trench Warriors in the ultimate meme coin revolution on Base Network. Unite, fight, and conquer the crypto battlefield.",
  keywords: "Brett Army, Base Network, meme coin, cryptocurrency, trench warriors, Base blockchain, crypto community",
  authors: [{ name: "Brett Army" }],
  creator: "Brett Army",
  publisher: "Brett Army",
  robots: "index, follow",
  openGraph: {
    title: "BRETT ARMY - BASE TRENCH WARRIORS",
    description: "Join the Brett Army - Base Trench Warriors in the ultimate meme coin revolution on Base Network.",
    type: "website",
    locale: "en_US",
    siteName: "Brett Army",
  },
  twitter: {
    card: "summary_large_image",
    title: "BRETT ARMY - BASE TRENCH WARRIORS",
    description: "Join the Brett Army - Base Trench Warriors in the ultimate meme coin revolution on Base Network.",
    creator: "@brettarmy",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
