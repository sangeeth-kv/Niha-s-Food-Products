import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Niha\'s Food Products | Authentic Traditional Flavors',
  description: 'Discover authentic Kerala food products including puttu podi,pathiri podi and more. Pure, handmade ingredients with no additives. Order on WhatsApp.',
  keywords: 'Kerala foods, podi, pathiri podi, puttu podi, authentic Kerala, food delivery',
  generator: 'v0.app',
  openGraph: {
    title: 'Niha\'s Food Products | Authentic Traditional Flavors',
    description: 'Discover authentic Kerala food products including coconut oil, spices, snacks, and more.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/images/LOGO.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/LOGO.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/images/LOGO.jpeg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

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
