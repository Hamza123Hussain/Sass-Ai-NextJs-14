import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const NoAuthNavbar = () => {
  const Router = useRouter()
  return (
    <div className=" flex justify-between items-center bg-slate-700">
      <div className=" flex  items-center text-white">
        <Image
          src={'/Logo.png'}
          className=" w-18"
          width={50}
          height={50}
          alt="Logo"
        />
        <h1>Quick Suggest</h1>
      </div>
      <div className="px-2">
        <button
          onClick={() => Router.push('/login')}
          className=" px-2 bg-green-300 text-white rounded-lg hover:bg-green-600"
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default NoAuthNavbar
