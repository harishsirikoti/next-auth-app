import React from 'react'
import { ModeToggle } from './toggle_theme'
import SignOut from '@/components/signout_button'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between shadow-lg p-1">
        <div className="text-2xl font-bold mx-4 text-amber-400">Company Logo</div>
        <div className='flex gap-2 items-center'>
        <SignOut />
        <ModeToggle />
        </div>
    </div>
  )
}

export default Navbar