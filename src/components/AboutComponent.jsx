import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <div className='mt-8 flex flex-col gap-16 px-[6%] text-blue-900'>
        <section className='flex flex-col gap-6 lg:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-zinc-50 via-zinc-100 to-zinc-200 lg:w-1/2 lg:py-4'>
            <div className='h-full flex items-center'>
              <div className='text-center'>
                  <h2 className='text-5xl font-bold'>Our Story</h2>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>I am a proud mother of little ones, so believe me I understand all the emotions that go along with the process of picking the school that is the best fit for you and your family. Having had experience of navigating these same waters I felt the need to share access to our family style daycare here in our city of West Covina, Ca.</p>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>I have my California Teacher Permit, Pediatric CPR & First aid certification, DSP1&2 certification, I have my Associates Degree in Child Development, Bachelor's Degree in Human Development with the emphasis in Child Development and most importantly, I have over a decade experience in the child development field.</p>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>It wasn't until I became a mother that I realized not every place upholds high standards in regards to childcare and that is something that desperately needs to change. It will definitely be something we will work hard to achieve daily at Learning Time Adventures home daycare.</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img className='w-full h-full object-cover object-left' src="images/seplaying1.jpg" alt="" />
          </div>
        </section>
        {/* <section className='text-center'>
          <h2 className='text-5xl font-bold'>Our Team</h2>
          <h3 className='pt-6 text-xl font-semibold'>Caring & Dedicated</h3>
          <div className='pt-16 flex justify-center gap-6 flex-wrap'>
            <div className='max-w-sm'>
              <img className='w-96 h-96 object-cover object-top' src="/images/teacher1.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Kimberly</h3>
                <p className='pt-3 text-xl font-semibold'>Director</p>
              </div>
            </div>
            <div className='max-w-sm'>
              <img className='w-96 h-96 object-cover object-top' src="/images/teacher2.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Yvonne</h3>
                <p className='pt-3 text-xl font-semibold'>Educator</p>
              </div>
            </div>
            <div className='max-w-sm'>
              <img className='w-96 h-96 object-cover object-top' src="/images/teacher3.jpg" alt="Employee of Learning Time Adventures Daycare" />
              <div className='py-8 bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300'>
                <h3 className='text-2xl font-bold'>Stephanie</h3>
                <p className='pt-3 text-xl font-semibold'>Educator</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  )
}
