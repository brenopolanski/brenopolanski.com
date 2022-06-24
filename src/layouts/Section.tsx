interface ISectionProps {
  children: React.ReactNode
  className?: string
}

export const Section = ({ children, className }: ISectionProps) => (
  <section className={`container py-12 mx-auto px-6 ${className}`}>{children}</section>
)
