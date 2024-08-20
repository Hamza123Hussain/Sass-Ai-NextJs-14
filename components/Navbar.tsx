import React, { useState } from 'react'

import MobileSideBar from './MobileSidebar/MobileSideBar'

const Navbar = () => {
  return (
    <div className=" flex items-center p-2 bg-slate-900 border-b-2  border-slate-700 ">
      <MobileSideBar />
    </div>
  )
}

export default Navbar
