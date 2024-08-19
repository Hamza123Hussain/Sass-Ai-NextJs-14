import React, { useState } from 'react'

import MobileSideBar from './MobileSidebar/MobileSideBar'

const Navbar = () => {
  return (
    <div className=" flex items-center p-2 md:hidden">
      <MobileSideBar />
    </div>
  )
}

export default Navbar
