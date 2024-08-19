import { Message } from '@/utils/MessageInterface'
import React from 'react'

const MessageCard = ({
  message,
  userData,
}: {
  message: Message
  userData: any
}) => {
  return (
    <div
      className={`mb-2 p-2 w-fit rounded-lg flex-col capitalize ${
        message.UserEmail === userData.email
          ? 'bg-blue-600  mr-auto'
          : 'bg-gray-800  ml-auto'
      }`}
    >
      <div className=" text-left">{message.Conversation}</div>
      <h1 className="text-sm mt-1">
        {message.UserEmail === userData.email ? userData.Name : 'Gemni AI'}
      </h1>
    </div>
  )
}

export default MessageCard
