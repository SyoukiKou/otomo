import type { Metadata } from 'next'
import { ProfileSection } from '@/components/profile-section'

export async function generateMetadata({ request }: { request: Request }): Promise<Metadata> {
  const url = new URL(request.url)
  const origin = url.origin
  const canonical = `${origin}/profile`

  return {
    title: 'プロフィール — otomo',
    description: 'otomo の運営者プロフィールとこれまでの実績について。',
    openGraph: {
      title: 'プロフィール — otomo',
      description: 'otomo の運営者プロフィールとこれまでの実績について。',
      url: canonical,
      images: [
        {
          url: `${origin}/og-profile.svg`,
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
