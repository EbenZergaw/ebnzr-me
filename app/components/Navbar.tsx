import React from 'react'
import Link from 'next/link'
import { BsThreeDots } from "react-icons/bs"
import { ImGithub, ImLinkedin } from "react-icons/im";
import { GoPersonFill } from "react-icons/go";
import { PiChatCircleFill } from "react-icons/pi";

function Navbar() {

  return (
    <div className="bg-primary p-6 flex items-center justify-between">
      <Link href={'/'} passHref>
        <h1 className='lg:text-2xl text-base-100 font-semibold'>Ebenezer Zergabachew</h1>
      </Link>
      <div className="hidden lg:w-1/4 lg:float-right lg:block">
        
      </div>

        <span className="block lg:hidden">
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="text-base-100">
                  <BsThreeDots className='text-3xl'/>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow bg-neutral rounded-box w-52">
                    
                  <Link className='transition-all text-secondary font-bold text-xl my-2 inline-block hover:text-primary' href='/'>
                        <GoPersonFill className='inline text-3xl'/>
                        <span className='ml-4'>About</span>
                    </Link>
                    <br />
                    <Link className='transition-all text-secondary font-bold text-xl my-2 inline-block hover:text-primary' 
                        href='https://github.com/EbenZergaw'
                        target='_blank'>
                        <ImGithub className='inline text-3xl'/>
                        <span className='ml-4'>Github</span>
                    </Link>
                    <br />
                    <Link className='transition-all text-secondary font-bold text-xl my-2 inline-block hover:text-primary' 
                        href='https://www.linkedin.com/in/ebenezer-zergabachew/' 
                        target='_blank'>
                        <ImLinkedin className='inline text-3xl'/>
                        <span className='ml-4'>LinkedIn</span>
                    </Link>
                    <br />
                    <Link className='transition-all text-secondary font-bold text-xl my-2 inline-block hover:text-primary' href='/'>
                        <PiChatCircleFill className='inline text-3xl'/>
                        <span className='ml-4'>Contact</span>
                    </Link>
                    <br />
                </ul>
            </div>
        </span>
    </div>
  )
}

export default Navbar