import React from 'react'

export default function BGColorSectionComponent() {
  return (
    <>
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
    </>
  )
}
