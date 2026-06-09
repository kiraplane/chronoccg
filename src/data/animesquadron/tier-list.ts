import type { UnitRoleRanking } from './types';

export const unitRoleRankings: UnitRoleRanking[] = [
  {
    slug: 'main-carry',
    role: 'Main Carry',
    tier: 'Recommended',
    earlyValue: 'High',
    longTermValue: 'High',
    rerollCost: 'High',
    bestFor: ['Story waves', 'Boss pressure', 'First serious traits'],
    decision:
      'Build one main carry before spreading trait shards and stat rerolls across the whole squad.',
    buildNotes: [
      'Prioritize the unit that clears waves without needing constant replacement.',
      'Give the carry your first serious trait or stat reroll attempt.',
      'Stop upgrading filler once the carry can push the next reward breakpoint.',
    ],
    avoid:
      'Do not spend Perfect Cubes on a unit just because it is your first pull.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'boss-damage',
    role: 'Boss Damage',
    tier: 'Recommended',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Boss waves', 'Timed challenges', 'Late wave cleanup'],
    decision:
      'Keep a boss-focused damage slot ready once normal waves stop being the only problem.',
    buildNotes: [
      'Look for strong single-target output or burst windows.',
      'Pair boss damage with control so it has time to work.',
      'Upgrade after your main carry is stable.',
    ],
    avoid:
      'Do not make boss damage your first investment if basic wave clears still fail.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'control',
    role: 'Control',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Low',
    bestFor: ['Wave stalls', 'Crowded lanes', 'Co-op support'],
    decision:
      'Use control when enemies reach the end before your damage units can finish the lane.',
    buildNotes: [
      'Control is strongest when it protects a carry, not when it replaces one.',
      'Avoid over-upgrading control before damage is solved.',
      'Check whether the mode rewards faster clears or safer clears.',
    ],
    avoid:
      'Do not chase perfect control traits on a unit that only appears in easy stages.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'economy',
    role: 'Economy',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'Medium',
    rerollCost: 'Low',
    bestFor: ['Gold flow', 'Upgrade tempo', 'Long wave modes'],
    decision:
      'Economy units matter when they convert into earlier upgrades, but they are not a substitute for damage.',
    buildNotes: [
      'Use economy only if it helps you place or upgrade the carry sooner.',
      'Cut economy investment when a boss or leak becomes the real wall.',
      'Treat economy traits as account-stage tools.',
    ],
    avoid:
      'Do not keep an economy unit on the field if the lane is already leaking.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'support',
    role: 'Support',
    tier: 'Situational',
    earlyValue: 'Low',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Carry buffs', 'Team scaling', 'Co-op clears'],
    decision:
      'Support gets better after you know which carry, mode, or lane setup it is improving.',
    buildNotes: [
      'Build support around a proven carry.',
      'Prefer repeatable buffs over flashy effects you cannot trigger reliably.',
      'Save premium rerolls until support value is visible in harder stages.',
    ],
    avoid:
      'Do not upgrade support first if it only improves weak starter damage.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'starter-filler',
    role: 'Starter Filler',
    tier: 'Data Pending',
    earlyValue: 'Low',
    longTermValue: 'Low',
    rerollCost: 'Low',
    bestFor: ['Opening waves', 'Temporary slots', 'Learning placement'],
    decision:
      'Use filler to start playing, then replace it as soon as your codes and summons produce a better role.',
    buildNotes: [
      'Keep upgrades minimal unless the unit unlocks a real stage breakpoint.',
      'Use filler to test maps and lane pressure.',
      'Retire it before spending scarce rerolls.',
    ],
    avoid: 'Do not confuse early availability with long-term priority.',
    sourceConfidence: 'medium',
  },
];

export const recommendedRoles = unitRoleRankings.filter(
  (entry) => entry.tier === 'Recommended'
);
