'use client'
import { CallAi } from '@/functions/AI/Convo/UseConvoAI'
import { UserContext } from '@/utils/Context'
import React, { useContext, useState } from 'react'

const Conversation = () => {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const { userData, setUserData } = useContext(UserContext)
  const handleSend = async () => {
    if (inputValue.trim()) {
      const Data = await CallAi(inputValue, userData.Name, userData.email)

      setInputValue('')
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="flex-1 overflow-y-auto p-4 border-b border-gray-700">
        {messages.map((message, index) => (
          <div key={index} className="mb-2 p-2 w-fit rounded-lg bg-gray-800">
            {message}
          </div>
        ))}
      </div>{' '}
      <div className=" p-2">
        <div className="p-4 border-t border-gray-700 bg-gray-800 flex gap-2 items-center rounded-lg">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            className=" p-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Conversation
