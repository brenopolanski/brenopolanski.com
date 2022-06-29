import { default as NextLink } from 'next/link'

interface ILinkProps {
  children: React.ReactNode
  className?: string
  href: string
  isExternal?: boolean
}

export const Link = ({ children, className, href, isExternal = false }: ILinkProps) => {
  if (isExternal) {
    return (
      <a
        className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}>{children}</a>
    </NextLink>
  )
}
