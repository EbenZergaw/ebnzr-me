'use client'
import React from 'react'


function Footer() {
  return (
    <footer className='footer p-2 bg-base-100'>
        <div className="text-primary text-xs"
            onClick={() => {
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        }}>
            Click for my SSN, Bank Details, and More
        </div>
    </footer>
  )
}

export default Footer