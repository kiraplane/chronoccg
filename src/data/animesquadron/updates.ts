import { CHECKED_AT, sources } from './sources';
import type { GameUpdate } from './types';

export const updates: GameUpdate[] = [
  {
    slug: 'early-access-snapshot',
    title: 'Early Access Roblox snapshot',
    publishedAt: CHECKED_AT,
    summary:
      'Anime Squadron is listed on Roblox as [Early Access] Anime Squadron by Komplex Studio, with Strategy and Tower Defense genre labels.',
    source: sources.robloxApi,
  },
  {
    slug: 'june-2026-code-wave',
    title: 'June 2026 code wave',
    publishedAt: CHECKED_AT,
    summary:
      'Multiple Roblox code outlets track active launch rewards including Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes.',
    source: sources.beebomCodes,
  },
  {
    slug: 'wiki-trello-discord-state',
    title: 'Community links still forming',
    publishedAt: '2026-06-08',
    summary:
      'Public code coverage notes that an official Wiki or Trello was not available during the checked launch window, so players should treat Discord and Roblox as the primary official channels.',
    source: sources.destructoidCodes,
  },
];
