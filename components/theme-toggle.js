"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themes = [
    { name: 'light', icon: Sun, label: 'Light' },
    { name: 'dark', icon: Moon, label: 'Dark' },
    { name: 'system', icon: Monitor, label: 'System' }
  ]

  return (
    <Card className="p-1 bg-muted/50 backdrop-blur-sm border-2 border-border/50 shadow-lg">
      <div className="flex items-center space-x-1">
        {themes.map(({ name, icon: Icon, label }) => (
          <Button
            key={name}
            variant="ghost"
            size="sm"
            onClick={() => setTheme(name)}
            className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
              theme === name
                ? 'bg-primary text-primary-foreground shadow-md scale-105'
                : 'hover:bg-muted-foreground/10 hover:scale-105'
            }`}
            title={`Switch to ${label} mode`}
          >
            <Icon className="h-4 w-4" />
            {theme === name && (
              <div className="absolute inset-0 bg-primary/20 rounded-lg animate-pulse" />
            )}
          </Button>
        ))}
      </div>
    </Card>
  )
}