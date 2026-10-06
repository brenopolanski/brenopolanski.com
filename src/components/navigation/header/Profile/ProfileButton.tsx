'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { ArrowLeftIcon } from '@/components/shared/Icons'
import { paths } from '@/config/paths'
import { ANALYTICS_EVENTS } from '@/lib/analytics'

import { ProfileImage } from './ProfileImage'
import { ProfileModal } from './ProfileModal'

export const ProfileButton = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const pathname = usePathname()
  const isHome = pathname === paths.home
  const [showFullImage, setShowFullImage] = useState(false)

  return (
    <>
      <div className={className} {...props}>
        {isHome ? (
          <button
            aria-label="View profile picture"
            className="cursor-pointer transition-transform hover:scale-110"
            data-analytics-event={ANALYTICS_EVENTS.profileOpen}
            onClick={() => setShowFullImage(true)}
          >
            <ProfileImage
              alt="Breno Polanski profile picture"
              className="size-9 rounded-md"
              height={32}
              src="/breno-polanski.webp"
              width={32}
            />
          </button>
        ) : (
          <Link
            aria-label="Go to home"
            className="group relative inline-block cursor-pointer transition-transform hover:scale-110"
            href={paths.home}
            prefetch={false}
          >
            <ProfileImage
              alt="Breno Polanski profile picture"
              className="size-9 rounded-md"
              height={32}
              src="/breno-polanski.webp"
              width={32}
            />
            <span className="absolute inset-0 flex items-center justify-center rounded-md bg-black/55 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <ArrowLeftIcon className="size-4" strokeWidth={2.5} aria-hidden />
            </span>
          </Link>
        )}
      </div>

      {isHome && showFullImage && <ProfileModal onClose={() => setShowFullImage(false)} />}
    </>
  )
}
