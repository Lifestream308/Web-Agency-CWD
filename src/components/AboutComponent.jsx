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
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>It wasn’t until I became a mother that I realized not every place upholds high standards in regards to childcare and that is something that desperately needs to change. Our practices here at Learning Time Adventure not only hope to inspire our youth to be all they can be as a kind hearted well rounded individual, but also spark a change in how providers service all children in their care.</p>
                  <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>I have my California Teacher Permit, Pediatric CPR & First aid certification, DSP1&2 certification, I have my Associates Degree in Child Development, Bachelor’s Degree in Human Development with the emphasis in Child Development and most importantly, I have over a decade experience in the child development field. I continue to attend training and seminars.</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img className='w-full h-full object-cover object-left' src="images/seplaying1.jpg" alt="" />
          </div>
        </section>
        <section className='flex flex-col gap-6 lg:flex-row'>
          <div className='py-10 w-full bg-gradient-to-b from-yellow-200 via-yellow-200 to-yellow-300 lg:w-1/2 lg:py-4'>
            <div className='h-full items-center flex text-blue-900'>
              <div className='text-center'>
                <h2 className='text-5xl font-bold'>Our Mission</h2>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Safety, kindness and education are our priorities.</p>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>We understand our babies are adults in training, therefore we believe we can instill a love for learning while having fun exploring the world around us.</p>
                <p className='mx-auto pt-4 w-4/5 text-xl font-light leading-normal'>Experiences have taught me that not only do I need to educate my own children but share our same principles to our community searching for quality care their families deserve.</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2'>
            <img className='w-full h-full object-cover' src="images/outside3.jpg" alt="" />
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
