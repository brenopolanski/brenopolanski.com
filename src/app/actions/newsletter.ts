export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await fetch('/api/newsletter/subscribe', {
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to subscribe')
    }

    return { message: data.message, success: true }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return {
      error: error instanceof Error ? error.message : 'Failed to subscribe',
      success: false,
    }
  }
}
