import type { ImageProps } from 'next/image'
import Image from 'next/image'

import { cn } from '@/lib/utils'

export const ProfileImage = ({ alt, className, width, height, fill, ...props }: ImageProps) => (
  <Image
    alt={alt}
    className={cn('object-cover', fill ? 'size-full' : 'aspect-square', className)}
    fill={fill}
    height={!fill ? (height ?? 32) : undefined}
    width={!fill ? (width ?? 32) : undefined}
    {...props}
  />
)
