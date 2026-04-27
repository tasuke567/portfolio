import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#09090b',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: 700,
            fontFamily: 'sans-serif',
            letterSpacing: '-0.05em',
          }}
        >
          W
        </span>
      </div>
    ),
    { ...size }
  )
}
