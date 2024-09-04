'use client'

import { cn } from '@/lib/utils'
import GridPattern from '@/components/magicui/grid-pattern'
import { ReactNode } from 'react'

export function GridPatternDemo({ children }: { children: ReactNode }) {
  return (
    <div className='relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background'>
      {children}
      <GridPattern
        width={50}
        height={50}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]'
        )}
      />
    </div>
  )
}
