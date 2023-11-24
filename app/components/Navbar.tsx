'use client'
import React from 'react'
import Link from 'next/link'
import { FaBars } from "react-icons/fa"
import { ImGithub, ImLinkedin } from "react-icons/im";
import { GoPersonFill } from "react-icons/go";
import { PiChatCircleFill } from "react-icons/pi";
import { IoIosDocument } from "react-icons/io"
import { useTheme } from './ThemeContext';
import { BsMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";

function Navbar({}) {
  const { toggleTheme, theme } = useTheme();

  return (
    <nav className="bg-primary p-6 flex items-center justify-between">
      <Link href={'/'} passHref>
        <span className='lg:text-2xl text-base-100 font-semibold'>ebnzr.me</span>
      </Link>
      
     <div className='hidden lg:block text-base-100 text-3xl lg:text-4xl' onClick={toggleTheme}>
      {theme == 'light' ? <BsMoonStarsFill /> : <RiSunFill />}
     </div>

        <span className="block lg:hidden header-font">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="text-base-100">
                  <FaBars className='text-3xl'/>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-md w-52">
                    
                    <Link className='transition-all text-primary font-semibold text-xl my-2 inline-block' href='/'>
                        <GoPersonFill className='inline text-3xl'/>
                        <span className='ml-4'>About</span>
                    </Link>
                    <br />
                    <Link className='text-primary font-semibold text-xl my-2 inline-block' 
                        href='https://github.com/EbenZergaw'
                        target='_blank'>
                        <ImGithub className='inline text-3xl'/>
                        <span className='ml-4'>Github</span>
                    </Link>
                    <br />
                    <Link className='text-primary font-semibold text-xl my-2 inline-block' 
                        href='https://www.linkedin.com/in/ebenezer-zergabachew/' 
                        target='_blank'>
                        <ImLinkedin className='inline text-3xl'/>
                        <span className='ml-4'>LinkedIn</span>
                    </Link>
                    <br />
                    {/* <Link className='text-primary font-semibold text-xl my-2 inline-block' href='/'>
                        <PiChatCircleFill className='inline text-3xl'/>
                        <span className='ml-4'>Contact</span>
                    </Link>
                    <br /> */}
                    <Link className='text-primary font-semibold text-xl my-2 inline-block' href='/posts'>
                        <IoIosDocument className='inline text-3xl'/>
                        <span className='ml-4'>Posts</span>
                    </Link>
                    <br />

                    <div onClick={toggleTheme} className='text-primary font-semibold text-xl my-2 inline-block'>
                      {theme == 'light' ? <BsMoonStarsFill className='inline text-3xl' /> : <RiSunFill className='inline text-3xl'/>}
                      <span className='inline text-xl ml-4 font-semibold'>Theme</span>
                    </div>
                    <br />

                </ul>
            </div>
        </span>
    </nav>
  )
}

export default Navbar