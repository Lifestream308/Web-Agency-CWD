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
            <h1 className='text-3xl font-bold text-blue-950'>Learning Time Adventures Daycare</h1>
          </div>
          <div className='flex'>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Home</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">About Us</a>
            <a className='px-4 py-2 text-xl font-light text-blue-800 hover:underline' href="">Contact</a>
          </div>
        </header>
        <main className='flex flex-col gap-8 justify-center'>
          <section className='relative w-full h-auto'>
            <img className='w-full h-auto' src="images/wix1.webp" alt="Picture of a classroom" />
            <div className='absolute inset-0 bg-black opacity-20'></div>
          </section>
          <section className='flex gap-8'>
            <div className='w-1/2 h-64 bg-yellow-400'></div>
            <div className='w-1/2 h-64 bg-yellow-400'></div>
          </section>
        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
