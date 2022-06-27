interface IPageProps {
  children: React.ReactNode
}

export const Page = ({ children }: IPageProps) => (
  <div className="flex flex-col min-h-screen bg-theme-background">
    <div className="flex flex-col flex-1">{children}</div>
  </div>
)
