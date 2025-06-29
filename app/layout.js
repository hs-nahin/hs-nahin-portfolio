import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Particles } from '@/components/ui/particles'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: 'Hasnat Shahriyar - Senior Frontend Developer',
  description: '8+ years of experience crafting exceptional web experiences with React, Next.js, and TypeScript. Senior Frontend Developer specializing in modern web technologies.',
  keywords: 'Frontend Developer, React, Next.js, TypeScript, JavaScript, Web Development',
  authors: [{ name: 'Hasnat Shahriyar' }],
  creator: 'Hasnat Shahriyar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hasnat Shahriyar - Senior Frontend Developer',
    description: '8+ years of experience crafting exceptional web experiences',
    siteName: 'Hasnat Shahriyar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasnat Shahriyar - Senior Frontend Developer',
    description: '8+ years of experience crafting exceptional web experiences',
    creator: '@hs_nahin',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}