// /util/emailJSservice.js
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EmailService = () => {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (templateParams) => {
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <button
      onClick={() =>
        sendEmail({
          name: 'James',
          email: 'Ex@ma.com',
          phone: '',
          message: 'This is message',
        })
      }>
      Send Email
    </button>
  );
};

export default EmailService;
