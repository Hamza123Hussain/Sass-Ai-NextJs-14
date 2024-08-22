'use client'
import React, { useContext, useState } from 'react'
import MessageCard from '@/components/AI/Conversation/Messages'
import Loader from '@/components/Loader'
import { UserContext } from '@/utils/Context'
import { Message } from '@/utils/MessageInterface'
import Nomessages from '@/components/AI/Conversation/Nomessages'
const Conversation = () => {
  const [inputValue, setInputValue] = useState('')
  const { userData, loading, messages, handleSend } = useContext(UserContext)
  if (loading) return <Loader />
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white gap-3">
      <div className="flex-1 overflow-y-auto p-4 border-b border-gray-700 flex flex-col gap-2">
        {messages.length === 0 ? (
          <Nomessages />
        ) : (
          messages.map((message: Message) => (
            <MessageCard
              key={message.MessageID}
              message={message}
              userData={userData}
            />
          ))
        )}
      </div>
      <div className="p-2">
        <div className="p-4 border-t border-gray-700 bg-gray-800 flex gap-2 items-center rounded-lg">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message to have a conversation"
            className="flex-1 p-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleSend(inputValue, setInputValue)}
            className="p-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
export default Conversation
