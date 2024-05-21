import { Icon, LayoutDashboard, LayoutDashboardIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const routes = [
  {
    id: 1,
    label: 'Dashboard',
    Icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/dashboard-1888158-1599936.png?f=webp',
    href: '/dashboard',
  },
  {
    id: 2,
    label: 'Conversation',
    Icon: '360_F_500526719_3viiy0ih3f5d85kYlQJ8IsNwNzhUiPVK-removebg-preview.png',
    href: '/Conversation',
  },
  {
    id: 3,
    label: 'Image Generation',
    Icon: 'https://static.thenounproject.com/png/5553355-200.png',
    href: '/ImageGeneration',
  },
  {
    id: 4,
    label: 'Video Generation',
    Icon: 'https://cdn-icons-png.flaticon.com/512/3829/3829501.png',
    href: '/VideoGeneration',
  },
  {
    id: 5,
    label: 'Music Generation',
    Icon: 'https://static.thenounproject.com/png/6708663-200.png',
    href: '/MusicGeneration',
  },
  {
    id: 6,
    label: 'Code Generation',
    Icon: 'https://icons.veryicon.com/png/o/miscellaneous/programming-software-icons/generate-code.png',
    href: '/CodeGeneration',
  },
]

const Sidebar = () => {
  return (
    <div className=" flex flex-col h-full py-4 space-y-4 text-white bg-slate-400 ">
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
                  <h3 className=" text-sm"> {ele.label}</h3>
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
