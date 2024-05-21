import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button value={'hello'} variant={'destructive'} />

      <UserButton />
    </div>
  )
}

export default page
