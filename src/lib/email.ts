export const escapeHtml = (value: string): string => {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

export const parseEmailAddress = (value: string): { name: string; email: string } => {
  const match = value.match(/^(.*?)\s*<([^>]+)>\s*$/)

  if (match) {
    return { name: match[1].replaceAll('"', '').trim(), email: match[2].trim() }
  }

  return { name: '', email: value.trim() }
}

export const formatForwardFrom = (originalFrom: string, verifiedFrom: string): string => {
  const { name, email } = parseEmailAddress(originalFrom)
  const label = (name || email).replaceAll('"', '')

  return `${label} <${verifiedFrom}>`
}
