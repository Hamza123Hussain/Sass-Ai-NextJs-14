import type { Metadata } from 'next'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full relative ">
      <div
        className=" hidden h-full md:flex md:w-32  md:flex-col md:fixed md:inset-y-0 z-[80]
    bg-gray-900"
      >
        <div className=" text-green-500">Hello sidebar</div>
      </div>

      <main className=" md:pl-40">
        I am CONTNENT
        {children}
      </main>
    </div>
  )
}
