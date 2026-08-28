import { ImageResponse } from 'next/og';
import { caseStudyMeta } from '@/content/case-study';
import { profile } from '@/content/profile';

export const alt = `Capo — a case study by ${profile.name}`;
// Rendered once at build time — required for the static export.
export const dynamic = 'force-static';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function CaseStudyOpengraphImage() {
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
        Case study · {profile.name}
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
          {caseStudyMeta.title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 34,
            lineHeight: 1.3,
            color: '#a7abbd',
            maxWidth: 940,
          }}
        >
          {caseStudyMeta.subtitle}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          borderTop: '2px solid #2c2e3d',
          paddingTop: 28,
          fontSize: 24,
          color: '#8f7dff',
        }}
      >
        Product design · Frontend engineering · Release
      </div>
    </div>,
    size,
  );
}
