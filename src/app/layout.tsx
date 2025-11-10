import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/navigation/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress, BackToTop } from '@/components/ui/ScrollProgress'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { Newsletter } from '@/components/newsletter/Newsletter'
import { StructuredData } from '@/components/seo/StructuredData'
import { Analytics } from '@vercel/analytics/react'
import { AnimatedMeshGradient } from '@/components/ui/AnimatedMeshGradient'
import { ToastProvider } from '@/components/ui/ToastProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sanchit - Blockchain & Web3 Developer',
  description: 'Portfolio of Sanchit - A passionate blockchain developer specializing in Web3 technologies, smart contracts, DeFi protocols, NFT marketplaces, and decentralized applications.',
  keywords: ['Sanchit', 'Blockchain Developer', 'Web3 Engineer', 'Solidity', 'Smart Contracts', 'DeFi', 'NFT', 'Ethereum', 'dApp', 'Portfolio'],
  authors: [{ name: 'Sanchit' }],
  creator: 'Sanchit',
  metadataBase: new URL('https://sanchit-portfolio.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanchit-portfolio.vercel.app',
    title: 'Sanchit - Blockchain & Web3 Developer',
    description: 'Portfolio showcasing cutting-edge blockchain development, smart contracts, and Web3 applications',
    siteName: 'Sanchit Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanchit Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanchit - Full Stack Developer & Designer',
    description: 'Portfolio showcasing cutting-edge web development projects',
    creator: '@sanchit',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <StructuredData />
      </head>
      <body className="font-sans overflow-x-hidden">
        <Providers>
          <AnimatedMeshGradient />
          <ScrollProgress />
          <BackToTop />
          <CustomCursor />
          <ToastProvider />
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
