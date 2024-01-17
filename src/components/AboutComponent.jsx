import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
        <section className='flex flex-col gap-6 md:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 md:w-1/2 md:py-4'>
            <div className='h-full flex items-center text-blue-900'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>About Us</h2>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <img className='w-full h-full object-cover' src="images/wix2.webp" alt="" />
          </div>
        </section>
      </div>
    </>
  )
}
