import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/animesquadron/faq-section';
import { TierListTable } from '@/components/animesquadron/tier-list-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import { unitRoleRankings } from '@/data/animesquadron/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);
  return constructMetadata({
    title: copy.tierList.metadataTitle,
    description: copy.tierList.metadataDescription,
    locale,
    pathname: '/tier-list',
    image: '/animesquadron/og-image.png',
  });
}

export default async function TierListPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: unitRoleRankings.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.role,
      description: entry.decision,
    })),
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">
            {copy.tierList.badge}
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            {copy.tierList.h1}
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            {copy.tierList.intro}
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#3A2A24] bg-[#130D0B] py-4"
          label
        />

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.tierList.rankingHeading}
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            {copy.tierList.rankingPoints.map((point) => (
              <p key={point.label}>
                <strong className="text-[#FFF5EA]">{point.label}</strong>{' '}
                {point.body}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
            >
              <LocaleLink href="/units">{copy.tierList.unitsButton}</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">
                {copy.tierList.traitsButton}
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.tierList.routeHeading}
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            {copy.tierList.routePoints.map((point) => (
              <p key={point.label}>
                <strong className="text-[#FFF5EA]">{point.label}</strong>{' '}
                {point.body}
              </p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <LocaleLink href="/guides/best-units-tier-list">
                {copy.tierList.bestUnitsButton}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/secret-units-guide">
                {copy.tierList.secretUnitsButton}
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/codes">{copy.tierList.codesButton}</LocaleLink>
            </Button>
          </div>
        </section>

        <TierListTable labels={copy.tierList.tierLabels} />
        <AdsterraAdFrame slot="banner-300x250" label />

        <FaqSection items={copy.tierList.faqs} />
      </Container>
    </div>
  );
}
