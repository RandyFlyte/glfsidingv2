import { sendMail } from '@/util/mailService.js';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    console.log('Trying to POST request');
    const formData = await req.formData();
    const name = formData.get('custname');
    const email = formData.get('email');
    const message = formData.get('message');
    const phone = formData.get('phone');
    console.log(name);
    await sendMail(name, email, message, phone);
    console.log('Sent mail');
  } catch (err) {
    console.log('POST error', err);
  }
  return NextResponse.json(res);
}
