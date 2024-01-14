// import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

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
            <div className='relative w-1/2 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
              <div className='absolute flex flex-col gap-4 top-1/4 text-blue-900 text-center'>
                <h2 className='text-5xl font-bold'>Our Story</h2>
                <p className='mx-auto w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
              </div>
            </div>
            <div className='w-1/2'>
              <img className='w-full h-auto' src="images/wix2.webp" alt="" />
            </div>
          </section>
          <section className='flex gap-6'>
            <div className='relative w-1/2 bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200'>
              <div className='absolute flex flex-col gap-4 top-1/4 text-blue-900 text-center'>
                <h2 className='text-5xl font-bold'>About Us</h2>
                <p className='mx-auto w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
              </div>
            </div>
            <div className='w-1/2'>
              <img className='w-full h-auto' src="images/wix2.webp" alt="" />
            </div>
          </section>
        </main>
      </div>
      <section className='mt-16 bg-amber-200'>
        <div className='flex gap-6 px-[12%] py-24'>
          <div className='relative flex justify-center w-1/2'>
            <div class="absolute w-full h-full bg-blue-500 transform -translate-x-6 translate-y-6"></div>
            <img className='w-full h-auto z-10' src="images/wix2.webp" alt="" />
          </div>
          <div className='flex flex-col px-1 justify-center gap-4 w-1/2 text-blue-800 text-center'>
            <h2 className='text-5xl font-bold'>Family Business</h2>
            <h3 className='text-2xl font-semibold'>Outstanding Quality</h3>
            <p className='text-lg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corrupti, vitae est eum praesentium reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus officiis ea eum reiciendis. Accusantium maxime doloribus atque ab vitae dignissimos?</p>
          </div>
        </div>
      </section>
      <footer className='flex flex-col mt-14 mb-16 gap-8 text-blue-900 text-center'>
        <h3>LearningTimeAdventuresDaycare@gmail.com</h3>
        <small>©2024 by Learning Time Adventures Daycare</small>
      </footer>
    </>
  )
}

export default App
