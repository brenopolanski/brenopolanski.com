import Image from 'next/image'

import {
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GithubIcon,
  StoreIcon,
} from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import type { App } from '@/lib/apps'

const linkIcons: Record<string, React.ElementType> = {
  'App Store': StoreIcon,
  Download: DownloadIcon,
  Source: GithubIcon,
  'How it works': FileTextIcon,
}

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
    {children}
  </span>
)

interface AppHeroProps {
  app: App
}

export const AppHero = ({ app }: AppHeroProps) => {
  const links = Object.entries({ ...app.mainLinks, ...app.links })

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Image
        alt={`${app.title} app icon`}
        className="size-24 shrink-0"
        height={512}
        quality={95}
        src={app.iconUrl}
        width={512}
        priority
      />

      <div className="space-y-3">
        <h1 className="text-3xl font-bold uppercase md:text-4xl">{app.title}</h1>
        <p className="text-base text-balance text-muted-foreground">{app.subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {app.platforms.map((platform) => (
            <Tag key={platform}>{platform}</Tag>
          ))}
          <Tag>{app.priceLabel ?? (app.isPaid ? 'Paid' : 'Free')}</Tag>
          {app.isMenuBarApp && <Tag>Menu bar</Tag>}
        </div>

        {app.requirement && <p className="text-sm text-muted-foreground/80">{app.requirement}</p>}
      </div>

      {links.length > 0 && (
        <div
          className={
            links.length >= 4
              ? 'grid w-full grid-cols-2 gap-4'
              : 'grid w-full grid-cols-2 gap-4 sm:grid-cols-3'
          }
        >
          {links.map(([title, href]) => {
            const Icon = linkIcons[title] ?? ExternalLinkIcon

            return (
              <LinkButton
                key={title}
                href={href}
                icon={<Icon className="size-5 shrink-0" />}
                title={title}
                isExternal
              />
            )
          })}
        </div>
      )}

      {app.priceNote && (
        <p className="max-w-md text-sm text-balance text-muted-foreground">{app.priceNote}</p>
      )}
    </div>
  )
}
