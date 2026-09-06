import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { siteConfig } from '@/config/site'
import { forwardReceivedEmail } from '@/lib/resend'

interface ResendInboundEvent {
  type: string
  data?: {
    email_id?: string
    to?: string[]
  }
}

export async function POST(request: NextRequest) {
  try {
    const event = (await request.json()) as ResendInboundEvent

    if (event.type !== 'email.received' || !event.data?.email_id) {
      return NextResponse.json({})
    }

    const newsletter = siteConfig.author.emails.newsletter.toLowerCase()
    const isNewsletterInbox = (event.data.to ?? []).some(
      (address) => address.toLowerCase() === newsletter,
    )

    if (!isNewsletterInbox) {
      return NextResponse.json({})
    }

    const result = await forwardReceivedEmail({
      emailId: event.data.email_id,
      from: siteConfig.author.emails.newsletter,
      to: siteConfig.author.emails.personal,
    })

    if (!result.success) {
      return NextResponse.json(
        { error: result.error ?? 'Failed to forward email' },
        { status: 500 },
      )
    }

    return NextResponse.json({ message: result.message })
  } catch (error) {
    console.error('Resend inbound error:', error)

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
