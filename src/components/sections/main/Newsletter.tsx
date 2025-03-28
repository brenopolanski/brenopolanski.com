'use client'

import { useState } from 'react'

import { subscribeToNewsletter } from '@/app/actions/newsletter'
import { CheckIcon, MailIcon, SendIcon, XIcon } from '@/components/Icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { isValidEmail } from '@/lib/utils'

type TStatus = 'idle' | 'loading' | 'success' | 'error'

const statusStyles = {
  error: 'text-red-800 bg-red-100 border-red-200',
  idle: '',
  loading: '',
  success: 'text-green-800 bg-green-100 border-green-200',
}

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<TStatus>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Please enter your email')
      return
    }

    if (!isValidEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email')
      return
    }

    setStatus('loading')

    try {
      const result = await subscribeToNewsletter(email)

      if (result.success) {
        setStatus('success')
        setMessage('Successfully subscribed! Check your inbox :)')
        setEmail('')

        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle')
          setMessage('')
        }, 5_000)
      } else {
        setStatus('error')
        setMessage(result.error || 'Failed to subscribe to newsletter. Please try again.')
      }
    } catch (error) {
      console.error('Failed to subscribe to newsletter', error)
      setStatus('error')
      setMessage('Failed to subscribe to newsletter. Please try again.')
    }
  }

  return (
    <Card className="bg-gradient-to-br from-emerald-400 to-green-500 dark:from-emerald-500 dark:to-green-600">
      <CardContent className="px-8 py-4">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold text-black">Join breno&apos;s list</CardTitle>
          <CardDescription className="text-black/80">
            Sporadic emails where I talk about what i&apos;m working on (usually web3 development, open source and
            SaaS).
          </CardDescription>
        </CardHeader>
        <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MailIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-black/60" />
              <Input
                className="flex-1 border-0 !bg-white pl-10 text-black placeholder:text-black/60 focus-visible:ring-0"
                disabled={status === 'loading'}
                placeholder="type your email to join..."
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              aria-label="Subscribe to newsletter"
              className="cursor-pointer bg-white text-black transition-colors hover:bg-gray-100 disabled:opacity-50"
              disabled={status === 'loading'}
              size="icon"
              type="submit"
              variant="secondary"
            >
              {status === 'loading' ? (
                <div className="size-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              ) : status === 'success' ? (
                <CheckIcon className="size-4 text-green-600" />
              ) : (
                <SendIcon className="size-4" />
              )}
            </Button>
          </div>

          {/* Status Message */}
          {message && status !== 'loading' && (
            <div
              className={`flex items-center gap-2 rounded-md border px-3 py-2 text-sm ${statusStyles[status]}`}
              role="alert"
            >
              {status === 'success' ? <CheckIcon className="size-4" /> : <XIcon className="size-4" />}
              {message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
