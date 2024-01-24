import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerComponent from './HamburgerComponent'

export default function HeaderComponent() {
  return (
    <div className='mt-8 flex flex-col gap-8 px-[6%]'>
        <header className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='w-36 min-w-32 h-auto' src="images/adventurelearningtime.png" alt="Company Tree Logo" />
            <h1 className='text-2xl font-bold hidden text-blue-700 md:block xl:text-3xl'>Learning Time Adventures Daycare</h1>
          </div>
          <nav className='hidden flex-wrap lg:flex'>
            <Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link>
            <Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link>
            <Link to='/contact' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Contact</Link>
          </nav>
          <HamburgerComponent />
        </header>
    </div>
  )
}
