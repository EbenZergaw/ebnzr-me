'use client'
import React from 'react'
import Link from 'next/link'
import { HiOutlineMenu } from "react-icons/hi";
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
          

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="" onClick={()=>(document.getElementById('my_modal_1')! as HTMLFormElement).showModal()}>
              <HiOutlineMenu className='text-3xl text-base-100' />
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                
                <ul tabIndex={0} className="flex flex-col items-center"> 
                    
                    <Link className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2' href='/'>
                        <GoPersonFill className='inline text-3xl'/>
                        <span className='ml-8'>About</span>
                    </Link>
                    
                    <Link className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2' 
                        href='https://github.com/EbenZergaw'
                        target='_blank'>
                        <ImGithub className='inline text-3xl'/>
                        <span className='ml-8'>Github</span>
                    </Link>
                    
                    <Link className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2' 
                        href='https://www.linkedin.com/in/ebenezer-zergabachew/' 
                        target='_blank'>
                        <ImLinkedin className='inline text-3xl'/>
                        <span className='ml-8'>LinkedIn</span>
                    </Link>
                    
                    {/* Uncomment this section if needed */}
                    {/* <Link className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2' href='/'>
                        <PiChatCircleFill className='inline text-3xl'/>
                        <span className='ml-8'>Contact</span>
                    </Link> */}
                    
                    <Link className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2' href='/posts'>
                        <IoIosDocument className='inline text-3xl'/>
                        <span className='ml-8'>Posts</span>
                    </Link>

                    <div onClick={toggleTheme} className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2'>
                      {theme == 'light' ? <BsMoonStarsFill className='inline text-3xl' /> : <RiSunFill className='inline text-3xl'/>}
                      <span className='inline text-xl ml-8'>Theme</span>
                    </div>

                  <div className="btn btn-block mt-4 text-primary"
                      onClick={() => {
                          window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                    }}>
                      Secret Sauce
                  </div>
                </ul>

                <div className="modal-action">
                  <form method="dialog float-right">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
        </span>
    </nav>
  )
}

export default Navbar