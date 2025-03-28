import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { siteConfig } from '@/config/site'
import { WelcomeToNewsletterEmail } from '@/emails/WelcomeToNewsletterEmail'
import { sendEmail } from '@/lib/resend'
import { isValidEmail } from '@/lib/utils'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email' }, { status: 400 })
    }

    const result = await sendEmail({
      to: [email],
      from: siteConfig.creator.emails.newsletter,
      subject: `Welcome to ${siteConfig.name}'s Newsletter! 🚀`,
      react: WelcomeToNewsletterEmail(),
    })

    if (!result.success) {
      return NextResponse.json({ error: result.error || 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Subscription email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
