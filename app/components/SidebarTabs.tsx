'use client'
import React from 'react'
import Link from 'next/link'
import { ImGithub, ImLinkedin } from "react-icons/im";
import { GoPersonFill } from "react-icons/go";
import { usePathname } from 'next/navigation';

function SidebarTabs() {
    const pathname = usePathname()

  return (
    <>
        <Link className={`transition-all text-neutral font-bold text-xl my-2 inline-block hover:text-primary ${pathname == '/' ? 'text-primary' : ''}`} href='/'>
            <GoPersonFill className='inline text-3xl'/>
            <span className='ml-4'>About</span>
        </Link>
        <br />
        <Link className='transition-all text-neutral font-bold text-xl my-2 inline-block hover:text-primary' 
            href='https://github.com/EbenZergaw'
            target='_blank'>
            <ImGithub className='inline text-3xl'/>
            <span className='ml-4'>Github</span>
        </Link>
        <br />
        <Link className='transition-all text-neutral font-bold text-xl my-2 inline-block hover:text-primary' 
            href='https://www.linkedin.com/in/ebenezer-zergabachew/' 
            target='_blank'>
            <ImLinkedin className='inline text-3xl'/>
            <span className='ml-4'>LinkedIn</span>
        </Link>
    </>
  )
}

export default SidebarTabs