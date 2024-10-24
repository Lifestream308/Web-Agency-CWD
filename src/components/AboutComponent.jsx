import React, {useEffect} from 'react'
import ContactForm from './ContactForm'

export default function AboutComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='px-[6%] flex flex-col items-center gap-8'>
        <div class="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-blue-200/60">
          <h2 className='font-extrabold text-6xl text-gray-800 md:text-8xl'>About Us</h2>
        </div>
        <div className='mt-8 w-full flex flex-col gap-20 lg:flex-row'>
          <div className='relative mx-auto my-auto w-[20rem] min-w-[20rem] text-center'>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-orange-100/95 -z-10 translate-x-9 translate-y-9 rounded-lg'></div>
            <img className='w-full h-auto rounded-lg shadow-sm shadow-gray-800' src="images/owner2.jpg" alt="" />
          </div>
          <div className='max-w-xl mx-auto flex flex-col gap-8 text-xl text-gray-700'>
            <p><span className='font-bold'>Hello, my name is Christian,</span> I am the proud owner and lead developer of Claremont Web Designs. I divide my time between working as a nurse assistant and as a passionate web developer. In both of these roles I practice care, precision, and dedication, every day.</p>
            <p><span className='font-bold'>At Claremont Web Designs,</span> my mission is to uplift and support the local community by creating high-quality websites tailored specifically to the unique needs of small businesses. I believe that technology should be both affordable and accessible, and I'm dedicated to helping local businesses thrive by building websites that not only look stunning, but also effectively showcase their services and strengths.</p>
            {/* <p>My journey into web development began years ago as a self-taught developer, driven by curiosity and a desire to help others. Over time, I honed my skills by working with small startup companies, gaining valuable experience that has shaped me into the developer I am today.</p> */}
            <p><span className='font-bold'>I'm here to partner with you</span> in bringing your vision to life. Together, we can create a website that captures the essence of your business and helps it grow. Let's collaborate to show the world what your business can do!</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  )
}
