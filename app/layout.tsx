import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AssignmentBanner from '@/components/AssignmentBanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'School Assignment - Corporate Website Demo',
  description: 'This is a school assignment demonstration website - NOT a real corporate website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AssignmentBanner />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

