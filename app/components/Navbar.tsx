import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="bg-primary p-6 flex items-center justify-between">
      <Link href={'/'} passHref>
        <h1 className='text-2xl text-base-100 font-semibold'>Ebenezer Zergabachew</h1>
      </Link>
      <div className=" w-1/4 float-right">
        <Link className='mx-10 text-base-100' href={'/'}>About</Link>
        <Link className='mx-10 text-base-100' href={'/'}>Posts</Link>
        <Link className='mx-10 text-base-100' href={'/'}>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar