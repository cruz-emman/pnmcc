"use client"
import Image from 'next/image'
import React from 'react'

import ToolTipHelper from './tool-tip-helper'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { authClient } from '@/lib/auth-client'


import { useRouter } from 'next/navigation'

export default function DashboardComponent() {
   const router = useRouter()
    const handleLogout = async () => {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/"); // redirect to login page
          },
        },
      });
    }

    
  return (
    <div className="flex items-center justify-center w-full h-screen overflow-hidden">

      {/* The image */}
      <div className="relative h-full w-full isolate">
        <Image
          src="/lobby.jpg"
          alt="logo"
          className="pointer-events-none select-none object-contain"
          fill
          priority
        />
        <Button onClick={handleLogout}>Logout</Button>

        <ToolTipHelper
          className={cn(
            "absolute bottom-16 right-144 z-50", // Changed z-20 to z-50
            "bg-white/80 backdrop-blur",
            "rounded-lg shadow-lg"
          )}
        />
      </div>

    </div>
  )
}