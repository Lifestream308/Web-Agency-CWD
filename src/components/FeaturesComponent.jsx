import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function FeaturesComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <section className='px-[6%] flex flex-col items-center gap-8'>
        <div className="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-fuchsia-300/50">
          <h2 className='font-extrabold text-6xl text-gray-800 md:text-8xl'>Features</h2>
        </div>
        <div className='max-w-xl text-xl text-center text-gray-600'>
          <p>Our goal is to create quality websites that we can proudly stand behind. Here are the top features that we include with every website.</p>
        </div>
        <div className='max-w-xl justify-center'>
          <img className='w-full h-auto rounded-lg shadow-gray-700 shadow-md' src="/images/website1.jpg" alt="" />
        </div>
        <div className='mt-8 p-4 max-w-4xl grid grid-cols-1 gap-14 text-center md:grid-cols-2'>
            <div className='flex flex-col items-center gap-3 text-gray-700'>
              <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">responsive_layout</i>
              </div>
              <h3 className='text-2xl font-bold'>Fully Responsive</h3>
              <p>Internet devices can take on so many sizes these days. Which is why we make sure our websites look good on all devices ranging from cell phones to tablets to desktops.</p>
            </div>
            <div className='flex flex-col items-center gap-3 text-gray-700'>
              <div className='px-2 py-1 w-fit border border-blue-500 shadow-md shadow-blue-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-blue-500">speed</i>
              </div>
              <h3 className='text-2xl font-bold'>Optimized Speed</h3>
              <p>Nobody likes a slow website. So that's why we test our websites using Google's page speed tool to analyze where we can improve the website in order to make sure that it runs like lightning.</p>
            </div>
            <div className='flex flex-col items-center gap-3 text-gray-700'>
              <div className='px-2 py-1 w-fit border border-fuchsia-500 shadow-md shadow-fuchsia-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-fuchsia-500">add_a_photo</i>
              </div>
              <h3 className='text-2xl font-bold'>Stock Photos</h3>
              <p>We search through thousands of photos to find the right look for your website. We can also prompt AI image generators to help us create unique images for your site.</p>
            </div>
            <div className='flex flex-col items-center gap-3 text-gray-700'>
              <div className='px-2 py-1 w-fit border border-orange-400 shadow-md shadow-orange-400 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-orange-400">home_app_logo</i>
              </div>
              <h3 className='text-2xl font-bold'>Website Logos</h3>
              <p>If you need help with finding a logo that represents your brand we can go over options with you to find the right type of logo for you.</p>
            </div>
        </div>
      </section>
      <section className='px-[6%] py-16 mt-16 min-h-fit relative flex justify-center items-center bg-fixed bg-cover bg-[url("/images/code1.jpg")]'>
        <div className='absolute w-full h-full bg-black/50'></div>
        <div className='text-white z-10'>
          <h3 className='text-5xl text-center font-bold'>Including</h3>
          <div className='mt-16 px-2 flex flex-wrap gap-8 justify-center text-white'>
            <div className='p-4 min-w-[20rem] max-w-[30rem] flex flex-col gap-2 backdrop-blur-sm bg-neutral-100/15 rounded-lg'>
              <div className='px-2 py-1 w-fit border border-green-500 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-green-500">accessible_forward</i>
              </div>
              <h3 className='text-2xl font-bold'>Accessibility</h3>
              <p>More than half of all Americans wear prescription glasses to help them see better. Which is part of why we follow best accessibilty practices like using contrasting colors so that people can comfortably read the website.</p>
            </div>
            <div className='p-4 min-w-[20rem] max-w-[30rem] flex flex-col gap-2 backdrop-blur-sm bg-neutral-100/15 rounded-lg'>
              <div className='px-2 py-1 w-fit border border-blue-400 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-blue-400">account_circle</i>
              </div>
              <h3 className='text-2xl font-bold'>Google Business Profile</h3>
              <p>You have to show off your website in the right spots. We can help you fill out your Google Business Profile so that your website will be displayed alongside your other information when it pops up on Google search results.</p>
            </div>
            <div className='p-4 min-w-[20rem] max-w-[30rem] flex flex-col gap-2 backdrop-blur-sm bg-neutral-100/15 rounded-lg'>
              <div className='px-2 py-1 w-fit border border-fuchsia-400 rounded-full'>
                <i className="material-symbols-outlined text-4xl text-fuchsia-400">search</i>
              </div>
              <h3 className='text-2xl font-bold'>Search Engine Optimization</h3>
              <p>More than half of all Americans wear prescription glasses to help them see better. Which is part of why we follow best accessibilty practices like using correctly contrasting colors so that people can properly view the website.</p>
            </div>
          </div>
        </div>
      </section>
      <div className='mt-20 flex justify-center'>
        <Link to='/contact' className='px-4 py-2 w-fit font-normal text-2xl bg-gradient-to-r from-green-600 to-green-400 text-white hover:text-gray-200/90 shadow-md shadow-gray-700 rounded-3xl' href="">Get In Touch</Link>
      </div>
    </>
  )
}
