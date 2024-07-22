import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerComponent from './HamburgerComponent'

export default function HeaderComponent() {
  return (
    <div className='mt-2 flex flex-col gap-8 px-[6%]'>
        <header className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link to='/' className=''>
              <img className='w-28 min-w-28 h-auto sm:w-32' src="images/logo2.png" alt="Company Tree Logo" />
            </Link>
            <h1 className='text-2xl font-bold hidden text-blue-700 md:block xl:text-3xl'>Learning Time Adventures Daycare</h1>
          </div>
          <nav className='hidden flex-wrap items-center lg:flex'>
            <Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link>
            <Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link>
            <Link to='/contact' className='px-2 py-1 w-fit text-md font-bold bg-blue-700 text-white hover:bg-blue-600 shadow-sm shadow-neutral-600 rounded-lg' href="">Contact Us</Link>
          </nav>
          <HamburgerComponent />
        </header>
    </div>
  )
}
