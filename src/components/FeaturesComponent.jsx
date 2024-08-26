import React from 'react'

export default function FeaturesComponent() {
  return (
    <section>
      <div className='px-[6%] flex flex-col items-center gap-8'>
        <div class="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-fuchsia-300/50">
          <h2 className='font-extrabold text-8xl text-gray-800'>Features</h2>
        </div>
        <div className='max-w-xl text-xl text-center text-gray-600'>
          <p>Our goal is to create quality websites that we can proudly stand behind. Here are the top features that we include with every website.</p>
        </div>
        <section className='flex justify-center'>
          <div className='p-4 w-1/3 flex flex-col gap-10'>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">speed</i>
              </div>
              <h3 className='text-2xl font-bold'>Fully Responsive</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">speed</i>
              </div>
              <h3 className='text-2xl font-bold'>Optimized Speed</h3>
              <p>Nobody likes a slow website. So that's why we test our websites using Google's page speed tool to analyze where we can improve the website in order to make sure that it runs efficiently.</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">add_a_photo</i>
              </div>
              <h3 className='text-2xl font-bold'>Stock Photos</h3>
              <p>We search through thousands of photos to find the right look for your website. We can also prompt AI image generators to help us create unique images for your site.</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">account_circle</i>
              </div>
              <h3 className='text-2xl font-bold'>Google Business Profile</h3>
              <p>You have to show off your website in the right spots. We can help you fill out your Google Business Profile so that your website will be displayed alongside your other information when it pops up on Google search results.</p>
            </div>
          </div>
          <div className='p-4 w-1/3 flex flex-col gap-10'>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">home_app_logo</i>
              </div>
              <h3 className='text-2xl font-bold'>Website Logos</h3>
              <p>If you need help with finding a logo that represents your brand we can go over options with you to find the right type of logo for you.</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">accessible_forward</i>
              </div>
              <h3 className='text-2xl font-bold'>Accessibility</h3>
              <p>More than half of all Americans wear prescription glasses to help them see better. Which is part of why we follow best accessibilty practices like using correctly contrasting colors so that people can properly view the website.</p>
            </div>
            <div className='flex flex-col text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">search</i>
              </div>
              <h3 className='text-2xl font-bold'>Search Engine Optimization</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum nihil omnis suscipit culpa veniam!</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
