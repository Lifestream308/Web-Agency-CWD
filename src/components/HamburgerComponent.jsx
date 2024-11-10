import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './hamburgerAnimations.css'

export default function HamburgerComponent() {

    const location = useLocation();

    // mobile navigation menu opens and closes when hamburger button is pressed
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    const outsideClickClosesMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setMenuIsOpen(false);
        }
      }

      useEffect(() => {
        if (menuIsOpen) {
          document.addEventListener('mousedown', outsideClickClosesMenu);
        } else {
          document.removeEventListener('mousedown', outsideClickClosesMenu);
        }
        return () => {
          document.removeEventListener('mousedown', outsideClickClosesMenu);
        }
      }, [menuIsOpen])

      useEffect(() => {
        setMenuIsOpen(false)
      }, [location.pathname])

  return (
    <>
        <div ref={menuRef} className='flex lg:hidden'>
            <button className='mr-4 h-20 w-16 relative' onClick={toggleMenu} aria-label='Menu' aria-expanded={menuIsOpen} title='Menu'>
                <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 w-full absolute rounded-lg bg-gray-800/90 top-1/4 left-1/2'} ></div>
                <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 w-full absolute rounded-lg bg-gray-800/90 top-1/2 left-1/2'} ></div>
                <div className={(menuIsOpen? 'hamburgerCrossed' : 'hamburgerStacked') + ' h-2 w-full absolute rounded-lg bg-gray-800/90 top-3/4 left-1/2'} ></div>
            </button>
            <div className={(menuIsOpen? 'w-[12rem] opacity-100' : 'w-0 opacity-0') + ' pb-2 absolute flex justify-center h-fit bg-white top-28 right-0 rounded-bl-lg z-10 transition-all ease-in duration-200 overflow-hidden'}>
                <nav className='pt-6 flex flex-col gap-2 text-center'>
                    <Link to='/' className='px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200 rounded-lg'>Home</Link>
                    <Link to='/about' className='px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200 rounded-lg' href="">About</Link>
                    <Link to='/features' className='px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200 rounded-lg' href="">Features</Link>
                    <Link to='/contact' className='px-4 py-2 text-2xl font-bold text-gray-700 hover:bg-gray-200 rounded-lg' href="">Contact</Link>
                </nav>
            </div>
        </div>


    </>
  )
}
