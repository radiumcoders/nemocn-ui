import { cn } from '@/lib/utils'
import React from 'react'

function Container({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={cn("relative min-h-screen bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-white)]/10", className)}>
      {/* Main content area */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Left border pattern - absolutely positioned */}
      <div 
        className="fixed left-0 top-0 w-10 h-full bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed z-0"
        style={{ borderRight: '1px solid var(--pattern-fg)' }}
      ></div>
      
      {/* Right border pattern - absolutely positioned */}
      <div 
        className="fixed right-0 top-0 w-10 h-full bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed z-0"
        style={{ borderLeft: '1px solid var(--pattern-fg)' }}
      ></div>
    </div>
  )
}

export default Container