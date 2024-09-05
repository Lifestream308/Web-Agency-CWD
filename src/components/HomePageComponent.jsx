import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function HomePageComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='mt-2 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center items-center md:gap-12'>
            <section className='min-w-[100vw] flex justify-center bg-orange-100/95'>
              <div className='px-6 py-4 max-w-[1500px] flex flex-col justify-center gap-12 lg:flex-row lg:gap-20 lg:px-32 lg:py-20'>
                <div className='ml-4 w-full lg:w-1/2 flex flex-col justify-center lg:ml-0'>
                  <h2 className='font-bold text-gray-700 text-3xl sm:text-4xl lg:text-5xl'>Boosting Local Businesses With Custom Websites</h2>
                  <h3 className='mt-6 hidden font-extralight text-neutral-600 text-base sm:block md:text-lg lg:text-2xl'>Showcase Your Services And Elevate Your Brand With An Affordable Website</h3>
                  <Link to='/contact' className='px-4 py-2 mt-6 w-fit text-xl bg-gradient-to-r from-green-600 to-green-400 text-white hover:text-gray-300 shadow-md shadow-gray-700 rounded-3xl md:text-2xl sm:mt-8' href="">Get In Touch</Link>
                </div>
                <div className='w-full lg:w-1/2'>
                  <img className='w-full h-auto rounded-lg shadow-md shadow-gray-800' width={1280} height={854} src="images/pexels1.jpg" alt="Picture of a happy woman looking at her laptop" />
                </div>
              </div>
            </section>
            <section>
              <div className='mt-12 flex flex-col items-center'>
                <h2 className='px-4 text-4xl text-center text-gray-700 leading-loose'>Stand <span className='py-5 px-2 text-white bg-gray-700 shadow-md shadow-gray-500 rounded-full'>Out</span>
                  <span className=''> From The Competition</span>
                </h2>
                <p className='mt-4 max-w-4xl text-2xl text-gray-500 text-center sm:mt-6 md:mt-8 lg:mt-12'>Your website will improve your visibility, elevate your brand's status, and guide customers through your services.</p>
              </div>
              <div className='mt-12 flex flex-col text-center gap-12 justify-center md:flex-row md:text-left'>
                <div className='flex flex-col items-center gap-3 md:items-start'>
                  <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-green-500">eyeglasses</i>
                  </div>
                  <h3 className='text-3xl'>Be Seen.</h3>
                  <p className='text-gray-500'>Show off your website in places like a Google Business Profile. Not many businesses have a real website so when customers see that you do have one that is going to make you stand out.</p>
                </div>
                <div className='flex flex-col items-center gap-3 md:items-start'>
                  <div className='px-2 py-1 w-fit border border-blue-500 shadow-md shadow-blue-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-blue-500">lock</i>
                  </div>
                  <h3 className='text-3xl'>Be Trusted.</h3>
                  <p className='text-gray-500'>A beautiful website helps establish the credibility of your business. A website can show customers your knowledge of the field and the quality they can expect when working with you.</p>
                </div>
                <div className='flex flex-col items-center gap-3 md:items-start'>
                  <div className='px-2 py-1 w-fit border border-fuchsia-400 shadow-md shadow-fuchsia-400 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-fuchsia-400">campaign</i>
                  </div>
                  <h3 className='text-3xl'>Be Heard.</h3>
                  <p className='text-gray-500'>What are your services? Who do you sell to? A professional website will answer these questions for potential customers and let them know that you are the one they're looking for.</p>
                </div>
              </div>
            </section>
            <section className='mt-12 flex flex-col gap-8 justify-center items-center text-gray-700 md:flex-row'>
              <div className='max-w-md'>
                <img loading='lazy' className='w-full h-auto rounded-lg shadow-md shadow-gray-800' src="images/payment2.webp" alt="Happy man about to make purchase on computer" />
              </div>
              <div className='max-w-xl flex flex-col gap-4'>
                <h3 className='text-5xl font-bold leading-snug'><span className='text-green-600'>$0</span> Down, Only <span className='text-green-600'>$80</span> A Month</h3>
                <div className='flex flex-col gap-4 text-2xl text-gray-600/90'>
                  <p className=''>For only $80 a month you get a standard 3-5 page small business website to showcase your services. If you need something a little different we can do a free consultation to explore solutions and discuss pricing.</p>
                  <p className=''>You own your domain and content. Cancel anytime after 6 months. No cancellation fees. No hassle.</p>
                </div>
              </div>
            </section>
            <section className='mt-12 max-w-5xl flex flex-col'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='flex flex-col gap-3 text-gray-700'>
                  <div className='px-2 py-1 w-fit border border-green-500 shadow-md shadow-green-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-green-500">cloud_upload</i>
                  </div>
                  <h3 className='text-2xl font-bold'>Hosting Fees Included</h3>
                  <p>No additional hosting fees. You pay the flat monthly subscription and we keep your website online.</p>
                </div>
                <div className='flex flex-col gap-3 text-gray-700'>
                  <div className='px-2 py-1 w-fit border border-blue-500 shadow-md shadow-blue-500 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-blue-500">http</i>
                  </div>
                  <h3 className='text-2xl font-bold'>Domain Name Included</h3>
                  <p>If you've never purchased a domain name before, we can purchase a standard domain name for you at no extra charge.</p>
                </div>
                <div className='flex flex-col gap-3 text-gray-700'>
                  <div className='px-2 py-1 w-fit border border-fuchsia-400 shadow-md shadow-fuchsia-400 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-fuchsia-400">support_agent</i>
                  </div>
                  <h3 className='text-2xl font-bold'>Real Customer Service</h3>
                  <p>Above all we strive to be friendly, helpful, and honest. Your best interests are our best interests. We grow when you grow.</p>
                </div>
                <div className='flex flex-col gap-3 text-gray-700'>
                  <div className='px-2 py-1 w-fit border border-orange-400 shadow-md shadow-orange-400 rounded-full'>
                    <i className="material-symbols-outlined text-4xl text-orange-400">edit_note</i>
                  </div>
                  <h3 className='text-2xl font-bold'>Unlimited Edits</h3>
                  <p>Products and services evolve over time. If you need something updated just let us know and we'll handle it.</p>
                </div>
              </div>
            </section>
            <section className='mt-12 flex flex-col items-center gap-4'>
              <h3 className='text-4xl text-gray-600 text-center'>Ready For Your Website?</h3>
              <div className='flex justify-center gap-8 md:gap-12'>
                <Link to='/contact' className='px-4 py-2 mt-8 w-fit text-center bg-gradient-to-r from-green-600 to-green-400 text-lg md:text-2xl text-white hover:text-gray-300 shadow-md shadow-gray-700 rounded-3xl' href="">Get In Touch</Link>
                <Link to='/features' className='px-4 py-2 mt-8 w-fit text-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 text-lg md:text-2xl text-white hover:text-gray-300 shadow-md shadow-gray-700 rounded-3xl' href="">View All Features</Link>
              </div>
            </section>
          </main>
      </div>
    </>
  )
}
