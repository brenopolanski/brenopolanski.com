import {
  BitcoinHojeLogo,
  DashfyLogo,
  DolarHojeLogo,
  PhootoAILogo,
  PixenLogo,
} from '@/components/shared/Logos'

export interface ProjectItem {
  title: string
  description: string
  icon: React.ElementType
  href: string
  isExternal?: boolean
}

export const projectData: ProjectItem[] = [
  {
    icon: DashfyLogo,
    title: 'Dashfy',
    description: 'Dashboards for developers.',
    href: 'https://dashfy.dev',
    isExternal: true,
  },
  {
    icon: PixenLogo,
    title: 'Pixen',
    description: 'Open source desktop image editor.',
    href: 'https://github.com/brenopolanski/pixen',
    isExternal: true,
  },
  {
    icon: PhootoAILogo,
    title: 'PHOOTO.AI',
    description: 'Professional headshots with AI.',
    href: 'https://phooto.ai',
    isExternal: true,
  },
  {
    icon: DolarHojeLogo,
    title: 'Dólar Hoje',
    description: 'Track the price of the commercial dollar and tourism.',
    href: 'https://dolarhoje.io',
    isExternal: true,
  },
  {
    icon: BitcoinHojeLogo,
    title: 'Bitcoin Hoje',
    description: 'Track the price of Bitcoin and other cryptos.',
    href: 'https://bitcoinhoje.io',
    isExternal: true,
  },
] as const
