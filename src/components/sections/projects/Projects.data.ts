import { BitcoinHojeLogo, DolarHojeLogo, PhootoAiLogo } from './Logos'

export interface IProject {
  title: string
  description: string
  icon: React.ElementType
  href: string
}

export const projectData: IProject[] = [
  {
    title: 'PHOOTO.AI',
    description: 'Professional headshots with AI.',
    icon: PhootoAiLogo,
    href: 'https://phooto.ai',
  },
  {
    title: 'Dólar Hoje',
    description: 'Track the price of the commercial dollar and tourism.',
    icon: DolarHojeLogo,
    href: 'https://dolarhoje.io',
  },
  {
    title: 'Bitcoin Hoje',
    description: 'Track the price of Bitcoin and other cryptos.',
    icon: BitcoinHojeLogo,
    href: 'https://bitcoinhoje.io',
  },
] as const
