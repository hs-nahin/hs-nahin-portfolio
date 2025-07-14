import { ThemeProvider } from '@/components/theme-provider'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

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
  title: 'Hasnat Shahriyar - Frontend Developer',
  description: '1+ years of experience in modern web development. Expert in React, Next.js, TypeScript, and advanced frontend technologies.',
  keywords: 'Frontend Developer, React Expert, Next.js, TypeScript, JavaScript, Web Development, UI/UX, Full Stack Developer',
  authors: [{ name: 'Hasnat Shahriyar' }],
  creator: 'Hasnat Shahriyar',
    icons: {
    icon: '/images/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hasnat Shahriyar - Frontend Developer',
    description: '1+ years of experience in modern web development',
    siteName: 'Hasnat Shahriyar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasnat Shahriyar - Frontend Developer',
    description: '1+ years of experience in modern web development',
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}