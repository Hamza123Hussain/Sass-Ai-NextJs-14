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
        <div className=" text-white  p-2 flex items-center gap-2">
          <Menu />
          <h1 className=" font-bold text-xl">Quick Suggest</h1>
        </div>
      </SheetTrigger>

      <SheetContent side="left" className=" p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
