import { redirect } from 'next/navigation'

const supportUrl = 'https://github.com/brenopolanski/pixen/issues/new?template=support.yml'

export const GET = () => {
  redirect(supportUrl)
}
