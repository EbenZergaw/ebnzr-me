'use client'
import {useEffect, useState, useRef} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
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
  const [mobileNavbarView, setMobileNavbarView] = useState(false);
  const pathname = usePathname()

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event:any) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setMobileNavbarView(false); // Close the modal
      }
    }

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Step 3: Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, [setMobileNavbarView]);

  useEffect(() => {
    if (mobileNavbarView) {
      document.querySelector('section')?.classList.add('blur')
    } else {
      document.querySelector('section')?.classList.remove('blur')
    }

    // Clean up
    return () => {
      document.body.classList.remove('blur');
    };
  }, [mobileNavbarView]);

  useEffect(() => {
    setMobileNavbarView(false)
  }, [pathname])


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
            <button className="" onClick={() => {
                setMobileNavbarView(!mobileNavbarView);
              }}>
              <HiOutlineMenu className='text-3xl text-base-100' />
            </button>
            
        </span>
        <div id="modal" 
          ref={modalRef}
          className={`fixed rounded-md left-0 right-0 top-40 mx-auto w-11/12 border border-primary ${mobileNavbarView ? 'block' : 'hidden'}`}>
          <div className="bg-base-100 rounded-md pt-6">
            
            <ul tabIndex={0} className="flex flex-col items-center"> 
                
                <Link className={`transition-all font-medium justify-between w-1/2 text-xl my-2 text-primary`} href='/'>
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
                
                <Link className={`transition-all font-medium justify-between w-1/2 text-xl my-2 text-primary`} href='/posts'>
                    <IoIosDocument className='inline text-3xl'/>
                    <span className='ml-8'>Posts</span>
                </Link>

                <div onClick={toggleTheme} className='transition-all text-primary font-medium justify-between w-1/2 text-xl my-2'>
                  {theme == 'light' ? <BsMoonStarsFill className='inline text-3xl' /> : <RiSunFill className='inline text-3xl'/>}
                  <span className='inline text-xl ml-8'>Theme</span>
                </div>

              <div className="mx-auto my-6 text-primary"
                  onClick={() => {
                      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                }}>
                  Secret Sauce
              </div>
            </ul>

            <div className="">
                <button className="btn btn-block" onClick={() => {
                  setMobileNavbarView(!mobileNavbarView);
                }}>Close</button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar