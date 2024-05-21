'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Sidebar from '../Sidebar'
const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className=" bg-gray-100  p-2">
          <Menu />
        </div>
      </SheetTrigger>

      <SheetContent side="left" className=" p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
