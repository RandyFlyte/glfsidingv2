var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail(subject, toEmail, otpText) {
    const nodeMail = process.env.NEXT_PUBLIC_NODEMAILER_EMAIL;
    const nodeMailPw = process.env.NEXT_PUBLIC_NODEMAILER_PW;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: nodeMail,
            pass: nodeMailPw,
        },
    });

    var mailOptions = {
        from: toEmail,
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
