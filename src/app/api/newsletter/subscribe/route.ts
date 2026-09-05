import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { siteConfig } from '@/config/site'
import { WelcomeToNewsletterEmail } from '@/emails/WelcomeToNewsletterEmail'
import { addContactToAudience, sendEmail } from '@/lib/resend'
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

    const contactResult = await addContactToAudience(email)

    if (!contactResult.success) {
      return NextResponse.json(
        { error: contactResult.error ?? 'Failed to subscribe' },
        { status: 500 },
      )
    }

    const result = await sendEmail({
      to: [email],
      from: siteConfig.author.emails.personal,
      subject: `Welcome to ${siteConfig.name}'s Newsletter! 🚀`,
      react: WelcomeToNewsletterEmail(),
    })

    if (!result.success) {
      console.error('Welcome email failed after saving contact:', result.error)
    }

    return NextResponse.json({ message: 'Subscription email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
