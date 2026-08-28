import { ImageResponse } from 'next/og';
import { profile } from '@/content/profile';

export const alt = `${profile.name} — ${profile.title}`;
// Rendered once at build time — required for the static export.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Generated at build time — one less asset to keep in sync by hand. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0a0a0f',
        padding: '72px 80px',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 24,
          letterSpacing: 4,
          textTransform: 'uppercase',
          color: '#34d3ee',
        }}
      >
        {profile.title} · {profile.availability}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: -6,
            color: '#f3f4f8',
            lineHeight: 1,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 38,
            color: '#a7abbd',
            maxWidth: 900,
          }}
        >
          {profile.lede}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderTop: '2px solid #2c2e3d',
          paddingTop: 28,
          fontSize: 24,
          color: '#8f7dff',
        }}
      >
        <div style={{ display: 'flex' }}>{profile.links.github.label}</div>
        <div style={{ display: 'flex' }}>{profile.email}</div>
      </div>
    </div>,
    size,
  );
}
