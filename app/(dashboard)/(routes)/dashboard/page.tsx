import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      I am CONTNENT
      <Button value={'hello'} variant={'destructive'} />
    </div>
  )
}

export default page
