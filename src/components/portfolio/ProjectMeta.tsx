interface ProjectMetaProps {
  license?: string
  year?: number
}

export const ProjectMeta = ({ license, year }: ProjectMetaProps) => {
  const parts = [license, year?.toString()].filter((part): part is string => part !== undefined)

  if (parts.length === 0) {
    return null
  }

  return <p className="not-prose font-mono text-sm text-fd-muted-foreground">{parts.join(' · ')}</p>
}
