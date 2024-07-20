import React from 'react'
import BGColorSectionComponent from './BGColorSectionComponent'
import { Link } from 'react-router-dom'

export default function MainSectionsComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-8 px-[6%]'>
          <main className='flex flex-col gap-6 justify-center md:gap-16'>
            <section className='relative w-full h-auto'>
              <img className='w-full h-auto' src="images/pexels1.jpg" alt="Picture of a classroom" />
              <div className='absolute inset-0 bg-black opacity-20'></div>
              <div className='absolute flex flex-col items-center text-center top-[14%]'>
                <h2 className='w-4/5 font-bold text-white text-3xl leading-tight sm:text-5xl lg:text-7xl'>Welcome to Learning Time Adventures Daycare</h2>
                <Link to='/contact' className='px-4 py-2 mt-16 w-fit text-2xl font-bold bg-blue-700 text-white hover:bg-blue-600 shadow-lg rounded-lg' href="">Contact Us</Link>
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
                <div className='h-full items-center flex text-blue-900'>
                  <div className=''>
                    <h2 className='text-5xl text-center font-bold'>About Us</h2>
                    <p className='mx-auto text-center pt-4 w-4/5 text-xl font-light leading-normal'>We are a licensed CDSS home daycare. Dedicated to providing quality care for all children we serve. We focus on assisting every student in their milestone development. 
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img className='w-full h-full object-cover' src="images/bookreading1.jpg" alt="" />
              </div>
            </section>
            <section className='flex flex-col gap-6 lg:flex-row'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 lg:w-1/2 lg:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Curriculum</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Learning Time Adventures follows a RIE/Reggio inspired, Play-based guided with Montessori practices.</p>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Daily activities include but not limited to Phonics/Language, Intro to Spanish, Intro to Chinese, Emotional Awareness Development, Math Concepts,   science, gardening, Indoor/Outdoor environment, gross & fine motor skills, Arts & crafts, Sensory, music & movement, Dramatic play and more!</p>
                  </div>
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <img className='w-full h-full object-cover' src="images/stocksmall3.jpg" alt="" />
              </div>
            </section>
          </main>
      </div>
      <BGColorSectionComponent />
    </>
  )
}
