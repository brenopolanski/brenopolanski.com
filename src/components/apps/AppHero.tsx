import Image from 'next/image'

import {
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GithubIcon,
  LifeBuoyIcon,
  ShieldIcon,
} from '@/components/shared/Icons'
import { LinkButton } from '@/components/shared/LinkButton'
import type { App } from '@/lib/apps'

import { AppStoreBadge } from './AppStoreBadge'

const linkIcons: Record<string, React.ElementType> = {
  Download: DownloadIcon,
  GitHub: GithubIcon,
  Support: LifeBuoyIcon,
  'Privacy Policy': ShieldIcon,
  Terms: FileTextIcon,
}

const InlineNote = ({ text }: { text: string }) => {
  return text.split(/(`[^`]+`)/g).map((part, index) => {
    const isCode = part.startsWith('`') && part.endsWith('`') && part.length > 2

    if (!isCode) {
      return <span key={index}>{part}</span>
    }

    return (
      <code key={index} className="rounded-sm bg-muted px-[0.35em] py-[0.15em] font-normal">
        {part.slice(1, -1)}
      </code>
    )
  })
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
  const appStoreHref = links.find(([title]) => title === 'Apple')?.[1]
  const otherLinks = links.filter(([title]) => title !== 'Apple')

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

      {appStoreHref && <AppStoreBadge href={appStoreHref} />}

      {otherLinks.length > 0 && (
        <div
          className={
            otherLinks.length >= 4
              ? 'grid w-full grid-cols-2 gap-4'
              : 'grid w-full grid-cols-2 gap-4 sm:grid-cols-3'
          }
        >
          {otherLinks.map(([title, href]) => {
            const Icon = linkIcons[title] ?? ExternalLinkIcon

            return (
              <LinkButton
                key={title}
                href={href}
                icon={<Icon className="size-5 shrink-0" />}
                isExternal={!href.startsWith('/')}
                title={title}
              />
            )
          })}
        </div>
      )}

      {app.priceNote && (
        <p className="max-w-md text-sm text-balance text-muted-foreground">
          <InlineNote text={app.priceNote} />
        </p>
      )}
    </div>
  )
}
