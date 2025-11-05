'use client'

import { AlertTriangle } from 'lucide-react'

export default function AssignmentBanner() {
  return (
    <div className="bg-yellow-500 text-black py-3 px-4 text-center font-bold text-sm md:text-base border-b-2 border-yellow-600 shadow-lg z-50 relative">
      <div className="container-custom flex items-center justify-center gap-2">
        <AlertTriangle size={20} className="flex-shrink-0" />
        <span>
          ⚠️ THIS IS A SCHOOL ASSIGNMENT - NOT A REAL WEBSITE ⚠️
        </span>
        <AlertTriangle size={20} className="flex-shrink-0" />
      </div>
    </div>
  )
}

