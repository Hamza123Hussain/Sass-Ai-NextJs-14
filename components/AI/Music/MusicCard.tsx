import { Message } from '@/utils/MessageInterface'
import React from 'react'

const MusicCard = ({
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
          <div className="grid  gap-2 grid-cols-2">
            {message.Conversation.map((song: any, index: number) => (
              <div
                key={song.Song}
                className="music-card  border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={
                    'https://cdn-icons-png.flaticon.com/256/8873/8873119.png'
                  }
                  alt={song.Song}
                  className=" h-40 object-cover rounded-lg"
                />
                <h2 className="text-lg font-bold mt-2">{song.Song}</h2>
                <p className="text-sm font-semibold text-gray-700">
                  {song.Artist}
                </p>
                <p className="text-xs text-gray-600 italic">{song.Genre}</p>
                <p className="text-sm text-gray-800 mt-2">{song.Description}</p>
                {/* <a
                  href={song.Listen}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-blue-500 hover:underline cursor-pointer"
                >
                  <img
                    src="/Spotify.png"
                    alt="Spotify"
                    className="w-8 h-8 mt-2"
                  />
                </a> */}
              </div>
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
/**Album
"21"
(string)

Artist
"Adele"
(string)

Description
"Adele's powerful vocals and heart-wrenching lyrics perfectly capture the pain of heartbreak and loss."
(string)

Genre
"Pop"
(string)

Listen URL
"https://open.spotify.com/track/2hI9q1e0l341GOgz6L3uya"
(string)

Song Title
" */
export default MusicCard
