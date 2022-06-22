import React from 'react'

type ExternalLinkProps = {
  children: React.ReactNode
  className?: string
  href?: string
}

export const ExternalLink = ({ children, className, href }: ExternalLinkProps) => (
  <a
    className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
