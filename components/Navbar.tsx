import React from 'react'
import Link from 'next/link'
import ThemeToggle from './theme/theme-toggle'

function Navbar() {

  return (
    <div className='w-full lg:flex lg:items-center mt-4 z-0 chakra text-xl !font-extralight'>

        <div className='lg:w-[60%] lg:flex lg:items-center lg:justify-around'>
            <Link href={'/'}>About</Link>
            <Link href={'/projects'}>Projects</Link>
            <Link href={'/blog'}>Blog</Link>
        </div>

        <div className="float-right lg:absolute lg:right-10">
            <ThemeToggle></ThemeToggle>
        </div>
    </div>
  )
}

export default Navbar