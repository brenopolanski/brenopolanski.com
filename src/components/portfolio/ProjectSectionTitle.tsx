interface ProjectSectionTitleProps {
  title: string
}

export const ProjectSectionTitle = ({ title }: ProjectSectionTitleProps) => {
  return (
    <h2 className="mb-3 font-mono text-sm text-fd-muted-foreground">{`// ${title.toUpperCase()}`}</h2>
  )
}
