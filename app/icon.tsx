import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          fontWeight: 800,
          fontFamily: 'sans-serif',
          borderRadius: '7px',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          position: 'relative',
        }}
      >
        <span style={{ position: 'relative', top: '-1px' }}>L</span>
        <div
          style={{
            position: 'absolute',
            bottom: '4px',
            right: '4px',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#34d399',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
