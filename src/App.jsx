import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mt-8 px-[6%]'>
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
        <main>

        </main>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
