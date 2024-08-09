import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HamburgerComponent from './HamburgerComponent'

export default function HeaderComponent() {
  const location = useLocation()

  return (
    <div className='mt-2 flex flex-col gap-8 px-[6%]'>
        <header className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link to='/' className=''>
              <img className='w-28 min-w-28 h-auto sm:w-32' src="images/logo2.png" alt="Company Tree Logo" />
            </Link>
            <div className='ml-4 hidden md:block'>
              <h1 className='text-2xl font-bold text-gray-900 xl:text-3xl'>Claremont Web Designs</h1>
              {/* <h2 className='font-extralight text-gray-600 text-base'>Web Agency</h2> */}
            </div>
          </div>
          <nav className='hidden flex-wrap items-center lg:flex'>
            <Link to='/' className={(location.pathname === '/' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>Home</Link>
            <Link to='/about' className={(location.pathname === '/about' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>About</Link>
            <Link to='/contact' className={(location.pathname === '/contact' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>Contact Us</Link>
          </nav>
          <HamburgerComponent />
        </header>
    </div>
  )
}
