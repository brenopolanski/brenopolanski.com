import { useEffect, useState } from 'react'

interface IPageProps {
  children: React.ReactNode
}

const PageChild = ({ children }: IPageProps) => (
  <div className="flex flex-col min-h-screen bg-theme-background">
    <div className="flex flex-col flex-1">{children}</div>
  </div>
)

export const Page = ({ children }: IPageProps) => {
  const [showChild, setShowChild] = useState(false)

  // ref: https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  // wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return <PageChild>{children}</PageChild>
}
