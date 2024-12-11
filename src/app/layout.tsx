import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/Footer'
import SchemaOrg from './schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Werkstudent & Minijob kombinieren 2024 » Kompletter Guide',
  description: '✓ Werkstudent mit Minijob kombinieren ✓ 70-Tage-Regelung erklärt ✓ Aktuelle Verdienstgrenzen 2024 ✓ Was ist gleichzeitig erlaubt? Von Studenten für Studenten.',
  keywords: 'Werkstudent, Minijob, Studentenjobs, Nebenjob Student, 70-Tage-Regelung, Kurzfristige Beschäftigung, Student Nebenjob, Werkstudent Regeln',
  authors: [{ name: 'Oskar Pokorski', url: 'https://oskai.de' }],
  creator: 'Oskar Pokorski',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://studentenjobs-kombi.de/',
    siteName: 'Studentenjobs Kombination Guide',
    title: 'Werkstudent & Minijob kombinieren 2024 » Kompletter Guide',
    description: 'Werkstudent mit Minijob kombinieren ✓ 70-Tage-Regelung erklärt ✓ Aktuelle Verdienstgrenzen 2024',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studentenjobs Kombination Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werkstudent & Minijob kombinieren 2024',
    description: 'Kompletter Guide zu Werkstudent, Minijob und 70-Tage-Regelung',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code', // Später einzutragen
  },
  alternates: {
    canonical: 'https://studentenjobs-kombi.de'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <SchemaOrg />
        <main className="min-h-screen">{children}</main>  {}
        <Footer />
      </body>
    </html>
  )
}