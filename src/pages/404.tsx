import Link from 'next/link'
import React from 'react'

const Error404 = () => {
  return (
    <div className='text-center mt-[20%] border-r border-l flex flex-col gap-[-10px]'>
      <h1 className='text-3xl'>404</h1> 
      <Link href="/">Home</Link>
    </div>
  )
}

export default Error404