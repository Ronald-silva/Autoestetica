import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import Footer from '@/components/Footer'
import React from 'react'
import Favicons from '@/components/Favicons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auto Estética',
  description: 'Serviços de estética automotiva premium com atendimento em domicílio. Garantia de 1 ano em todos os serviços.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="pt-BR">
      <head>
        <Favicons />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  )
} 