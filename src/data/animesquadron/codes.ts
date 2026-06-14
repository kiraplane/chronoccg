import { sources } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-06-15';

const threeSourceLabel = `${sources.beebomCodes.label}, ${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}`;
const inactiveConflictLabel = `${sources.destructoidCodes.label}, ${sources.proGameGuidesCodes.label}; ${sources.beebomCodes.label} still lists it`;

export const codes: GameCode[] = [
  {
    code: 'Tysm30KCCU!',
    reward: '2,000 Gems, 5,000 Gold, 50 Trait Shards, and 30 Reroll Cubes',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Newest CCU milestone code found across Beebom, Destructoid, and Pro Game Guides during the June 15 source check.',
  },
  {
    code: 'Release!',
    reward: '1,000 Gems, 5,000 Gold, 100 Trait Shards, and 30 Reroll Cubes',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Release code cross-checked across three current June 2026 code trackers.',
  },
  {
    code: 'CRAZYSUPPORT!',
    reward: '2,000 Gems, 25 Trait Shards, and 8,000 Gold',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Current support milestone code listed by all three checked code trackers.',
  },
  {
    code: 'EverythingIsPartOfMyPlan!',
    reward: '25 Trait Shards',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Trait Shard code listed as active across the current June 2026 source check.',
  },
  {
    code: 'Yokoso!',
    reward: '3 Perfect Cubes',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Perfect Cube code listed as active across the current June 2026 source check.',
  },
  {
    code: 'SorryForLongMaintenance!',
    reward: '1,000 Gems, 50 Trait Shards, and 2,000 Gold',
    status: 'active',
    firstSeen: '2026-06-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: threeSourceLabel,
    notes:
      'Maintenance compensation code listed as active across Beebom, Destructoid, and Pro Game Guides.',
  },
  {
    code: 'Tysm10kCCU!',
    reward: '3,500 Gems, 50 Trait Shards, and 3 Perfect Cubes',
    status: 'expired',
    firstSeen: '2026-06-11',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because Destructoid and Pro Game Guides list it as expired or inactive, while Beebom still lists it active.',
  },
  {
    code: 'SorryForChanges!',
    reward: '20 Trait Shards and 10 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-11',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: '1kLikes!',
    reward: '2,000 Gems, 20 Trait Shards, and 30 Stat Rerolls',
    status: 'expired',
    firstSeen: '2026-06-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'SorryForBugs!',
    reward: '1,000 Gems, 2,000 Gold, 20 Trait Shards, and Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-09',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive. Reward quantity differs by tracker, so in-game text would be final.',
  },
  {
    code: '500Interested!',
    reward: '3,000 Gold, 500 Gems, and 15 Trait Shards',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'Tysm5kCCU!',
    reward: '2,500 Gems, 5,000 Gold, 50 Trait Shards, and 2 Perfect Cubes',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'SorryForDelay!',
    reward: '20 Trait Shards, 10 Reroll Cubes, and 1,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'EarlyAccess!',
    reward: '100 Trait Shards, 300 Gems, 30 Reroll Cubes, and 5,000 Gold',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'ThankYouEA!',
    reward: '200 Gold and 2,000 Gems',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: '10KMembers!',
    reward: '25 Trait Shards and 1 Perfect Cube',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
  {
    code: 'ThanksForSupport!',
    reward: 'Trait Shards and 25 Reroll Cubes',
    status: 'expired',
    firstSeen: '2026-06-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: inactiveConflictLabel,
    notes:
      'Moved out of active because two current checked sources list it inactive.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'active');
export const expiredCodes = codes.filter((code) => code.status === 'expired');
export const watchCodes = codes.filter((code) => code.status === 'watch');

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status: `${activeCodes.length} active codes tracked`,
  sourcesChecked: [
    sources.robloxGame,
    sources.beebomCodes,
    sources.destructoidCodes,
    sources.proGameGuidesCodes,
  ],
  reviewNotes: [
    'Anime Squadron codes are case-sensitive; copy them exactly, including punctuation.',
    'Redeem the six currently cross-checked release codes before older milestone codes.',
    'Older launch codes were moved out of the active table because two current sources list them inactive.',
    'Use codes before rerolling traits or stats so the free shards, cubes, gems, and gold shape your first real spend.',
    'If a code fails, rejoin a fresh server and retry before assuming it is expired.',
  ],
};
