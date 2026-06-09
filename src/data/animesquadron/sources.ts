import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-09';

export const sources = {
  robloxGame: {
    type: 'official',
    label: 'Roblox game page',
    url: 'https://www.roblox.com/games/71132543521245/Anime-Squadron',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Official store page for the public game identity, creator, genre, and official play link.',
  },
  robloxApi: {
    type: 'api',
    label: 'Roblox games API snapshot',
    url: 'https://games.roblox.com/v1/games?universeIds=8356066619',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for early-access title, creator Komplex Studio, root place id, max players, Strategy/Tower Defense genre, and store description.',
  },
  beebomCodes: {
    type: 'guide_site',
    label: 'Beebom Anime Squadron codes',
    url: 'https://beebom.com/anime-squadron-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Updated June 9, 2026. Used as a code and redeem-flow cross-check, not copied as article prose.',
  },
  destructoidCodes: {
    type: 'guide_site',
    label: 'Destructoid Anime Squadron codes',
    url: 'https://www.destructoid.com/anime-squadron-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Published June 8, 2026. Used for early demand, code overlap, and community-link caution.',
  },
  proGameGuidesCodes: {
    type: 'guide_site',
    label: 'Pro Game Guides Anime Squadron codes',
    url: 'https://progameguides.com/roblox/anime-squadron-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Updated June 8, 2026. Used for code overlap and launch-stage search demand.',
  },
  rolimonsGroup: {
    type: 'community',
    label: 'Komplex Studio Roblox group cross-check',
    url: 'https://www.rolimons.com/group/9190691',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used only as a public creator/group identity cross-check.',
  },
} satisfies Record<string, DataSource>;

export const officialGameFacts = {
  name: 'Anime Squadron',
  robloxTitle: '[Early Access] Anime Squadron',
  siteName: 'Anime Squadron Wiki',
  domain: 'https://www.animesquadron.wiki',
  developer: 'Komplex Studio',
  publisher: 'Komplex Studio',
  launchStatus: 'Early Access',
  rootPlaceId: '71132543521245',
  universeId: '8356066619',
  maxPlayers: 16,
  genre: ['Strategy', 'Tower Defense', 'Lane Battler'],
  officialRobloxUrl:
    'https://www.roblox.com/games/71132543521245/Anime-Squadron',
  officialWebsiteUrl:
    'https://www.roblox.com/games/71132543521245/Anime-Squadron',
  primarySource: sources.robloxGame,
};
