import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function FooterComponent() {
  const location = useLocation()

  return (
    <>
        <footer className='mt-14 mb-16 flex flex-wrap gap-8 text-gray-900 justify-around items-center'>
          <div className='flex flex-col-reverse gap-2'>
            <h3>setEmail@gmail.com</h3>
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
