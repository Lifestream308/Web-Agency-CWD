import React from 'react'

export default function FeaturesComponent() {
  return (
    <section>
      <div className='px-[6%] flex flex-col items-center gap-8'>
        <div class="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-fuchsia-300/50">
          <h2 className='font-extrabold text-8xl text-gray-900'>Features</h2>
        </div>
        <div className='max-w-2xl text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam repudiandae ipsum necessitatibus aliquid tenetur sapiente recusandae accusantium provident magnam.</p>
        </div>
        <section className='flex justify-center'>
          <div className='p-4 w-1/3 flex flex-col gap-10'>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">speed</i>
              </div>
              <h3 className='text-2xl font-bold'>Fast Loading</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">add_a_photo</i>
              </div>
              <h3 className='text-2xl font-bold'>Optimized Photos</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">account_circle</i>
              </div>
              <h3 className='text-2xl font-bold'>Google Business Profile</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
          </div>
          <div className='p-4 w-1/3 flex flex-col gap-10'>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">home_app_logo</i>
              </div>
              <h3 className='text-2xl font-bold'>Website Logo</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">accessible_forward</i>
              </div>
              <h3 className='text-2xl font-bold'>Access</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">search</i>
              </div>
              <h3 className='text-2xl font-bold'>SEO</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
