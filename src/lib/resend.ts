'use server'

import { Resend } from 'resend'

import { ENV, isProd, validateEnv } from '@/config/env'
import { getErrorMessage } from '@/lib/error'

const getResend = () => {
  validateEnv({ name: 'RESEND_API_KEY', value: ENV.RESEND.API_KEY })
  return new Resend(ENV.RESEND.API_KEY)
}

const getAudienceId = () => {
  validateEnv({ name: 'RESEND_AUDIENCE_ID', value: ENV.RESEND.AUDIENCE_ID })
  return ENV.RESEND.AUDIENCE_ID as string
}

const isAlreadySubscribedError = (error: unknown) => {
  const statusCode =
    typeof error === 'object' && error !== null && 'statusCode' in error
      ? error.statusCode
      : undefined

  return statusCode === 409 || /already exists/i.test(getErrorMessage(error))
}

interface SendEmailParams {
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
export const sendEmail = async ({ to, from, subject, react, scheduledAt }: SendEmailParams) => {
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
      data = await getResend().emails.send(msg)
    }

    console.log('Email sent successfully', JSON.stringify(data))

    return { message: 'Email sent successfully', success: true }
  } catch (error) {
    console.error('Error sending email:', error)

    return {
      error: getErrorMessage(error),
      success: false,
    }
  }
}

/**
 * Adds an email to the Resend newsletter audience
 * @param email - The email address to add
 * @returns Object containing the result message and success status
 * @example
 * const result = await addContactToAudience('test@example.com')
 * console.log(result) // { message: 'Contact added successfully', success: true }
 */
export const addContactToAudience = async (email: string) => {
  try {
    if (!isProd) {
      console.log('Skipped adding contact in non-prod', email)

      return { message: 'Contact added successfully', success: true }
    }

    const { data, error } = await getResend().contacts.create({
      audienceId: getAudienceId(),
      email,
      unsubscribed: false,
    })

    if (error) {
      if (isAlreadySubscribedError(error)) {
        return { message: 'Contact already subscribed', success: true }
      }

      console.error('Error adding contact:', error)

      return { error: error.message, success: false }
    }

    console.log('Contact added successfully', JSON.stringify(data))

    return { message: 'Contact added successfully', success: true }
  } catch (error) {
    console.error('Error adding contact:', error)

    if (isAlreadySubscribedError(error)) {
      return { message: 'Contact already subscribed', success: true }
    }

    return {
      error: getErrorMessage(error),
      success: false,
    }
  }
}

interface ForwardReceivedEmailParams {
  emailId: string
  from: string
  to: string
}

/**
 * Forwards a received Resend inbound email to another address
 * @param emailId - The received email id from the `email.received` webhook
 * @param from - Address on the verified domain to send the forward from
 * @param to - Address to forward the email to
 * @returns Object containing the result message and success status
 * @example
 * const result = await forwardReceivedEmail({
 *   emailId: 'abc123',
 *   from: 'hi@example.com',
 *   to: 'me@gmail.com',
 * })
 * console.log(result) // { message: 'Email forwarded successfully', success: true }
 */
export const forwardReceivedEmail = async ({ emailId, from, to }: ForwardReceivedEmailParams) => {
  try {
    if (!isProd) {
      console.log('Skipped forwarding received email in non-prod', { emailId, from, to })

      return { message: 'Email forwarded successfully', success: true }
    }

    const { data, error } = await getResend().emails.receiving.forward({
      emailId,
      from,
      to,
    })

    if (error) {
      console.error('Error forwarding received email:', error)

      return { error: error.message, success: false }
    }

    console.log('Email forwarded successfully', JSON.stringify(data))

    return { message: 'Email forwarded successfully', success: true }
  } catch (error) {
    console.error('Error forwarding received email:', error)

    return {
      error: getErrorMessage(error),
      success: false,
    }
  }
}
