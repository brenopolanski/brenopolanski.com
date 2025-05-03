import { XIcon } from '@/components/Icons'

import { ProfileImage } from './ProfileImage'

interface IProfileModalProps {
  onClose: () => void
}

export const ProfileModal = ({ onClose }: IProfileModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div className="relative aspect-square w-full max-w-[60vh]">
        <button
          className="absolute -right-2 -top-2 z-[60] cursor-pointer rounded-full bg-white p-2 text-black transition-colors hover:bg-gray-100 sm:-right-4 sm:-top-4"
          onClick={(event) => {
            event.stopPropagation()
            onClose()
          }}
        >
          <XIcon className="size-4 sm:size-5" />
          <span className="sr-only">Close button</span>
        </button>
        <div className="relative size-full">
          <ProfileImage
            alt="Breno Polanski profile picture"
            className="animate-scale-up rounded-lg bg-white/20 object-contain shadow-2xl"
            quality={95}
            sizes="(max-width: 640px) 70vw, (max-width: 1024px) 60vw, 50vw"
            src="/breno-pfp.webp"
            fill
            priority
          />
        </div>
      </div>
    </div>
  )
}
