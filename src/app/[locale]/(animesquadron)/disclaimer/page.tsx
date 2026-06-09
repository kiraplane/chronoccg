import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
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
    title: 'Disclaimer | Anime Squadron Wiki',
    description: 'Unofficial fan-made site disclaimer for Anime Squadron Wiki.',
    locale,
    pathname: '/disclaimer',
    image: '/animesquadron/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#090706] py-12 text-[#FFF5EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <Badge className="bg-[#37D6D0] text-[#041414]">Disclaimer</Badge>
        <h1 className="font-display text-4xl font-black md:text-6xl">
          Anime Squadron Wiki Disclaimer
        </h1>
        <div className="space-y-4 text-sm leading-7 text-[#D5C6B7]">
          <p>
            Anime Squadron Wiki is an unofficial fan-made guide site. It is not
            affiliated with, endorsed by, sponsored by, or operated by Roblox,
            Komplex Studio, or the Anime Squadron development team.
          </p>
          <p>
            Anime Squadron, Roblox, related names, artwork, screenshots, and
            trademarks belong to their respective owners. Official game assets
            are used only as reference signals for an unofficial guide wiki.
          </p>
          <p>
            Guides are written from public source checks and may change after
            updates. This site does not provide scripts, exploits, executors,
            modified clients, unsafe APKs, or fake official claims.
          </p>
        </div>
      </Container>
    </div>
  );
}
