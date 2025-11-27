import React from 'react'

import { Button } from '../ui/button'
import { Tooltip, TooltipTrigger } from '../ui/tooltip'
import { cn } from '../../lib/utils'
import { TooltipContent } from '@radix-ui/react-tooltip'

interface ToolTipHelperProps {
  className?: string
}

export default function ToolTipHelper({ className }: ToolTipHelperProps) {
  return (
    <div className={cn(className)}>
      <Tooltip>
        <TooltipTrigger asChild>
            <div className='w-5 h-5 bg-red-900 rounded-full' />
        </TooltipTrigger>
        <TooltipContent>
          <p>Go to </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
