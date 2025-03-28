'use server'

import { Resend } from 'resend'

import { ENV, isProd, validateEnv } from '@/config/env'

validateEnv({ name: 'RESEND_API_KEY', value: ENV.RESEND.API_KEY })

const resend = new Resend(ENV.RESEND.API_KEY)

interface ISendEmailParams {
  to: string[]
  from: string
  subject: string
  react: React.ReactNode
  scheduledAt?: string
}

/**
 * Sends an email using Resend
 * @param to - Array of email addresses to send the email to
 * @param from - Email address of the sender
 * @param subject - Subject of the email
 * @param react - React component to render in the email body
 * @param scheduledAt - Optional date and time to schedule the email to be sent
 * @returns Object containing the email details and success status
 * @example
 * const result = await sendEmail({
 *   to: ['test@example.com'],
 *   from: 'hello@example.com',
 *   subject: 'Test Email',
 *   react: <div>Hello, world!</div>,
 * })
 * console.log(result) // { message: 'Email sent successfully', success: true }
 */
export const sendEmail = async ({ to, from, subject, react, scheduledAt }: ISendEmailParams) => {
  try {
    const msg = {
      to,
      from,
      subject,
      react,
      // ref: https://resend.com/docs/dashboard/emails/schedule-email#1-schedule-using-natural-language
      ...(scheduledAt && { scheduledAt }),
    }

    let data = null

    if (isProd) {
      data = await resend.emails.send(msg)
    }

    console.log('Email sent successfully', JSON.stringify(data))
    return { message: 'Email sent successfully', success: true }
  } catch (error: any) {
    console.error('Error sending email:', error)

    if (error.response && error.response.body && error.response.body.errors) {
      console.error('Resend errors:', error.response.body.errors)
    }

    return {
      details: error.response?.body?.errors,
      error: error.message,
      success: false,
    }
  }
}
