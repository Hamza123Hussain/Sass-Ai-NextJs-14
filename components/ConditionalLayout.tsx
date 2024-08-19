'use client'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { UserContext } from '@/utils/Context'
import { Toaster } from 'react-hot-toast'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import NoAuthNavbar from './NoAuthNavbar'
import Conversation from '@/app/(dashboard)/(routes)/Conversation/page'
import Login from '@/app/login/page'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const { userData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  // Use useEffect to only set isClient on the client-side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if the current route is login or signup
  const isAuthPage =
    pathname === '/login' ||
    pathname === '/signup' ||
    pathname === '/forgotpass'

  // Render the layout based on client-side state
  if (!isClient) {
    return null // or a loading spinner if preferred
  }

  return (
    <>
      {userData ? (
        <div className="h-full relative ">
          <div className=" hidden h-full md:flex md:w-48  md:flex-col md:fixed md:inset-y-0 z-[80] bg-slate-400 ">
            <div className=" text-green-500">
              <Sidebar />
            </div>
          </div>

          <main className=" md:pl-52">
            <Navbar />
            {children}
          </main>
        </div>
      ) : isAuthPage ? (
        <main className="flex-grow flex flex-col">
          <NoAuthNavbar />
          {children}
        </main>
      ) : (
        <main className="flex-grow flex flex-col">
          <NoAuthNavbar />
          <Login />
        </main>
      )}
    </>
  )
}

export default ConditionalLayout
