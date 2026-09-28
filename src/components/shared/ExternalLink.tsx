export const ExternalLink = ({
  children,
  className,
  href,
  rel = 'noopener noreferrer',
  target = '_blank',
  ...props
}: React.ComponentProps<'a'>) => (
  <a className={className} href={href} rel={rel} target={target} {...props}>
    {children}
  </a>
)
