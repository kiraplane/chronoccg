import type { TraitPlan } from './types';

export const traitPlans: TraitPlan[] = [
  {
    slug: 'carry-trait',
    title: 'Carry trait first',
    priority: 'Recommended',
    bestTarget: 'Your strongest wave-clear or boss-damage unit',
    useWhen:
      'You know the unit will stay in your first real squad after redeeming codes and doing initial summons.',
    avoid:
      'Do not spend Trait Shards on the first starter unit if you plan to replace it within the same session.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'perfect-cube-stop-rule',
    title: 'Perfect Cube stop rule',
    priority: 'Recommended',
    bestTarget: 'A unit with a confirmed long-term role',
    useWhen:
      'The trait or stat outcome would make that unit your account anchor for several modes.',
    avoid: 'Do not use Perfect Cubes just to fix a temporary roll on filler.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'support-trait',
    title: 'Support trait later',
    priority: 'Situational',
    bestTarget: 'A buffer, control, or utility unit that improves your carry',
    useWhen:
      'Your carry already clears waves and the next wall is timing, safety, or co-op scaling.',
    avoid:
      'Do not trait support before you know which damage unit it is supporting.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'economy-trait',
    title: 'Economy trait only with payoff',
    priority: 'Situational',
    bestTarget: 'A unit that directly improves upgrade tempo in longer modes',
    useWhen:
      'Extra gold or faster upgrades convert into a higher wave or boss clear.',
    avoid: 'Do not hold an economy trait in hard modes if it costs the run.',
    sourceConfidence: 'pending',
  },
  {
    slug: 'stat-reroll-discipline',
    title: 'Stat reroll discipline',
    priority: 'Recommended',
    bestTarget: 'One carry at a time',
    useWhen:
      'You have enough Stat Rerolls to improve a keeper without draining every launch reward.',
    avoid:
      'Do not reroll every squad member once. Focus one result that changes a clear.',
    sourceConfidence: 'medium',
  },
];
