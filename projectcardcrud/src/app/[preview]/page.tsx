'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { Video } from '@/components'

const Page = () => {
    const route= useParams()
  return (
    <div>
      <h1>this user is {route.preview}</h1>


      
    </div>
  )
}

export default Page
