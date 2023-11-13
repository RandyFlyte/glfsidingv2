// components/ContactForm.js
import React, { useState } from 'react';
import { sendEmail } from '../utils/emailJSservice.js';

const ContactForm = () => {
  const [formDetails, setFormDetails] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formDetails)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // Handle success (e.g., show a success message)
      })
      .catch((err) => {
        console.log('FAILED...', err);
        // Handle failure (e.g., show an error message)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='user_name'
        value={formDetails.user_name}
        onChange={handleChange}
        placeholder='Your Name'
        required
      />
      <input
        type='email'
        name='user_email'
        value={formDetails.user_email}
        onChange={handleChange}
        placeholder='Your Email'
        required
      />
      <textarea
        name='message'
        value={formDetails.message}
        onChange={handleChange}
        placeholder='Your Message'
        required
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default ContactForm;
