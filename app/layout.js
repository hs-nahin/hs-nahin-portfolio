import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Particles } from '@/components/ui/particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hasnat Shahriyar - Senior Frontend Developer',
  description: '8+ years of experience crafting exceptional web experiences with React, Next.js, and TypeScript. Senior Frontend Developer specializing in modern web technologies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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