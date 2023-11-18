const nodemailer = require('nodemailer');

const sendMail = async (custname, email, message) => {
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
    // verify connection configuration
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

  var mailOptions = {
    from: custname,
    to: process.env.NODEMAILER_EMAIL,
    text: message,
  };

  // const mailData = {
  //   from: {
  //     name: `${custname}`,
  //     address: process.env.NODEMAILER_EMAIL,
  //   },
  //   replyTo: email,
  //   to: process.env.NODEMAILER_EMAIL,
  //   subject: `form message`,
  //   text: message,
  //   html: `${message}`,
  // };

  await new Promise((resolve, reject) => {
    // send mail
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

// var nodemailer = require('nodemailer');
// //-----------------------------------------------------------------------------
// export async function sendMail(name, toEmail, otpText) {
//   const nodeMail = process.env.NODEMAILER_EMAIL;
//   const nodeMailPw = process.env.NODEMAILER_PW;

//   var transporter = await nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465, // Secure SMTP port
//     auth: {
//       user: nodeMail,
//       pass: nodeMailPw,
//     },
//     secure: true,
//   });

//   var mailOptions = {
//     from: name,
//     to: nodeMail,
//     subject: toEmail,
//     text: otpText,
//   };

//   await transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       throw new Error(error);
//     } else {
//       console.log('Email Sent!');
//       return true;
//     }
//   });
// }
