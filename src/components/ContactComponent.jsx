import React, {useEffect} from 'react'
import ContactForm from './ContactForm'

export default function ContactComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='px-[6%] flex flex-col items-center gap-8'>
        <div class="mt-2 py-[2.5rem] min-w-[100vw] text-center flex justify-center bg-green-200/75">
          <h2 className='font-extrabold text-6xl text-gray-800 md:text-8xl'>Contact Us</h2>
        </div>
        <div className='mt-0 max-w-xl text-xl text-center text-gray-600'>
          <p>Send us an email by using our email address down below or by filling out the form and we will get back to you promptly!</p>
        </div>
        <div className='mt-0 max-w-3xl'>
          <img className='w-full h-auto shadow-md shadow-gray-700 rounded-lg' src="images/email3.jpg" alt="Picture of a phone focused on emails" />
        </div>
        <h3 className='mt-14 mb-8 text-center text-xl text-gray-700 break-all sm:text-2xl md:text-3xl'>ClaremontWebDesigns@gmail.com</h3>
      </div>
      {/* <div className='flex flex-col-reverse justify-center items-center gap-12'> */}
        <ContactForm />
        {/* <div className='max-w-lg'>
          <img className='w-full h-auto shadow-md shadow-gray-700 rounded-lg' src="images/email1.jpg" alt="" />
        </div> */}
      {/* </div> */}
    </div>
  )
}
