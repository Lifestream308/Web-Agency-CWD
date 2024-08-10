import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function FooterComponent() {
  const location = useLocation()

  return (
    <>
        <footer className='mt-14 mb-16 flex flex-col-reverse gap-8 text-gray-900 justify-around items-center'>
          <div className='flex flex-col items-center gap-2'>
            {/* <h3>setEmail@gmail.com</h3> */}
            <div className='flex flex-col justify-center items-center'>
            <Link to='/' className=''>
              <img className='w-28 min-w-28 h-auto sm:w-32' src="images/logo2.png" alt="Company Tree Logo" />
            </Link>
            <div className='ml-4 hidden md:block'>
              <h1 className='text-2xl font-bold text-gray-900 xl:text-3xl'>Claremont Web Designs</h1>
              {/* <h2 className='font-extralight text-gray-600 text-base'>Web Agency</h2> */}
            </div>
          </div>
            <small>©{new Date().getFullYear()} by Claremont Web Designs</small>
          </div>
          <nav className='flex flex-wrap justify-center items-center'>
            <Link to='/' className={(location.pathname === '/' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>Home</Link>
            <Link to='/about' className={(location.pathname === '/about' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>About</Link>
            <Link to='/contact' className={(location.pathname === '/contact' ? 'underline' : '') + ' px-4 py-2 text-xl font-light text-gray-800 hover:underline underline-offset-8'}>Contact Us</Link>
          </nav>
        </footer>
    </>
  )
}
