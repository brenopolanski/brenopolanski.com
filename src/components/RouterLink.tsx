import Link from 'next/link';

type RouterLinkProps = {
  children: React.ReactNode;
  className?: string;
  href: string;
};

export const RouterLink = ({ children, className, href }: RouterLinkProps) => (
  <Link href={href}>
    <a className={`border-b border-theme-border-link hover:bg-theme-highlight ${className}`}>{children}</a>
  </Link>
);
