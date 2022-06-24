interface ITitleProps {
  className?: string
  title: string
}

export const Title = ({ className, title }: ITitleProps) => (
  <h1 className={`mt-8 mb-4 text-2xl font-semibold md:text-3xl xl:text-4xl ${className}`}>{title}</h1>
)
