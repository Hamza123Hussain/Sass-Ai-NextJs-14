'use client'
import { LoginUser } from '@/functions/AUTH/LoginUser'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
const SignIn = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()
  const { setUserData } = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const HandleLogin = async () => {
    const Data = await LoginUser(inputVal)
    if (Data) {
      setUserData(Data)
      console.log('USER DATA ', Data)
      Router.push('/')
    }
  }
  return (
    <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg  mx-auto ">
      <h2 className="text-3xl font-semibold text-white mb-6">Sign In</h2>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-4 p-3 w-80 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-4 p-3 w-80 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
      />
      <button
        onClick={HandleLogin}
        className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-2 rounded transition-all w-80"
      >
        Sign In
      </button>
      <div
        className=" flex justify-end text-white mt-1 hover:text-blue-900 cursor-pointer"
        onClick={() => Router.push('/forgotpass')}
      >
        <span className=" text-[10px]">Forgot Your Password?</span>
      </div>
      <h6 className="text-xs mt-4 text-gray-400 text-center">
        Don’t Have An Account?{' '}
        <span
          onClick={() => Router.push('/signup')}
          className="underline cursor-pointer text-green-300 hover:text-green-200"
        >
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default SignIn
