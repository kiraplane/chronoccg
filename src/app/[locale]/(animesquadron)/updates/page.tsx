import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { updates } from '@/data/animesquadron/updates';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Anime Squadron Updates - Early Access, Codes and Sources',
    description:
      'Track Anime Squadron early access status, June 2026 code waves, official Roblox source checks, Discord notes, and guide update status.',
    locale,
    pathname: '/updates',
    image: '/animesquadron/og-image.png',
  });
}

export default function UpdatesPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Updates</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Updates
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Early-access source notes for codes, official Roblox data,
            community-link status, and guide coverage.
          </p>
        </header>

        <div className="grid gap-4">
          {updates.map((update) => (
            <article
              key={update.slug}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                  {update.publishedAt}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#574033] text-white"
                >
                  {update.source.confidence} confidence
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {update.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {update.summary}
              </p>
              <a
                href={update.source.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[#37D6D0] underline underline-offset-4"
              >
                {update.source.label}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
