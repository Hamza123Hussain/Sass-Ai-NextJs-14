import React from 'react'

const Loader = () => {
  return (
    <div className="bg-gray-900 justify-center items-center flex min-h-screen">
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Loader
