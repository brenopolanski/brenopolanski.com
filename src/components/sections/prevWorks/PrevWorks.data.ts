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
    icon: DefiMoneyLogo,
    title: 'defi.money',
    description: 'Welcome to a new era of $MONEY.',
    href: 'https://github.com/defidotmoney',
    isExternal: true,
  },
  {
    icon: LlamaFolioLogo,
    title: 'LlamaFolio',
    description: 'DeFi portfolio tracker.',
    href: 'https://github.com/llamafolio',
    isExternal: true,
  },
  {
    icon: LlamaNodesLogo,
    title: 'LlamaNodes',
    description: 'Fast and private RPC infra designed for Web3.',
    href: 'https://github.com/llamanodes',
    isExternal: true,
  },
  {
    icon: ArkEcosystemLogo,
    title: 'ARK Ecosystem',
    description: 'A blockchain ecosystem built for everyone.',
    href: 'https://github.com/ArkEcosystem',
    isExternal: true,
  },
  {
    icon: SaikuLogo,
    title: 'Saiku Analytics',
    description: 'The worlds greatest open source OLAP browser.',
    href: 'https://github.com/OSBI/saiku',
    isExternal: true,
  },
] as const
