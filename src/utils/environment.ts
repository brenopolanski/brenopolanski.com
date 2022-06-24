export const NODE_ENV = process.env.NODE_ENV

export const isTest = NODE_ENV === 'test'
export const isDev = NODE_ENV === 'development'
export const isProd = NODE_ENV === 'production'

export const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID
