import { useEffect, useState } from 'react'

type PageProps = {
  children: React.ReactNode
}

const PageChild = ({ children }: PageProps) => (
  <div className="flex flex-col min-h-screen bg-theme-background">
    <div className="flex flex-col flex-1">{children}</div>
  </div>
)

export const Page = ({ children }: PageProps) => {
  const [showChild, setShowChild] = useState(false)

  // Reference: https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null
  }

  return <PageChild>{children}</PageChild>
}
