'use client'
import { routes } from '@/utils/RoutesArray'
import { Icon, LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import ShowingUser from './Auth/ShowingUser'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className=" flex flex-col border-r-2 border-slate-700    text-white min-h-screen bg-slate-900 justify-between py-2 ">
      <Link
        href={'/dashboard'}
        className=" flex  items-center justify-center  gap-2 "
      >
        <LayoutDashboard />

        <h1 className=" font-bold text-xl">Quick Suggest</h1>
      </Link>{' '}
      <div className=" flex flex-col gap-4 my-2">
        {routes.map((ele: any) => {
          return (
            <div key={ele.id} className=" px-2">
              <Link href={ele.href} className=" flex gap-5 items-center">
                <img className=" w-10" src={ele.Icon} alt="" />
                <h3
                  className={`text-[12px] ${
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
      <ShowingUser />
    </div>
  )
}

export default Sidebar
