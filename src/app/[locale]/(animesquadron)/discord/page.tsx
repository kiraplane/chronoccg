import { FaqSection } from '@/components/animesquadron/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getAnimeSquadronCopy } from '@/data/animesquadron/localized-copy';
import { officialGameFacts, sources } from '@/data/animesquadron/sources';
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
    title: copy.discord.metadataTitle,
    description: copy.discord.metadataDescription,
    locale,
    pathname: '/discord',
    image: '/animesquadron/og-image.png',
  });
}

export default async function DiscordPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getAnimeSquadronCopy(locale);
  const cardLinks = [
    officialGameFacts.officialRobloxUrl,
    sources.destructoidCodes.url,
    sources.destructoidCodes.url,
  ];

  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#37D6D0] text-[#041414]">
            {copy.discord.badge}
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            {copy.discord.h1}
          </h1>
          <p className="text-lg leading-8 text-[#D5C6B7]">
            {copy.discord.intro}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {copy.discord.cards.map((item, index) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-5"
            >
              <Badge className="bg-[#E03A22] text-[#FFF5EA]">
                {item.status}
              </Badge>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#D5C6B7]">
                {item.body}
              </p>
              <a
                href={cardLinks[index]}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[#37D6D0] underline underline-offset-4"
              >
                {copy.discord.sourceCheck}
              </a>
            </article>
          ))}
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E03A22] text-[#FFF5EA] hover:bg-[#FF5538]"
          >
            <LocaleLink href="/guides/discord-trello-wiki-guide">
              {copy.discord.guideButton}
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">
              {copy.discord.downloadButton}
            </LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/codes">{copy.discord.codesButton}</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/tier-list">{copy.discord.tierButton}</LocaleLink>
          </Button>
        </div>

        <section className="rounded-lg border border-[#3A2A24] bg-[#130D0B] p-6">
          <h2 className="font-display text-2xl font-bold">
            {copy.discord.usageHeading}
          </h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#D5C6B7] md:grid-cols-3">
            {copy.discord.usagePoints.map((item) => (
              <p key={item.label}>
                <strong className="text-[#FFF5EA]">{item.label}</strong>{' '}
                {item.body}
              </p>
            ))}
          </div>
        </section>

        <FaqSection items={copy.discord.faqs} />
      </Container>
    </div>
  );
}
