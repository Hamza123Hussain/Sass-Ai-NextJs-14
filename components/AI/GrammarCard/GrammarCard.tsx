import { Message } from '@/utils/MessageInterface'
import React from 'react'

const GrammarCard = ({
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
      className={`mb-4 p-4 w-full rounded-lg flex flex-col ${
        message.UserEmail === userData.email
          ? 'bg-blue-600 text-white'
          : 'bg-gray-800 text-white'
      }`}
    >
      <div className="flex flex-col space-y-4">
        {isArray ? (
          <>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">Revised Content</h2>
              <p className="bg-gray-900 p-2 rounded">
                {message.Conversation[0].RevisedContent}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">Clarity</h2>
              <p className="bg-gray-900 p-2 rounded">
                {message.Conversation[0].Clarity}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">Formatting</h2>
              <p className="bg-gray-900 p-2 rounded">
                {message.Conversation[0].Formatting}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <h2 className="text-lg font-semibold">Grammar</h2>
              <p className="bg-gray-900 p-2 rounded">
                {message.Conversation[0].Grammar}
              </p>
            </div>
          </>
        ) : (
          <div className="rounded-lg">{message.Conversation}</div>
        )}
      </div>
      <h1
        className={`text-sm mt-4 font-extrabold ${
          message.UserEmail === userData.email ? 'text-white' : 'text-green-300'
        }`}
      >
        {message.UserEmail === userData.email ? userData.Name : 'Gemni AI'}
      </h1>
    </div>
  )
}

export default GrammarCard
