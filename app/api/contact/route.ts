import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'customerservice@beautigelnails.com'
const FROM_EMAIL = 'Beautigel Nails <noreply@beautigelnails.com>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name: string
      email: string
      subject: string
      message: string
    }

    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const subjectLabels: Record<string, string> = {
      order: 'Order Enquiry',
      returns: 'Returns & Refunds',
      shipping: 'Shipping & Delivery',
      product: 'Product Question',
      wholesale: 'Wholesale / Stockist Enquiry',
      press: 'Press & Collaborations',
      other: 'General Enquiry',
    }

    const subjectLabel = subjectLabels[subject] ?? subject

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${subjectLabel} — from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #F5F0EB; padding: 32px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="font-size: 20px; margin: 0 0 4px;">New Contact Message</h1>
            <p style="margin: 0; color: #888; font-size: 13px;">Beautigel Nails London — Contact Form</p>
          </div>

          <div style="padding: 0 8px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #888; width: 120px; vertical-align: top;">From</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #888; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #b4cbe6;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #888; vertical-align: top;">Topic</td>
                <td style="padding: 8px 0; font-size: 14px;">${subjectLabel}</td>
              </tr>
            </table>

            <div style="background: #faf8f5; border-left: 3px solid #b4cbe6; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-bottom: 32px;">
              <p style="font-size: 13px; color: #888; margin: 0 0 8px;">Message</p>
              <p style="font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <p style="font-size: 13px; color: #aaa; text-align: center;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact-form]', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
