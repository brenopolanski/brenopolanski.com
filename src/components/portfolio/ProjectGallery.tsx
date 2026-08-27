import Image from 'next/image'

import type { ProjectImage } from '@/lib/source'
import { cn, generateReactKey } from '@/lib/utils'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  if (images.length === 0) {
    return null
  }

  const hero = images.filter(({ layout }) => layout === 'hero')
  const grid = images.filter(({ layout }) => layout !== 'hero')

  return (
    <div className="not-prose my-6 space-y-4">
      {hero.map((image, index) => (
        <Image
          key={generateReactKey('portfolio-hero', index)}
          alt={image.alt}
          className="w-full rounded-lg border border-fd-border"
          height={image.height}
          priority={index === 0}
          quality={95}
          sizes="(min-width: 768px) 720px, 100vw"
          src={image.src}
          width={image.width}
        />
      ))}

      {grid.length > 0 && (
        <div
          className={cn(
            'grid gap-4',
            grid.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2',
          )}
        >
          {grid.map((image, index) => (
            <Image
              key={generateReactKey('portfolio-grid', index)}
              alt={image.alt}
              className="w-full rounded-lg border border-fd-border"
              height={image.height}
              sizes="(min-width: 768px) 360px, 100vw"
              src={image.src}
              width={image.width}
            />
          ))}
        </div>
      )}
    </div>
  )
}
