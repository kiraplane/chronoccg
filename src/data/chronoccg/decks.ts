import type { DeckArchetype, MetaSignal } from './types';

export const deckArchetypes: DeckArchetype[] = [
  {
    slug: 'midseason-big-lifeblood',
    name: 'Midseason Big Lifeblood',
    syndicates: ['Lifeblood'],
    difficulty: 'Intermediate',
    plan: 'Build toward a real board payoff with Harbinger of Power, Evolution Incarnate, and the cheaper Symbiosis instead of relying on a slow control shell to win by default.',
    whyItMatters:
      'Patch 0.7.11 moved Harbinger to 6/5, Evolution Incarnate to 7/6, and Symbiosis from 6 to 5 cost. Those are direct incentives to retest a larger Lifeblood curve.',
    watchFor:
      'Do not fill the top of the curve with every buffed card. Keep enough early agents and interaction to reach the payoff turn with a board.',
    sourceConfidence: 'high',
    relatedRoutes: ['/updates', '/cards', '/tools/deck-checker'],
  },
  {
    slug: 'midseason-board-deplete',
    name: 'Midseason Board Deplete',
    syndicates: ['Silence'],
    difficulty: 'Advanced',
    plan: 'Use cheaper Telepathic Scavenger and The Uncontained to make Deplete matter on the battlefield, then turn Paradox Analysis and Boatswain Corvus into tempo rather than bench-only control.',
    whyItMatters:
      'Patch 0.7.11 cut both Deplete agents to 3 cost, changed Paradox Analysis to reduce the two drawn cards by 1, and changed Boatswain Corvus from Expose to Deplete.',
    watchFor:
      'The patch also nerfs several control staples. A Deplete deck now needs board presence and cannot assume the old defensive package will carry every matchup.',
    sourceConfidence: 'high',
    relatedRoutes: ['/updates', '/rules', '/tools/deck-checker'],
  },
  {
    slug: 'midseason-sungrace-board-pressure',
    name: 'Midseason Sungrace Board Pressure',
    syndicates: ['Sungrace'],
    difficulty: 'Intermediate',
    plan: 'Develop agents, use Stalwart Champion to recover Core health, and convert Armageddonaut plus fast Magmatic Teachings into a combat turn that also threatens the Core.',
    whyItMatters:
      'Patch 0.7.11 gave Stalwart Champion Rejuvenate, Armageddonaut Overpower, and Magmatic Teachings Fast speed. The three changes all reward fighting for the board.',
    watchFor:
      'Magmatic Teachings now costs 4. Leave energy for the combat window instead of assuming the old 3-cost curve still works.',
    sourceConfidence: 'high',
    relatedRoutes: ['/updates', '/guides/starter-decks-guide', '/cards'],
  },
  {
    slug: 'midseason-control-downshift',
    name: 'Midseason Control Downshift',
    syndicates: ['Silence', 'Splintergleam'],
    difficulty: 'Advanced',
    plan: 'Trim the most expensive reactive package and add proactive board cards before taking an older Silence or graveyard-control list back to ladder.',
    whyItMatters:
      'The official patch explicitly targets control and raises costs or lowers stats on Not so Fast, Spread the Sickness, Death Jockey, Daville, Rotting Rocker, Ylka, Paradox Cacophony, and Curb the Anomalies.',
    watchFor:
      'This is a rebuild warning, not a claim that control is dead. Retest the curve and matchup plan before spending more wildcards.',
    sourceConfidence: 'high',
    relatedRoutes: ['/updates', '/meta', '/tools/deck-checker'],
  },
  {
    slug: 'season-2-packshop-midrange',
    name: 'Season 2 Packshop Midrange',
    syndicates: ['Flexible'],
    difficulty: 'Intermediate',
    plan: 'Use the July Season 2 card and packshop changes as a reason to rebuild a stable midrange shell instead of copying an old beta list unchanged.',
    whyItMatters:
      'Official July notes added a Season Track, new Core Set cards, pack-tab/shop changes, and rapid follow-up bug fixes, so decks that rely on old access assumptions should be rechecked before crafting.',
    watchFor:
      'Do not commit wildcards or currency until the card actually improves your current two-Diver plan and curve.',
    sourceConfidence: 'high',
    relatedRoutes: ['/updates', '/cards', '/tools/deck-checker'],
  },
  {
    slug: 'draft-ticket-tempo',
    name: 'Draft Ticket Tempo',
    syndicates: ['Flexible'],
    difficulty: 'Beginner',
    plan: 'Treat Draft and Trials rewards as account-progression pressure: build simple tempo decks for testing card quality before moving those ideas into ladder.',
    whyItMatters:
      'Patch 0.7.8 compensation and July dev notes both mention Draft Tickets, Trials, tournament cadence, and reward cleanup, making limited-mode preparation a real player question.',
    watchFor:
      'Draft performance does not automatically prove a ladder deck is good. Move only the repeatable card jobs into constructed lists.',
    sourceConfidence: 'high',
    relatedRoutes: ['/meta', '/guides/starter-decks-guide', '/updates'],
  },
  {
    slug: 'trials-bo3-two-deck-prep',
    name: 'Trials BO3 Two-Deck Prep',
    syndicates: ['Flexible'],
    difficulty: 'Intermediate',
    plan: 'Prepare one stable ladder deck and one matchup-cover deck before treating Trials or tournament queues like normal ranked play.',
    whyItMatters:
      'Official July notes point to Trials, tournament cadence, and BO3 structure. That changes deck planning from one best list to two lists that cover different weaknesses.',
    watchFor:
      'Do not craft a second deck just because it looks popular. Build the second list only when it solves a matchup your main deck repeatedly loses.',
    sourceConfidence: 'high',
    relatedRoutes: [
      '/guides/beta-season-2-trials-guide',
      '/meta',
      '/cards',
      '/tools/deck-checker',
    ],
  },
  {
    slug: 'sprouts-beginner',
    name: 'Sprouts Beginner',
    syndicates: ['Lifeblood'],
    difficulty: 'Beginner',
    plan: 'Build a stable board, multiply small units into real pressure, and learn when to trade wide boards for core damage.',
    whyItMatters:
      'Current creator coverage repeatedly frames Sprouts as one of the cleanest first ladder decks because it teaches board space, combat, and scaling without asking for perfect chain timing.',
    watchFor:
      'Do not overfill the six-agent board. Leave space for the agent or effect that actually improves the turn.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/guides/starter-decks-guide', '/syndicates'],
  },
  {
    slug: 'lifeblood-bleed',
    name: 'Lifeblood Bleed',
    syndicates: ['Lifeblood', 'Splintergleam'],
    difficulty: 'Intermediate',
    plan: 'Pair sticky boards with damage-over-time pressure so the opponent cannot simply heal or block their way out.',
    whyItMatters:
      'Very recent creator results call out Bleed as an early beta ladder threat, but the meta is still young enough to treat it as a watchlist deck rather than a solved best deck.',
    watchFor:
      'Bleed pressure needs follow-up. If the deck cannot close after creating chip damage, it becomes a slower board deck with extra steps.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/tier-list', '/guides/starter-decks-guide'],
  },
  {
    slug: 'sungrace-burn',
    name: 'Sungrace Burn',
    syndicates: ['Sungrace'],
    difficulty: 'Beginner',
    plan: 'Apply fast core pressure, use energy windows efficiently, and punish opponents who spend too long setting up.',
    whyItMatters:
      'Sungrace is one of the clearest syndicate identities from official copy: damage and stellar pressure. That makes it a natural route for players coming from aggro card games.',
    watchFor:
      'Burn decks can lose to one missed sequencing window. Save enough interaction for the turn the opponent tries to stabilize.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/syndicates', '/guides/syndicates-guide'],
  },
  {
    slug: 'silence-control',
    name: 'Silence Control',
    syndicates: ['Silence'],
    difficulty: 'Advanced',
    plan: 'Use mute, removal, and chain timing to make the opposing deck play under its normal ceiling.',
    whyItMatters:
      'Silence has a strong control identity, but new players need priority and chain practice before it becomes reliable.',
    watchFor:
      'Answers that arrive one priority window late can be worse than proactive cards. Study the chain before crafting toward full control.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/rules', '/guides/timeline-priority-guide'],
  },
  {
    slug: 'phasetide-value',
    name: 'Phasetide Value',
    syndicates: ['Phasetide'],
    difficulty: 'Intermediate',
    plan: 'Use rewind, healing, and phase effects to keep high-value agents alive while forcing inefficient enemy attacks.',
    whyItMatters:
      'Official descriptions position Phasetide as the timeline-order and flow-control syndicate, which fits slower players who enjoy defensive tempo.',
    watchFor:
      'A protected agent still needs a plan. Rewinding without advancing your board can give the opponent time to reload.',
    sourceConfidence: 'medium',
    relatedRoutes: ['/guides/timeline-priority-guide', '/syndicates'],
  },
];

export const metaSignals: MetaSignal[] = [
  {
    label: 'Chrono CCG tier list',
    status: 'watch',
    summary:
      'Search demand exists, but beta card balance is moving quickly. A public meta watch page is safer than a fake final card tier list.',
    route: '/tier-list',
  },
  {
    label: 'Chrono CCG decks',
    status: 'direct',
    summary:
      'Runeterra.AR is linked from the official Chrono navigation and exposes decks plus builder intent, so a deck hub is a launch priority.',
    route: '/decks',
  },
  {
    label: 'Chrono CCG card list',
    status: 'direct',
    summary:
      'The wiki now carries an official card snapshot, while every row still links back to the official card page for live beta wording.',
    route: '/cards',
  },
  {
    label: 'Chrono CCG mobile',
    status: 'watch',
    summary:
      'Autocomplete shows mobile demand, but official store pages currently focus on Steam and Epic. Cover it safely in the download page without promising mobile support.',
    route: '/download',
  },
  {
    label: 'Season 2 patch deck checks',
    status: 'direct',
    summary:
      'Official July and 0.7.8 notes changed the card, reward, shop, and Draft context. Existing decks should be rechecked against current card access before players spend currency.',
    route: '/decks',
  },
  {
    label: 'Trials and tournament prep',
    status: 'watch',
    summary:
      'Official cadence notes point to Trials and tournament activity. Keep a watch item until the format details are stable enough for a dedicated tool or guide.',
    route: '/updates',
  },
];
