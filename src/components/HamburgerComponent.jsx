import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'

export default function HamburgerComponent() {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hiden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visibl")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hiden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <>
        <div className='flex md:hidden'>
            <nav className='h-20 p-4'>
                <div className="burger-menu h-full w-16 flex flex-col justify-between cursor-pointer" onClick={updateMenu}>
                    <div className={burger_class + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={burger_class + ' h-2 rounded-lg bg-blue-800'} ></div>
                    <div className={burger_class + ' h-2 rounded-lg bg-blue-800'} ></div>
                </div>
            </nav>
            <div className={menu_class + ' absolute h-72 bg-white top-32 right-0 rounded-bl-lg z-10 transition-all ease-in duration-200'}></div>
        </div>

        {/* <nav className='flex flex-wrap md:hidden'>
            <Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link>
            <Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link>
        </nav> */}
    </>
  )
}
