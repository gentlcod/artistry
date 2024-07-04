import React from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <header className='w-full flex justify-between items-center bg-primary sm:px-8 px-4 border-b border-primary'>
    <Link to='/home'>
      <img
        src={logo}
        alt='logo'
        height={50}
        width={125}
      />
    </Link>

    {/* <div className='lg:mr-[-700px] md:mr-[-300px] sm:mr-[-300px] mr-[-135px]'>
    </div> */}

    <div className='flex items-center gap-2'>
    <ThemeToggle />
    <Link
      to='/create-post'
      className='font-inter font-medium bg-[#4583e7] text-white px-4 py-2 rounded-md'
    >
      Create
    </Link>
      

    </div>

   
  </header>
  )
}

export default Navbar