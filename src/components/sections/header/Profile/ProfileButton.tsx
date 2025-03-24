'use client'

import { useState } from 'react'

import { If } from '@/components/If'

import { ProfileImage } from './ProfileImage'
import { ProfileModal } from './ProfileModal'

export const ProfileButton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const [showFullImage, setShowFullImage] = useState(false)

  return (
    <>
      <div className={className} {...props}>
        <button
          aria-label="View profile picture"
          className="cursor-pointer transition-transform hover:scale-110"
          onClick={() => setShowFullImage(true)}
        >
          <ProfileImage
            alt="Breno Polanski profile picture"
            className="size-9 rounded-md"
            height={32}
            src="/breno-pfp.webp"
            width={32}
          />
        </button>
      </div>

      <If cond={showFullImage}>
        <ProfileModal onClose={() => setShowFullImage(false)} />
      </If>
    </>
  )
}
