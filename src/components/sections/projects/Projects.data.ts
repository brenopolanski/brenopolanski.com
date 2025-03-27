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
