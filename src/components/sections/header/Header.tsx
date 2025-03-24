import { ThemeToggle } from '@/components/ThemeToggle'

import { ProfileButton } from './Profile/ProfileButton'

export const Header = () => {
  return (
    <div className="mb-4 flex justify-between md:mb-0 md:block">
      <ProfileButton className="md:fixed md:left-4 md:top-4 md:z-40" />

      <div className="md:fixed md:right-4 md:top-4 md:z-40">
        <ThemeToggle />
      </div>
    </div>
  )
}
