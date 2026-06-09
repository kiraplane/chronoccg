import type { GameMode } from './types';

export const gameModes: GameMode[] = [
  {
    slug: 'story-waves',
    name: 'Story and wave clears',
    priority: 'Recommended',
    bestFor: ['First gems', 'Learning lanes', 'Unlock pacing'],
    firstGoal:
      'Push until the first clear wall, then upgrade one carry instead of spreading every unit.',
    notes: [
      'Official copy describes nonstop enemy waves and lane-battler strategy.',
      'Use early story clears to learn placement, upgrade timing, and boss pressure.',
      'Stop when losses or leaks show that your carry needs work.',
    ],
    sourceConfidence: 'high',
  },
  {
    slug: 'boss-challenges',
    name: 'Boss challenges',
    priority: 'Situational',
    bestFor: ['Damage checks', 'Trait value tests', 'Late wave pressure'],
    firstGoal:
      'Bring a boss-damage plan only after your normal wave clear is stable.',
    notes: [
      'The Roblox description calls out massive bosses and epic challenges.',
      'Boss modes expose weak single-target damage faster than normal waves.',
      'Control and burst damage usually matter more than extra filler slots.',
    ],
    sourceConfidence: 'medium',
  },
  {
    slug: 'co-op',
    name: 'Co-op with friends',
    priority: 'Situational',
    bestFor: ['Shared clears', 'Role splitting', 'Safer experiments'],
    firstGoal:
      'Split roles so one player brings carry damage while another covers support or control.',
    notes: [
      'Official store copy mentions teaming up with friends.',
      'Co-op can make support and control units easier to justify.',
      'Do not let co-op hide a weak solo carry if you still need solo progression.',
    ],
    sourceConfidence: 'high',
  },
  {
    slug: 'rank-push',
    name: 'Rank and leaderboard push',
    priority: 'Data Pending',
    bestFor: ['Competitive routing', 'Endgame testing', 'Meta checks'],
    firstGoal:
      'Wait for stable launch data before spending only for leaderboard pressure.',
    notes: [
      'The official description mentions climbing ranks.',
      'Early-access rank data can shift quickly after balance updates.',
      'Keep a conservative spend plan until top squads become visible.',
    ],
    sourceConfidence: 'medium',
  },
];
