import React, { useState } from 'react'

import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './MobileSidebar/MobileSideBar'

const Navbar = () => {
  return (
    <div className=" flex items-center p-2">
      <MobileSideBar />
      <div className=" flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
