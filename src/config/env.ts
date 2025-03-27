export const ENV = {
  NODE_ENV: process.env.NODE_ENV,
  RESEND: {
    API_KEY: process.env.RESEND_API_KEY,
  },
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://brenopolanski.com',
}

interface IValidateEnvParams {
  name: string
  value: string | undefined
}

export const validateEnv = ({ name, value }: IValidateEnvParams) => {
  if (!value) {
    throw new Error(`${name} env variable not defined!`)
  }
}

export const isTest = ENV.NODE_ENV === 'test'
export const isDev = ENV.NODE_ENV === 'development'
export const isProd = ENV.NODE_ENV === 'production'
