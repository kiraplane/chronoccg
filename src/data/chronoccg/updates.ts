import { CHECKED_AT } from './sources';
import type { GameUpdate } from './types';

export const updates: GameUpdate[] = [
  {
    slug: 'july-2026-midseason-patch',
    title: 'July 2026 Midseason Patch',
    publishedAt: '2026-07-16',
    summary:
      'The official midseason patch adds Draft reconnect support, updates several card-choice and Strike animations, and fixes interactions involving Decay, Revive, Bloodlust, Graveyard discounts, Temporary, Muffle, Deplete, Rewind, Voiceless Sky, Army of the Sun and summoned blockers. Re-check Draft and deck advice against the current client before relying on older interaction assumptions.',
    source: {
      type: 'official',
      label: 'July Midseason Patch - Maintenance',
      url: 'https://steamcommunity.com/games/4221310/announcements/detail/1838407329256778',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'july-2026-dev-update',
    title: 'July 2026 Dev Update - Trials, Tournaments, and Cadence',
    publishedAt: '2026-07-04',
    summary:
      'Official July dev notes say Chrono passed 10,000 players in its first beta week, will run new Seasons at the start of each month with 6 new Core Set cards, then follow with a Mid-Season Update about two weeks later. Trials mode, the first tournament, deck-builder wildcard purchasing, clearer Daily Quests, and pack-tab improvements are now the next watch items for decks, card list, and meta pages.',
    source: {
      type: 'official',
      label: 'July 2026 Dev Update',
      url: 'https://playchrono.com/news/july-2026-dev-update',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'patch-0-7-8-bug-fixes-and-compensation',
    title: 'Patch 0.7.8 - Bug Fixes and Compensation',
    publishedAt: '2026-07-03',
    summary:
      'Official notes add missing Draft Tickets, Daily Double packs, Kickstarter cosmetics, and Season Track ownership where eligible. The same patch also changes Future Sight handling, Draft stability, chain timing when the timer expires, dynamic previews, and a long list of card interaction bugs. Treat decks, Draft advice, and card pages as live-watch surfaces after this patch.',
    source: {
      type: 'official',
      label: 'Patch 0.7.8 - Bug Fixes and Compensation',
      url: 'https://playchrono.com/news/patch-072-bug-fixes-and-compensation',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'patch-0-7-1-beta-season-2-update',
    title: 'Patch 0.7.1 - Beta Season 2 Update',
    publishedAt: '2026-07-01',
    summary:
      'Beta Season 2 introduces six new cards, rank resets by two ranks, a Season Track, shop bundles, card backs, cosmetics, and balance changes. The important player-facing action is to re-check deck plans, card list pages, and meta notes before crafting around old beta assumptions.',
    source: {
      type: 'official',
      label: 'Patch 0.7.1 - Beta Season 2 Update',
      url: 'https://playchrono.com/news/july-season-update',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'beta-season-2-begins',
    title: 'Beta Season 2 Begins',
    publishedAt: '2026-07-02',
    summary:
      'Steam now lists Beta Season 2 as the latest regular Chrono CCG update. Treat deck, card-list, and meta pages as live-watch surfaces while creator stream codes remain source-checked rather than game-tested.',
    source: {
      type: 'store',
      label: 'Chrono CCG on Steam - Beta Season 2 Begins',
      url: 'https://store.steampowered.com/app/4221310/Chrono_CCG/',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'patch-0-6-11-welcome-to-beta',
    title: 'Patch 0.6.11 - Welcome to Beta',
    publishedAt: '2026-06-23',
    summary:
      'Open beta began with account and collection wipes, UI improvements, no further wipes planned, Nameless Spirit text changes, bug fixes, reward emails, and creator code drops.',
    source: {
      type: 'official',
      label: 'Patch 0.6.11 - Welcome to Beta',
      url: 'https://playchrono.com/news/welcome-to-beta',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'steam-release',
    title: 'Steam release and open beta',
    publishedAt: '2026-06-23',
    summary:
      'Steam lists Chrono CCG as free to play and released on June 23, 2026. The Early Access section says players can build decks, queue ladder or direct matches, test against the computer, and play draft mode.',
    source: {
      type: 'store',
      label: 'Chrono CCG on Steam',
      url: 'https://store.steampowered.com/app/4221310/Chrono_CCG/',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
  {
    slug: 'official-rules-live',
    title: 'Official rules and tutorial path',
    publishedAt: '2026-06-23',
    summary:
      'The official beta patch tells new players to read the website rules and use tutorial videos because beta does not yet have an in-game tutorial.',
    source: {
      type: 'official',
      label: 'Official Chrono rules',
      url: 'https://playchrono.com/rules',
      checkedAt: CHECKED_AT,
      confidence: 'high',
    },
  },
];
