import React from 'react';

type ExternalLinkProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  isExternal?: boolean;
};

export const ExternalLink = React.forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  ({ children, className, href, isExternal = true }: ExternalLinkProps, ref) => {
    return (
      <a
        ref={ref}
        className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}
        href={href}
        target={`${isExternal ? '_blank' : '_self'}`}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
);

ExternalLink.displayName = 'ExternalLink';
