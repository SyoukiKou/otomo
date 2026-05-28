import type { Metadata } from 'next'
import { ProfileSection } from '@/components/profile-section'

export const metadata: Metadata = {
  title: 'プロフィール — otomo',
  description: 'otomo の運営者プロフィールとこれまでの実績について。',
  openGraph: {
    title: 'プロフィール — otomo',
    description: 'otomo の運営者プロフィールとこれまでの実績について。',
    url: `${process.env.SITE_URL || 'https://example.com'}/profile`,
    images: [
      {
        url: `${process.env.SITE_URL || 'https://example.com'}/og-profile.svg`,
        width: 1200,
        height: 630,
        alt: 'otomo プロフィール',
      },
    ],
    type: 'profile',
  },
  alternates: {
    canonical: `${process.env.SITE_URL || 'https://example.com'}/profile`,
  },
}

export default function ProfilePage() {
  return (
    <main>
      <ProfileSection />
    </main>
  )
}
