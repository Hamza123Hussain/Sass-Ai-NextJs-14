import React from 'react'
import { FaRegSmile } from 'react-icons/fa'

const Nomessages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
      <FaRegSmile size={40} />
      <p className="mt-2 text-center">
        No messages yet. Start the conversation!
      </p>
    </div>
  )
}

export default Nomessages
