import { ArkEcosystemLogo, DefiMoneyLogo, LlamaFolioLogo, LlamaNodesLogo, SaikuLogo } from '@/components/Logos'

export interface IPrevWork {
  title: string
  description: string
  href: string
  icon: React.ElementType
  isExternal?: boolean
}

export const prevWorksData: IPrevWork[] = [
  {
    title: 'defi.money',
    description: 'Welcome to a new era of $MONEY.',
    icon: DefiMoneyLogo,
    href: 'https://github.com/defidotmoney',
    isExternal: true,
  },
  {
    title: 'LlamaFolio',
    description: 'DeFi portfolio tracker.',
    icon: LlamaFolioLogo,
    href: 'https://github.com/llamafolio',
    isExternal: true,
  },
  {
    title: 'LlamaNodes',
    description: 'Fast and private RPC infra designed for Web3.',
    icon: LlamaNodesLogo,
    href: 'https://github.com/llamanodes',
    isExternal: true,
  },
  {
    title: 'ARK Ecosystem',
    description: 'A blockchain ecosystem built for everyone.',
    icon: ArkEcosystemLogo,
    href: 'https://github.com/ArkEcosystem',
    isExternal: true,
  },
  {
    title: 'Saiku Analytics',
    description: 'The worlds greatest open source OLAP browser.',
    icon: SaikuLogo,
    href: 'https://github.com/OSBI/saiku',
    isExternal: true,
  },
] as const
