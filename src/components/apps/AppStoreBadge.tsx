import Link from 'next/link'

import { AppleIcon } from '@/components/shared/Icons'

interface AppStoreBadgeProps {
  href: string
}

export const AppStoreBadge = ({ href }: AppStoreBadgeProps) => {
  return (
    <Link
      className="inline-flex items-center gap-2 rounded-lg border border-white/80 bg-black px-3 py-1.5 font-sans text-white md:h-[60px] md:w-[180px] md:gap-2.5 md:px-3.5 md:py-0"
      href={href}
      prefetch={false}
      rel="noopener noreferrer"
      target="_blank"
    >
      <AppleIcon className="size-7 shrink-0 md:size-8" />
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span className="text-[0.65rem] font-medium md:text-xs">Download on the</span>
        <span className="text-xl font-semibold tracking-tight md:text-2xl">App Store</span>
      </span>
    </Link>
  )
}
