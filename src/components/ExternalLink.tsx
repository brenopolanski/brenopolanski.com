import React from 'react'

interface IExternalLinkProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export const ExternalLink = ({ children, className, href }: IExternalLinkProps) => (
  <a
    className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
