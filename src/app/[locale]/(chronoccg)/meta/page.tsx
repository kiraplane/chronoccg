import { FaqSection } from '@/components/chronoccg/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { deckArchetypes, metaSignals } from '@/data/chronoccg/decks';
import { officialGameFacts } from '@/data/chronoccg/sources';
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
  return constructMetadata({
    title: 'Chrono CCG Meta - Decks, Cards and Beta Tier Watch',
    description:
      'Use the Chrono CCG meta hub to compare beta deck signals, card-list checks, deck tools, and tier-list watch notes without treating early rankings as final.',
    locale,
    pathname: '/meta',
    image: '/chronoccg/og-image.jpg',
  });
}

export default function MetaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Chrono CCG Meta',
    url: `${officialGameFacts.domain}/meta`,
  };

  return (
    <div className="bg-[#0A0D10] py-12 text-[#FFF5E1]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-4xl space-y-4">
          <Badge className="bg-[#63E6DD] text-[#051316]">Beta meta</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Chrono CCG Meta
          </h1>
          <p className="text-[#D8CDBA] text-lg leading-8">
            Chrono CCG is still early enough that a fake final tier list would
            mislead players. Use this page as the practical meta route: pick a
            deck job, check the card pool, test the list rules, then use the
            tier watch for current confidence.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B8442A] text-[#FFF5E1] hover:bg-[#D85C39]"
            >
              <LocaleLink href="/decks">Decks</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/tier-list">Tier List Watch</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/tools/deck-checker">Deck Checker</LocaleLink>
            </Button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          {metaSignals.map((signal) => (
            <LocaleLink
              key={signal.label}
              href={signal.route}
              className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5 transition hover:border-[#63E6DD]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-display text-2xl font-bold">
                  {signal.label}
                </h2>
                <Badge
                  variant="outline"
                  className="border-[#3B3128] text-[#D8CDBA]"
                >
                  {signal.status}
                </Badge>
              </div>
              <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                {signal.summary}
              </p>
            </LocaleLink>
          ))}
        </section>

        <section>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge className="bg-[#D9A84E] text-[#151006]">
                Deck signals
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-black md:text-4xl">
                Current jobs to compare
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/cards">Card Database</LocaleLink>
            </Button>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {deckArchetypes.map((deck) => (
              <article
                key={deck.slug}
                className="rounded-lg border border-[#3B3128] bg-[#14100D] p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="bg-[#B8442A] text-[#FFF5E1]">
                    {deck.difficulty}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#3B3128] text-[#D8CDBA]"
                  >
                    {deck.syndicates.join(' / ')}
                  </Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  {deck.name}
                </h3>
                <p className="mt-3 text-[#D8CDBA] text-sm leading-7">
                  {deck.plan}
                </p>
                <p className="mt-3 text-[#D9A84E] text-sm leading-6">
                  Watch: {deck.watchFor}
                </p>
              </article>
            ))}
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is this a final Chrono CCG tier list?',
              answer:
                'No. It is a beta meta hub. Use it to move between decks, card data, tools, and the tier-list watch while balance is still changing.',
            },
            {
              question: 'What should I check before copying a deck?',
              answer:
                'Check Diver access, card count, curve shape, and whether the deck solves the job you need: early pressure, board growth, control, burn, bleed, or value.',
            },
            {
              question: 'Where should new meta searches go?',
              answer:
                'Deck-specific searches should start on Decks, card-name searches should start on Cards, and ranking searches should start on the Tier List Watch.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
