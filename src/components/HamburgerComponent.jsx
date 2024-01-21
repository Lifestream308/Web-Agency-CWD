import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import './navbar.css'

export default function HamburgerComponent() {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

  return (
    <>
        <div className='flex md:hidden'>
            <nav className='h-20 p-4'>
                <div className="burger-menu h-full w-16 flex flex-col justify-between cursor-pointer" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>
            <div className={menu_class}></div>
        </div>

        {/* <nav className='flex flex-wrap md:hidden'>
            <Link to='/' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline'>Home</Link>
            <Link to='/about' className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About</Link>
        </nav> */}
    </>
  )
}
