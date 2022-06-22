type ContentProps = {
  children: React.ReactNode
  className?: string
}

export const Content = ({ children, className }: ContentProps) => (
  <p className={`pb-4 text-lg leading-normal ${className}`}>{children}</p>
)
