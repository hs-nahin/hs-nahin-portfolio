import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { Particles } from '@/components/ui/particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasnat Shahriyar - Frontend Developer',
  description: 'Crafting clean, fast, and interactive web interfaces with React, Next.js, and Tailwind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <Particles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}