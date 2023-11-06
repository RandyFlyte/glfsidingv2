var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail(name, toEmail, otpText) {
  const nodeMail = process.env.NODEMAILER_EMAIL;
  const nodeMailPw = process.env.NODEMAILER_PW;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodeMail,
      pass: nodeMailPw,
    },
  });

  var mailOptions = {
    from: name,
    to: nodeMail,
    subject: toEmail,
    text: otpText,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log('Email Sent');
      return true;
    }
  });
}
