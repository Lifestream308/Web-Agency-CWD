import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './hamburgerAnimations.css'

export default function HamburgerComponent() {

    // mobile navigation menu opens and closes when hamburger button is pressed
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

  return (
    <>
        <div className='flex lg:hidden'>
            <nav className='h-20 p-4'>
                <div className='h-full w-16 flex flex-col justify-between cursor-pointer' onClick={toggleMenu}>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 rounded-lg bg-blue-800'} ></div>
                </div>
            </nav>
            <div className={(menuIsOpen? 'w-[14rem] opacity-100' : 'w-0 opacity-0') + ' absolute flex justify-center h-72 bg-white top-32 right-0 rounded-bl-lg z-10 transition-all ease-in duration-200 overflow-hidden'}>
                <nav className='pt-6 flex flex-col gap-2 text-center'>
                    <Link to='/' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg'>Home</Link>
                    <Link to='/about' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">About</Link>
                    <Link to='/contact' className='px-4 py-2 text-2xl font-bold text-blue-800 hover:bg-gray-200 rounded-lg' href="">Contact</Link>
                </nav>
            </div>
        </div>


    </>
  )
}
