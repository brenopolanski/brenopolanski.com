import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { siteConfig } from '@/config/site'

export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const Image = async () => {
  const photo = await readFile(join(process.cwd(), 'public/breno-polanski.png'))
  const photoSrc = `data:image/png;base64,${photo.toString('base64')}`

  return new ImageResponse(
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
          alt={siteConfig.name}
          height="160"
          src={photoSrc}
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
    </div>,
    { ...size },
  )
}

export default Image
