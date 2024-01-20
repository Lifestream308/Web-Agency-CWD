import React from 'react'
import { Link } from 'react-router-dom'

export default function HamburgerComponent() {
  return (
    <>
        <nav className='flex flex-wrap md:hidden'>
            <Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link>
            <Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link>
        </nav>
    </>
  )
}
