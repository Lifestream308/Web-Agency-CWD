import React from 'react'
import BGColorSectionComponent from './BGColorSectionComponent'

export default function MainSectionsComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pexels1.jpg" alt="Picture of a classroom" />
              <div className='absolute inset-0 bg-black opacity-20'></div>
              <h2 className='absolute w-4/5 font-bold text-center text-white text-3xl leading-tight top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-5xl lg:text-7xl'>Welcome to Learning Time Adventures Daycare</h2>
            </section>
            <section className='flex flex-col gap-6 md:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 md:w-1/2 md:py-4'>
                <div className='h-full items-center flex text-blue-900'>
                  <div className=''>
                    <h2 className='text-5xl text-center font-bold'>About Us</h2>
                    <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>We are a licensed CDSS home daycare. Dedicated to providing quality care for all children we serve. We focus on assisting every student in their milestone development. 
                    </p>
                    <div className="py-4 flex gap-4 justify-center">
                      <ul>
                        <li>-Phonics/Lanuage</li>
                        <li>-Sensory</li>
                        <li>-Intro to Spanish</li>
                        <li>-Intro to Chinese</li>
                        <li>-Emotional Awareness Development</li>
                      </ul>
                      <ul>
                        <li>-Math Concepts</li>
                        <li>-Music & Dance</li>
                        <li>-Science</li>
                        <li>-Art</li>
                      </ul>
                    </div>
                    <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>We also offer 8-hour day care. (full time/ part-time)
                    </p>
                    <ul className='mx-auto w-fit'>
                      <li>-Potty-training</li>
                      <li>-Indoor/outdoor environment</li>
                      <li>-Breakfast, hot lunch, am/pm snacks</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover object-left-bottom' src="images/bookreading1.jpg" alt="" />
              </div>
            </section>
            <section className='flex flex-col gap-6 md:flex-row md:max-h-[500px]'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 md:w-1/2 md:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Curriculum</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Learning Time Adventures follows a play-based Montessori inspiration curriculum. Our program offers an individual child's learning process as we all learn at our own pace.</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover' src="images/stocksmall3.jpg" alt="" />
              </div>
            </section>
          </main>
      </div>
      <BGColorSectionComponent />
    </>
  )
}
