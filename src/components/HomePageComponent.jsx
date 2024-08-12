import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {
  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center items-center md:gap-16'>
            <section className='min-w-[100vw] flex justify-center bg-orange-100/95'>
              <div className='px-[8rem] py-[5rem] max-w-[1500px] flex gap-20 justify-center'>
                <div className='w-1/2 flex flex-col justify-center'>
                  <h3 className='font-bold text-gray-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl'>Boosting Local Businesses With Custom Websites</h3>
                  <h3 className='mt-6 hidden font-extralight text-neutral-600 text-base sm:block md:text-lg lg:text-2xl'>Showcase Your Services And Elevate Your Brand With An Affordable Website</h3>
                  <Link to='/contact' className='px-2 py-1 mt-6 w-fit text-base bg-gradient-to-r from-emerald-700 to-emerald-400 text-white hover:text-gray-200 shadow-sm shadow-gray-700 rounded-3xl sm:px-4 sm:py-2 sm:text-xl md:text-2xl sm:mt-8' href="">Get In Touch</Link>
                </div>
                <div className='w-1/2'>
                  <img className='w-full h-auto rounded-lg shadow-md shadow-gray-800' width={1280} height={854} src="images/pexels1.jpg" alt="Picture of a happy woman looking at her laptop" />
                </div>
              </div>
            </section>
            <section>
              <h2 className='text-6xl text-center'>Stand Out From The Competition</h2>
              <h3 className='text-2xl text-center'>Why do I need a website?</h3>
              <div className='mt-16 flex gap-16 justify-end'>
                <div>
                  <div className='px-2 py-1 w-fit border border-blue-500 shadow-sm shadow-blue-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-blue-500">eyeglasses</i>
                  </div>
                  <h3>Be Seen.</h3>
                  <p>Show off your website in places like a Google Business Profile. Not many businesses have a real website so when customers see that you do have one that is going to make you stand out.</p>
                </div>
                <div>
                  <div className='px-2 py-1 w-fit border border-green-500 shadow-sm shadow-green-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-green-500">lock</i>
                  </div>
                  <h3>Be Trusted.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nostrum magnam mollitia incidunt nesciunt hic sed impedit voluptatem, vero omnis explicabo, ut exercitationem accusantium perferendis!</p>
                </div>
                <div>
                  <div className='px-2 py-1 w-fit border border-red-500 shadow-sm shadow-red-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-red-500">campaign</i>
                  </div>
                  <h3>Be Heard.</h3>
                  <p>What are your services? Who do you sell to? A professional website will answer these questions for potential customers and let them know that you are the one they're looking for.</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className='text-6xl text-center'>Service</h2>
              <h3 className='text-2xl text-center'>What do I get?</h3>
            </section>
          </main>
      </div>
    </>
  )
}
