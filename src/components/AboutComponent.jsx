import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <div className='flex flex-col items-center gap-8'>
        <div class="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-red-400/80">
          <h2 className='font-extrabold text-8xl text-gray-900'>About Us</h2>
        </div>
        <div className='max-w-2xl text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam repudiandae ipsum necessitatibus aliquid tenetur sapiente recusandae accusantium provident magnam.</p>
        </div>
        <div className='flex gap-8'>
          <div className='p-4 w-1/2'>
            <img className='rounded-lg' src="images/pexels1.jpg" alt="" />
          </div>
          <div className='p-4 w-1/2 flex flex-col gap-10'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est quos dolorem quaerat voluptates in repudiandae cupiditate atque perspiciatis accusamus nihil ex eligendi eum, reiciendis illum at blanditiis aspernatur? Libero!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est quos dolorem quaerat voluptates in repudiandae cupiditate atque perspiciatis accusamus nihil ex eligendi eum, reiciendis illum at blanditiis aspernatur? Libero!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero est quos dolorem quaerat voluptates in repudiandae cupiditate atque perspiciatis accusamus nihil ex eligendi eum, reiciendis illum at blanditiis aspernatur? Libero!</p>
          </div>
        </div>
      </div>
    </>
  )
}
