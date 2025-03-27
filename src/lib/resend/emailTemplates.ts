import { siteConfig } from '@/config/site'
import { WelcomeEmail } from '@/emails/WelcomeEmail'

import { sendEmail } from './sendEmail'

export const sendWelcomeEmail = async (email: string) => {
  return await sendEmail({
    to: [email],
    from: siteConfig.creator.email,
    subject: `Welcome to ${siteConfig.name}'s Newsletter! 🚀`,
    react: WelcomeEmail(),
  })
}
