import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  try{
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`
    })
    return res.status(200).json({ ok: true })
  }catch(e){
    console.error(e)
    return res.status(500).json({ error: 'Failed to send' })
  }
}
