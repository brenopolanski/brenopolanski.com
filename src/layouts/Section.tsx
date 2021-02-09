type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ children, className }: SectionProps) => (
  <section className={`container py-12 mx-auto px-6 ${className}`}>{children}</section>
);
