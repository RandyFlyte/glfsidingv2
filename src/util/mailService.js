var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail(name, toEmail, otpText) {
  const nodeMail = process.env.NODEMAILER_EMAIL;
  const nodeMailPw = process.env.NODEMAILER_PW;

  var transporter = await nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Secure SMTP port
    auth: {
      user: nodeMail,
      pass: nodeMailPw,
    },
    secure: true,
  });

  var mailOptions = {
    from: name,
    to: nodeMail,
    subject: toEmail,
    text: otpText,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
