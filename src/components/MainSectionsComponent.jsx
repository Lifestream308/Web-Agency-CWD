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
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>Our Story</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>I am a proud mother of little ones, so believe me I understand all the emotions that go along with the process of picking the school that is the best fit for you and your family. Having had experience of navigating these same waters I felt the need to share access to our family style daycare here in our city of West Covina, Ca.</p>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>I have my California Teacher Permit, Pediatric CPR & First aid certification, DSP1&2 certification, I have my Associates Degree in Child Development, Bachelor's Degree in Human Development with the emphasis in Child Development and most importantly, I have over a decade experience in the child development field.</p>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>It wasn't until I became a mother that I realized not every place upholds high standards in regards to childcare and that is something that desperately needs to change. It will definitely be something we will work hard to achieve daily at Learning Time Adventures home daycare.</p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                <img className='w-full h-full object-cover object-left-bottom' src="images/teachersteph1.jpg" alt="" />
              </div>
            </section>
            <section className='flex flex-col gap-6 md:flex-row md:max-h-[500px]'>
              <div className='py-10 w-full bg-gradient-to-b from-blue-50 via-blue-50 to-blue-200 md:w-1/2 md:py-4'>
                <div className='h-full flex items-center text-blue-900'>
                  <div className='text-center'>
                      <h2 className='text-5xl font-bold'>About Us</h2>
                      <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Becoming a mother changed the way I viewed life. I became aware of the lack of childcare standards being provided to children and inspired the need to open up my own home daycare. Safety, kindness and education are our priorities. Experiences have taught me that not only do I need to educate my own children but share our same principles to our community searching for the care their families deserve.
</p>
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
