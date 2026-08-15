import { ThemeToggle } from '@/components/ThemeToggle'

import { ProfileButton } from './Profile/ProfileButton'

export const Header = () => {
  return (
    <header className="mb-4 flex justify-between md:mb-0 md:block">
      <ProfileButton className="md:fixed md:top-4 md:left-4 md:z-40" />

      <nav className="md:fixed md:top-4 md:right-4 md:z-40">
        <ThemeToggle />
      </nav>
    </header>
  )
}
