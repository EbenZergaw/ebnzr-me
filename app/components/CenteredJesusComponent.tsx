'use client'
import React from 'react'
import jesus from '../../public/images/jesus.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function CenteredJesusComponent() {
    const pathname = usePathname()
    if(pathname == '/'){

        return (
        <section className="w-9/12 mt-24 mx-auto">
            <h2 className='text-3xl text-primary font-semibold'>...and Christianity</h2>
            <Image className='lg:w-1/3 mt-10 mx-auto' src={jesus}></Image>
        </section>
        )
    } else {
        return ''
    }
}

export default CenteredJesusComponent