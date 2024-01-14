import React from 'react'

export default function HeaderComponent() {
  return (
    <>
        <header className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img className='w-36 h-auto' src="images/adventurelearningtime.png" alt="Company Tree Logo" />
            <h1 className='text-3xl font-bold text-blue-700'>Learning Time Adventures Daycare</h1>
          </div>
          <div className='flex'>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Home</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About Us</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Contact</a>
          </div>
        </header>
    </>
  )
}
