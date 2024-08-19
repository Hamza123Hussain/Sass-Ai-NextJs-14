import { SignOut } from '@/functions/AUTH/SignOut'
import { UserContext } from '@/utils/Context'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

const UserDropDown = ({ setDropdownOpen }: { setDropdownOpen: any }) => {
  const { setUserData } = useContext(UserContext)
  const Router = useRouter()
  const ByeBye = async () => {
    try {
      const Data = await SignOut()
      if (Data) {
        setUserData('')
        Router.push('/login')
      }
    } catch (error) {
      console.log('ERROR IN FUNCTION', error)
    }
  }
  return (
    <div
      onMouseLeave={() => setDropdownOpen(false)}
      className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded-lg z-10"
    >
      <Link
        href="/DashBoard"
        className="block px-4 py-2 text-sm hover:bg-gray-100"
      >
        My Blogs
      </Link>
      <button
        onClick={ByeBye}
        className="w-full text-left block px-4 py-2 text-sm bg-red-500 text-black hover:bg-gray-100"
      >
        Sign Out
      </button>
    </div>
  )
}

export default UserDropDown
