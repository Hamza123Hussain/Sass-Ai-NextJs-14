import { SignOut } from '@/functions/AUTH/SignOut'
import { UserContext } from '@/utils/Context'
import React, { useContext } from 'react'

const ShowingUser = () => {
  const { userData, setUserData } = useContext(UserContext)
  const ByeBye = async () => {
    const Data = await SignOut()
    if (Data) {
      setUserData(null)
    }
  }
  return (
    <div className=" flex flex-col items-center gap-2">
      <div className=" flex gap-2 items-center">
        {/* <img
          src="https://www.hindustantimes.com/web-stories/hania-aamirs-note-worthy-ethnic-looks-_NIQlE3VcFMqP0zB05EX/assets/20.jpeg"
          width={20}
          height={20}
          className=" rounded-full"
          alt="image"
        /> */}
        <h1 className=" font-bold text-sm">{userData.Name} </h1>
      </div>
      <button
        onClick={ByeBye}
        className=" px-1 gap-2 bg-red-500 text-black rounded-lg"
      >
        Sign Out
      </button>
    </div>
  )
}

export default ShowingUser
