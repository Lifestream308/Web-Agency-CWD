import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-16 px-[6%] text-blue-900'>
        <section className='flex flex-col gap-6 md:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 md:w-1/2 md:py-4'>
            <div className='h-full flex items-center'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>About Us</h2>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit sit fugiat, optio aliquid incidunt ea in eum sapiente similique culpa provident molestias obcaecati maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, placeat inventore distinctio molestias, voluptatum repellat fugiat dolores maxime libero ipsam odit in reprehenderit at veritatis?</p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2'>
            <img className='w-full h-full object-cover' src="images/stock2.jpg" alt="" />
          </div>
        </section>
        <section className='text-center'>
          <h2 className='text-5xl font-bold'>Our Team</h2>
          <h3 className='pt-6 text-xl font-semibold'>Caring & Dedicated</h3>
          <div className='pt-16 flex justify-center gap-6 flex-wrap'>
            <div className='max-w-sm'>
              <img src="/images/teacher1.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Kimberly</h3>
                <p className='pt-3 text-xl font-semibold'>Director</p>
              </div>
            </div>
            <div className='max-w-sm'>
              <img src="/images/teacher2.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Kris Ward</h3>
                <p className='pt-3 text-xl font-semibold'>Educator</p>
              </div>
            </div>
            <div className='max-w-sm'>
              <img src="/images/teacher3.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Kris Ward</h3>
                <p className='pt-3 text-xl font-semibold'>Educator</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
