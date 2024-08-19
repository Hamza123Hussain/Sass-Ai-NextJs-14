import { Message } from '@/utils/MessageInterface'
import React from 'react'

interface UserData {
  email: string
  Name: string
}

interface MessageCardProps {
  message: Message
  userData: UserData
}

const MessageCard: React.FC<MessageCardProps> = ({ message, userData }) => {
  // Check if conversation is an array
  const isArray = Array.isArray(message.Conversation)

  // Format the display content
  const displayContent: string[][] = isArray
    ? (message.Conversation as string[]).reduce<string[][]>(
        (lines, hashtag, index) => {
          // Determine line number based on index
          const lineIndex = Math.floor(index / 5)
          if (!lines[lineIndex]) lines[lineIndex] = []
          lines[lineIndex].push(hashtag)
          return lines
        },
        []
      )
    : [[message.Conversation]]

  return (
    <div
      className={`mb-2 p-2 w-fit rounded-lg flex-col capitalize ${
        message.UserEmail === userData.email
          ? 'bg-blue-600  mr-auto'
          : 'bg-gray-800  ml-auto'
      }`}
    >
      <div className="text-left w-fit">
        {displayContent.map((line, lineIndex) => (
          <div key={lineIndex} className="mb-1">
            {Array.isArray(line) ? line.join(' ') : line}
          </div>
        ))}
      </div>
      <h1 className="text-sm mt-1">
        {message.UserEmail === userData.email ? userData.Name : 'Gemni AI'}
      </h1>
    </div>
  )
}

export default MessageCard
