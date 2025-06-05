import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Copromatic - Plateforme de gestion pour syndics',
  description: 'La plateforme complète pour les syndics professionnels',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
