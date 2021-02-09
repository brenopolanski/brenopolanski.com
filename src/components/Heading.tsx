type HeadingProps = {
  className?: string;
  title: string;
};

export const Heading = ({ className, title }: HeadingProps) => (
  <h2 className={`mb-8 pb-2 text-sm font-semibold uppercase border-b border-theme-border ${className}`}>{title}</h2>
);
