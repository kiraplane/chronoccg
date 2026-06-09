import { FaqSection } from '@/components/animesquadron/faq-section';
import {
  ConfidenceBadge,
  TierBadge,
} from '@/components/animesquadron/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gameModes } from '@/data/animesquadron/game-modes';
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
    title: 'Anime Squadron Game Modes - Waves, Bosses, Co-op and Ranks',
    description:
      'Plan Anime Squadron game modes: story waves, boss challenges, co-op with friends, rank pushes, reward timing, and first squad priorities.',
    locale,
    pathname: '/game-modes',
    image: '/animesquadron/og-image.png',
  });
}

export default function GameModesPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: gameModes.map((mode, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: mode.name,
      description: mode.firstGoal,
    })),
  };

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">Game Modes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Anime Squadron Game Modes
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            Different modes test different problems. Waves test your carry,
            bosses test burst, co-op tests role splitting, and ranks should wait
            for stable launch data.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {gameModes.map((mode) => (
            <article
              key={mode.slug}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <TierBadge tier={mode.priority} />
                <ConfidenceBadge confidence={mode.sourceConfidence} />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {mode.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {mode.firstGoal}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {mode.bestFor.map((item) => (
                  <Badge
                    key={item}
                    variant="outline"
                    className="border-[#574033] text-[#FFF5EA]"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[#D5C6B7]">
                {mode.notes.map((note) => (
                  <li key={note}>- {note}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/guides/game-modes-rewards-guide">
              Read mode guide
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/units">Plan units</LocaleLink>
          </Button>
        </div>

        <FaqSection
          items={[
            {
              question: 'Which mode should beginners play first?',
              answer:
                'Start with wave or story progression to learn lanes, placement, and upgrade timing.',
            },
            {
              question: 'When should I build boss damage?',
              answer:
                'Build boss damage once normal waves are stable and bulky enemies become the real wall.',
            },
            {
              question: 'Is co-op worth playing?',
              answer:
                'Yes, especially when players split damage, control, support, and economy roles cleanly.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
