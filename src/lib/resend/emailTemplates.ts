import { siteConfig } from '@/config/site'
import { SubscribeToNewsletterEmail } from '@/emails/SubscribeToNewsletterEmail'

import { sendEmail } from './sendEmail'

export const sendSubscribeToNewsletterEmail = async (email: string) => {
  return await sendEmail({
    to: [email],
    from: siteConfig.creator.email,
    subject: `Welcome to ${siteConfig.name}'s Newsletter! 🚀`,
    react: SubscribeToNewsletterEmail(),
  })
}
