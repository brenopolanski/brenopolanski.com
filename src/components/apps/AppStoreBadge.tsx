import Link from 'next/link'

import { AppleIcon } from '@/components/shared/Icons'

interface AppStoreBadgeProps {
  href: string
}

export const AppStoreBadge = ({ href }: AppStoreBadgeProps) => {
  return (
    <Link
      className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-black px-3 py-1.5 font-sans text-white"
      href={href}
      prefetch={false}
      rel="noopener noreferrer"
      target="_blank"
    >
      <AppleIcon className="size-7 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.65rem] font-medium">Download on the</span>
        <span className="text-xl font-semibold tracking-tight">App Store</span>
      </span>
    </Link>
  )
}
