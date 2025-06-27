import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { Particles } from '@/components/ui/particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hasnat Shahriyar - Frontend Developer',
  description: 'Frontend Web Developer crafting clean, fast, and interactive web interfaces with React, Next.js, and Tailwind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} cursor-pointer-custom`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          <Particles className="absolute inset-0 -z-10" />
          <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}