import { blankToUndefined } from '@/lib/utils'

export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  RESEND: {
    API_KEY: process.env.RESEND_API_KEY,
    AUDIENCE_ID: process.env.RESEND_AUDIENCE_ID,
  },
}

interface ValidateEnvParams {
  name: string
  value: string | undefined
}

export const validateEnv = ({ name, value }: ValidateEnvParams) => {
  if (!blankToUndefined(value)) {
    throw new Error(`The ${name} environment variable is not defined!`)
  }
}

export const isTest = ENV.NODE_ENV === 'test'
export const isDev = ENV.NODE_ENV === 'development'
export const isProd = ENV.NODE_ENV === 'production'
