import type { Metadata } from 'next'
import { ProfileSection } from '@/components/profile-section'
import { absoluteUrl, getRequestOrigin } from '@/lib/seo'

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getRequestOrigin()
  const canonical = absoluteUrl(origin, '/profile')

  return {
    title: 'プロフィール — otomo',
    description: 'otomo の運営者プロフィールとこれまでの実績について。',
    openGraph: {
      title: 'プロフィール — otomo',
      description: 'otomo の運営者プロフィールとこれまでの実績について。',
      url: canonical,
      images: [
        {
          url: absoluteUrl(origin, '/og-profile.svg'),
          width: 1200,
          height: 630,
          alt: 'otomo プロフィール',
        },
      ],
      type: 'profile',
    },
    alternates: {
      canonical,
    },
  }
}

export default function ProfilePage() {
  return (
    <main>
      <ProfileSection />
    </main>
  )
}
