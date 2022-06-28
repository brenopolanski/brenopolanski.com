interface IContentProps {
  children: React.ReactNode
  className?: string
}

export const Content = ({ children, className }: IContentProps) => (
  <p className={`pb-4 text-lg leading-normal ${className}`}>{children}</p>
)
