import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center items-center md:gap-16'>
            <section className='min-w-[100vw] flex justify-center bg-orange-100/95'>
              <div className='px-[8rem] py-[5rem] max-w-[1500px] flex justify-center'>
                <div className='w-1/2 flex flex-col justify-center'>
                  <h3 className='font-bold text-gray-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>Boosting Local Businesses With Custom Websites</h3>
                  <h3 className='mt-3 hidden font-extralight text-neutral-600 text-base sm:block md:text-lg lg:text-2xl'>Showcase Your Services And Elevate Your Brand With An Affordable Website</h3>
                  <Link to='/contact' className='px-2 py-1 mt-4 w-fit text-base font-bold bg-gradient-to-r from-blue-500 to-blue-400 text-white hover:shadow-xl hover:text-gray-200 shadow-sm shadow-neutral-600 rounded-lg sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-6' href="">Call To Action</Link>
                </div>
                <div className='w-1/2'>
                  <img className='w-full h-auto' width={1280} height={854} src="images/pexels1.jpg" alt="Picture of a happy woman looking at her laptop" />
                </div>
              </div>
            </section>
          </main>
      </div>
    </>
  )
}
