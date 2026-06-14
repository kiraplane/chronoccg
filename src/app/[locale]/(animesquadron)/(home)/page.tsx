import { AnimeSquadronHomePage } from '@/components/animesquadron/home-page';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);

  return constructMetadata({
    title: copy.home.metadataTitle,
    description: copy.home.metadataDescription,
    locale,
    pathname: '',
    image: '/animesquadron/og-image.png',
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <AnimeSquadronHomePage locale={locale} />;
}
