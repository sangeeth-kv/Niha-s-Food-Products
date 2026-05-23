import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niha's Food Products | Authentic Kerala Puttu & Pathiri Podi",

  description:
    "Buy authentic Kerala food products including premium Puttu Podi and Pathiri Podi. Fresh, hygienic, traditional taste made with quality ingredients.",

  keywords: [
    "Kerala food products",
    "Puttu Podi",
    "Pathiri Podi",
    "Kerala Podi",
    "Traditional Kerala Foods",
    "Niha's Foods",
    "Kerala food online",
  ],

  authors: [{ name: "Sangeeth KV" }],

  creator: "Sangeeth KV",

  metadataBase: new URL("https://your-domain.vercel.app"),

  openGraph: {
    title: "Niha's Food Products",
    description:
      "Authentic Kerala Puttu Podi and Pathiri Podi with traditional homemade taste.",

    url: "https://your-domain.vercel.app",

    siteName: "Niha's Food Products",

    images: [
      {
        url: "/images/LOGO.jpeg",
        width: 1200,
        height: 630,
        alt: "Niha's Food Products",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Niha's Food Products",

    description:
      "Authentic Kerala Puttu Podi and Pathiri Podi with traditional taste.",

    images: ["/images/LOGO.jpeg"],
  },

  icons: {
    icon: "/images/LOGO.jpeg",
    apple: "/images/LOGO.jpeg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
