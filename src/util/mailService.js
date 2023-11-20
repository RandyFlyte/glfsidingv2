const nodemailer = require('nodemailer');

const sendMail = async (custname, email, message, phone) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: `"${custname}" <${process.env.NODEMAILER_EMAIL}>`, // Display sender's name
    to: process.env.NODEMAILER_EMAIL, // Recipient email address
    subject: `New Message From ${custname}`, // Email subject
    text: `Name: ${custname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
    html: `<p><strong>Name:</strong> ${custname}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong> ${message}</p>`, // HTML body
    replyTo: email, // Reply-To email address
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
};
module.exports = { sendMail };
