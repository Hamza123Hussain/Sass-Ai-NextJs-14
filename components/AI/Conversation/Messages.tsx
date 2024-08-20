import { Message } from '@/utils/MessageInterface'
import React from 'react'

const MessageCard = ({
  message,
  userData,
}: {
  message: Message
  userData: any
}) => {
  // Check if the conversation is an array
  const isArray = Array.isArray(message.Conversation)

  return (
    <div
      className={`mb-2 p-2 w-fit rounded-lg flex-col capitalize ${
        message.UserEmail === userData.email
          ? 'bg-blue-600  mr-auto'
          : 'bg-gray-800  ml-auto'
      }`}
    >
      <div className="text-left w-fit">
        {isArray ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {message.Conversation.map((element: string, index: number) => (
              <div key={index}>{element}</div>
            ))}
          </div>
        ) : (
          <div>{message.Conversation}</div>
        )}
      </div>
      <h1
        className={`text-sm mt-1 font-extrabold ${
          message.UserEmail === userData.email ? 'bg-white' : 'bg-green-400'
        }  text-transparent bg-clip-text`}
      >
        {message.UserEmail === userData.email ? userData.Name : 'Gemni AI'}
      </h1>
    </div>
  )
}

export default MessageCard
