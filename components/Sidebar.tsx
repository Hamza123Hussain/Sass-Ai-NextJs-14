'use client'
import { routes } from '@/utils/RoutesArray'
import { Icon, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className=" flex flex-col h-full py-4 space-y-4 text-white min-h-screen bg-slate-900 ">
      <div className=" px-1 py-2 flex-1">
        <Link
          href={'/dashboard'}
          className=" flex pt-3 items-center justify-center mb-4 gap-4"
        >
          <LayoutDashboard />

          <h1 className=" font-bold text-xl"> Sass AI</h1>
        </Link>{' '}
        <div className=" mt-10 flex flex-col gap-4">
          {routes.map((ele: any) => {
            return (
              <div key={ele.id}>
                <Link href={ele.href} className=" flex gap-5 items-center">
                  <img className=" w-10" src={ele.Icon} alt="" />
                  <h3
                    className={`text-[10px] ${
                      pathname == ele.href ? 'text-green-400' : 'text-white'
                    }`}
                  >
                    {' '}
                    {ele.label}
                  </h3>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
