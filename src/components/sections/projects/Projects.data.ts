import { BitcoinHojeLogo, DolarHojeLogo, PhootoAILogo } from '@/components/Logos'

export interface IProject {
  title: string
  description: string
  icon: React.ElementType
  href: string
  isExternal?: boolean
}

export const projectData: IProject[] = [
  {
    title: 'PHOOTO.AI',
    description: 'Professional headshots with AI.',
    icon: PhootoAILogo,
    href: 'https://phooto.ai',
    isExternal: true,
  },
  {
    title: 'Dólar Hoje',
    description: 'Track the price of the commercial dollar and tourism.',
    icon: DolarHojeLogo,
    href: 'https://dolarhoje.io',
    isExternal: true,
  },
  {
    title: 'Bitcoin Hoje',
    description: 'Track the price of Bitcoin and other cryptos.',
    icon: BitcoinHojeLogo,
    href: 'https://bitcoinhoje.io',
    isExternal: true,
  },
] as const
