import React, {useState} from 'react'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        business: '',
        telephone: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

  return (
    <div className='mt-12 mx-auto px-12 pb-8 w-fit max-w-full text-xl text-gray-600 flex flex-col justify-center items-center shadow-md shadow-gray-400 border-t border-gray-200 rounded-lg'>
      <p className='mt-6'>Let's get started!</p>
      <form className='w-[22rem]' name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div className='hidden'>
              <label htmlFor="bot-field">Do not fill out this section</label>
              <input type="hidden" name="bot-field" />
          </div>
          <div className='mt-8 flex flex-col'>
              <input className='px-4 py-2 border border-gray-400 rounded-md' type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='Name'/>
          </div>
          <div className='mt-8 flex flex-col'>
              <input className='px-4 py-2 border border-gray-400 rounded-md' type="text" name="business" value={formData.business} onChange={handleChange} required placeholder='Business'/>
          </div>
          <div className='mt-8 flex flex-col'>
              <input className='px-4 py-2 border border-gray-400 rounded-md' type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required placeholder='Telephone'/>
          </div>
          <div className='mt-8 flex flex-col'>
              <input className='px-4 py-2 border border-gray-400 rounded-md' type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Email'/>
          </div>
          <div className='mt-8 flex flex-col'>
              <textarea className='px-4 py-2 h-[11rem] border border-gray-400 rounded-md' name="message" value={formData.message} onChange={handleChange} required placeholder='Type your message here...'/>
          </div>
          <button className='mt-8 px-4 py-2 text-white hover:text-gray-300 bg-gradient-to-r from-green-600 to-green-400 shadow-md shadow-gray-700 rounded-lg' type="submit">Submit</button>
      </form>
    </div>
  )
}
