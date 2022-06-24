import Link from 'next/link'

interface IRouterLinkProps {
  children: React.ReactNode
  className?: string
  href: string
}

export const RouterLink = ({ children, className, href }: IRouterLinkProps) => (
  <Link href={href}>
    <a className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}>{children}</a>
  </Link>
)
