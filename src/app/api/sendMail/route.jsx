import { sendMail } from '@/util/mailService.js';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    console.log('Trying to POST request');
    const formData = await req.formData();
    const name = formData.get('custname');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(name);
    const success = await sendMail(name, email, message);
    console.log('Sent mail');
  } catch (err) {
    console.log('POST error', err);
    // res.status(400).json({
    //   error_code: 'api_one',
    //   message: err.message,
    // });
  }
  return NextResponse.json(res);
}
