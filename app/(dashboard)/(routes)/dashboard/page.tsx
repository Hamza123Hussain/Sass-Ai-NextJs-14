import React from 'react'
import { Button } from '@/components/ui/button'

import { LayoutDashboard, LucideIcon } from 'lucide-react'
import { routes } from '@/utils/RoutesArray'
import Link from 'next/link'

const DashBoard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Link
        href={'/dashboard'}
        className=" flex  items-center justify-center  gap-2 my-4 "
      >
        <LayoutDashboard />

        <h1 className=" font-bold text-2xl">Quick Suggest</h1>
      </Link>{' '}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {routes.map(({ id, label, Icon, href }) => (
          <a
            key={id}
            href={href}
            className="flex flex-col items-center p-4 bg-gray-600 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            <img src={Icon} alt={label} className="h-12 w-12 mb-4" />
            <span className="text-xl font-semibold">{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default DashBoard
