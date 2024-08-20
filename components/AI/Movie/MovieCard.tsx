import { Message } from '@/utils/MessageInterface'
import React from 'react'

const MovieCard = ({
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
      {isArray ? (
        <div className="flex-1">
          <div className="space-y-4">
            {message.Conversation.map((movie: any, index: number) => (
              <div
                key={index}
                className="flex flex-col  items-start bg-gray-900 p-4 rounded-lg"
              >
                {/* <img
                  src={
                    'https://static.vecteezy.com/system/resources/previews/010/286/336/original/realistic-open-movie-clapper-open-isolated-on-transparent-background-shown-slate-board-png.png'
                  }
                  alt={`${movie.Movie} Poster`}
                  className=" w-[20vw]  text-center   object-cover rounded-lg"
                /> */}

                <div className="flex-1 md:ml-4  md:mt-0">
                  <h2 className="text-xl font-semibold mb-2">{movie.Movie}</h2>
                  <p className="text-gray-400 mb-2">{movie.Description}</p>
                  <p className="font-bold mb-2">
                    Director:{' '}
                    <span className="font-normal">{movie.Director}</span>
                  </p>
                  <p className="mb-2">
                    Genre: <span className="font-normal">{movie.Genre}</span>
                  </p>
                  <p className="mb-2">
                    Release Year:{' '}
                    <span className="font-normal">{movie.ReleaseYear}</span>
                  </p>
                  <div className=" flex justify-end">
                    {/* Platform-specific Logo */}
                    {movie.Platform === 'Netflix' && (
                      <a
                        href={movie.PlatformURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-600 hover:text-red-500"
                      >
                        <img
                          src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-512.png"
                          alt="Netflix Logo"
                          className="w-20 mr-2"
                        />
                        {/* Watch on Netflix */}
                      </a>
                    )}

                    {movie.Platform === 'Prime Video' && (
                      <a
                        href={movie.PlatformURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-yellow-600 hover:text-yellow-500"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/1280px-Amazon_Prime_Video_logo.svg.png"
                          alt="Prime Video Logo"
                          className=" w-20 mr-2"
                        />
                        {/* Watch on Prime Video */}
                      </a>
                    )}
                    {/* <a
                      href={movie.WatchURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-2"
                    >
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-256/free-imdb-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-7-pack-icons-282766.png?f=webp&w=256"
                        alt="IMDb Logo"
                        className="w-20 mr-2"
                      />
                      All Details About The Movie
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>{message.Conversation}</div>
      )}

      <h1
        className={`text-sm mt-2 font-extrabold ${
          message.UserEmail === userData.email ? 'text-white' : 'text-green-300'
        }`}
      >
        {message.UserEmail === userData.email ? userData.Name : 'Gemni AI'}
      </h1>
    </div>
  )
}

export default MovieCard
