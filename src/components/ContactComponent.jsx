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
        <div className='max-w-xl text-2xl text-center text-gray-600'>
          <p>Send us an email by using our email address down below or by filling out the form and we will get back to you promptly!</p>
        </div>
      </div>

      <ContactForm />
      
    </div>
  )
}
