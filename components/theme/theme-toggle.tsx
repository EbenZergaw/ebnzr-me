'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col justify-center lg:ml-3 cursor-pointer " onClick={() => {
      if(theme == 'dark'){
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }}>
      {
        theme == 'dark' ? <Sun className=''/> : <Moon className=''/>
      }
    </div>
  )
}