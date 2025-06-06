import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import CustomCursor from '@/components/custom-cursor'
import SocialDock from '@/components/social-dock'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasnat Shahriyar - Frontend Developer',
  description: 'Frontend developer skilled in React.js and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          <SocialDock />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}