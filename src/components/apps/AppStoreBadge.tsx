import Link from 'next/link'

import { AppleIcon } from '@/components/shared/Icons'

interface AppStoreBadgeProps {
  href: string
}

export const AppStoreBadge = ({ href }: AppStoreBadgeProps) => {
  return (
    <Link
      className="inline-flex h-[60px] w-[180px] items-center gap-2.5 rounded-lg border border-white/80 bg-black px-3.5 font-sans text-white"
      href={href}
      prefetch={false}
      rel="noopener noreferrer"
      target="_blank"
    >
      <AppleIcon className="size-8 shrink-0" />
      <span className="flex min-w-0 flex-col items-start leading-none">
        <span className="text-xs font-medium">Download on the</span>
        <span className="text-2xl font-semibold tracking-tight">App Store</span>
      </span>
    </Link>
  )
}
