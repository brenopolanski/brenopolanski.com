/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'

import { siteConfig } from '@/config/site'

export const runtime = 'edge'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: siteConfig.themeColor.dark,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            padding: '40px 80px',
            width: '100%',
          }}
        >
          {/* Profile Section */}
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <img
              alt="Breno Polanski"
              height="160"
              src={`${siteConfig.url}/apple-touch-icon.png`}
              style={{
                borderRadius: '16px',
              }}
              width="160"
            />
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <h1
                style={{
                  color: 'white',
                  fontSize: '56px',
                  fontWeight: 'bold',
                  margin: 0,
                }}
              >
                {siteConfig.name}
              </h1>
              <p
                style={{
                  color: '#9F9FA9',
                  fontSize: '28px',
                  margin: 0,
                  maxWidth: '600px',
                }}
              >
                {siteConfig.description}
              </p>
            </div>
          </div>

          {/* Bottom Links */}
          <div
            style={{
              bottom: '40px',
              display: 'flex',
              gap: '16px',
              position: 'absolute',
            }}
          >
            <p
              style={{
                color: '#666666',
                fontSize: '20px',
                margin: 0,
              }}
            >
              {siteConfig.url.replace('https://', '')}
            </p>
          </div>
        </div>
      ),
      {
        height: 630,
        width: 1200,
      },
    )
  } catch (error) {
    console.error(error)
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
