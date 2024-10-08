'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col justify-center ml-3 cursor-pointer">
      <Sun className='hidden dark:block' onClick={() => setTheme('light')}/>
      <Moon className='dark:hidden block' onClick={() => setTheme('dark')}/>
    </div>
  )
}