import React from 'react'

export default function ContactComponent() {
  return (
    <>
        <div className='mt-8 flex flex-col gap-8 px-[6%]'>
            <section className='flex flex-col gap-6 md:flex-row'>
                <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 md:w-1/2 md:py-4'>
                    <div className='h-full justify-center items-center flex text-blue-900'>
                        <div className='flex flex-col gap-6 items-center text-center'>
                            <h2 className='px-2 text-5xl font-bold'>Opening Hours</h2>
                            <p className='text-xl font-semibold'>LearningTimeAdventuresDaycare@gmail.com</p>
                            <p className='text-xl font-semibold'>(626)-123-4567</p>
                            <p className='text-xl font-semibold'>Mon-Fri: 8am-5pm</p>
                            <p className='text-xl font-semibold'>Sat-Sun: Closed</p>
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
