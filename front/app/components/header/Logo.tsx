import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='relative w-50 h-15'>
      <Image src={"/logo/ChatGPT.png"} alt='logo' fill className='object-contain' /> 
    </div>
  )
}

export default Logo
