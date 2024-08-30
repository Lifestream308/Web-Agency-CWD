import React, {useState} from 'react'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
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
    <div className='mt-12 text-2xl text-gray-600 flex justify-center'>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <div className='hidden'>
                <label htmlFor="bot-field">Do not fill out this section</label>
                <input type="hidden" name="bot-field" />
            </div>
            <div className='mt-8 flex flex-col'>
                <label htmlFor="name">Name:</label>
                <input className='border border-gray-400' type="text" name="name" value={formData.name} onChange={handleChange} required/>
            </div>
            <div className='mt-8 flex flex-col'>
                <label htmlFor="email">Email:</label> 
                <input className='border border-gray-400' type="email" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className='mt-8 flex flex-col'>
                <label htmlFor="message">Message:</label>
                <textarea className='border border-gray-400' name="message" value={formData.message} onChange={handleChange} required/>
            </div>
            <button className='mt-8 px-4 py-2 text-white bg-green-600 rounded-lg' type="submit">Send</button>
        </form>
    </div>
  )
}