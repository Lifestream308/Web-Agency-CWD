import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
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
        <main className='flex flex-col gap-16 justify-center'>
          <section className='relative w-full h-auto'>
            <img className='w-full h-auto' src="images/wix1.webp" alt="Picture of a classroom" />
            <div className='absolute inset-0 bg-black opacity-20'></div>
            <h2 className='absolute w-[50rem] font-bold text-center text-white text-7xl leading-tight top-[36%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Welcome to Learning Time Adventures Daycare</h2>
          </section>
          <section className='flex gap-6'>
            <div className='relative w-1/2 bg-gradient-to-b from-orange-200 via-yellow-200 to-yellow-300'>
              <div>
                <h2>Our Story</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
              </div>
            </div>
            <div className='w-1/2 bg-yellow-400'>
              <img className='w-full h-auto' src="images/wix2.webp" alt="" />
            </div>
          </section>
        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
