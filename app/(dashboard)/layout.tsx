import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import type { Metadata } from 'next'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
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
  )
}
