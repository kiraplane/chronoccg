import { CHECKED_AT } from './sources';
import type { Guide, GuideVideo } from './types';

const cover = '/animesquadron/hero.png';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  completeBeginner: {
    id: 'yCsTbYaV7Sc',
    title:
      "BEST COMPLETE BEGINNER'S GUIDE For Anime Squadron!! Gem, Gold, Rerolls Farm!! (Roblox)",
    channel: 'DomiBlox',
    url: 'https://www.youtube.com/watch?v=yCsTbYaV7Sc',
    thumbnailUrl: youtubeThumbnail('yCsTbYaV7Sc'),
    checkedAt: CHECKED_AT,
  },
  beginner: {
    id: 'gCohIPnuQ0U',
    title: "Best *BEGINNER'S* Guide To Anime Squadrons! (Roblox)",
    channel: 'Revex',
    url: 'https://www.youtube.com/watch?v=gCohIPnuQ0U',
    thumbnailUrl: youtubeThumbnail('gCohIPnuQ0U'),
    checkedAt: CHECKED_AT,
  },
  noobToPro: {
    id: 'x8-wUSgKliU',
    title: "The ONLY Anime Squadron Guide You'll Ever Need (Noob to Pro)",
    channel: 'NOTORIOSX',
    url: 'https://www.youtube.com/watch?v=x8-wUSgKliU',
    thumbnailUrl: youtubeThumbnail('x8-wUSgKliU'),
    checkedAt: CHECKED_AT,
  },
  everything: {
    id: '4P8lS2van0E',
    title: 'Everything you NEED to Know for Anime Squadron! (Roblox)',
    channel: 'Raging_Shinji',
    url: 'https://www.youtube.com/watch?v=4P8lS2van0E',
    thumbnailUrl: youtubeThumbnail('4P8lS2van0E'),
    checkedAt: CHECKED_AT,
  },
  completeSystems: {
    id: 'gYhjMOCRRVY',
    title:
      'Anime Squadron COMPLETE GUIDE! Every Secret Unit, Gems, gold, traits & Fast Progression',
    channel: 'MimoBlox',
    url: 'https://www.youtube.com/watch?v=gYhjMOCRRVY',
    thumbnailUrl: youtubeThumbnail('gYhjMOCRRVY'),
    checkedAt: CHECKED_AT,
  },
  noobToSecret: {
    id: 'FDkLlTguYn0',
    title:
      'GOING NOOB TO PRO GETTING THE BEST META UNIT SECRET SSJ4 GOGETA IN ANIME SQUADRON!! (Roblox)',
    channel: 'DomiBlox',
    url: 'https://www.youtube.com/watch?v=FDkLlTguYn0',
    thumbnailUrl: youtubeThumbnail('FDkLlTguYn0'),
    checkedAt: CHECKED_AT,
  },
  fullClear: {
    id: '0eEvcVJxFio',
    title:
      'I 100% COMPLETED This NEW Anime Rangers X Replacement... And It Is PEAK! (Anime Squadron)',
    channel: 'NotScoobz',
    url: 'https://www.youtube.com/watch?v=0eEvcVJxFio',
    thumbnailUrl: youtubeThumbnail('0eEvcVJxFio'),
    checkedAt: CHECKED_AT,
  },
  gameplay: {
    id: 'vBrjJ6alV84',
    title: "Anime Squadron Just Released... And It's Actually GOOD!",
    channel: 'MimoBlox',
    url: 'https://www.youtube.com/watch?v=vBrjJ6alV84',
    thumbnailUrl: youtubeThumbnail('vBrjJ6alV84'),
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const videoCover = (video: GuideVideo) => video.thumbnailUrl ?? cover;

export const siteDescription =
  'Anime Squadron Wiki is an unofficial Roblox guide hub for codes, units, tier list decisions, traits, stat rerolls, game modes, Discord links, and early-access progression.';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Anime Squadron Beginner Guide',
    seoTitle: 'Anime Squadron Beginner Guide - First Hour Progression',
    seoDescription:
      'Start Anime Squadron with a complete first-hour route: redeem codes, summon carefully, build one carry, farm Gems and Gold, save Perfect Cubes, and avoid wasted rerolls.',
    summary:
      'Your first hour should be a focused account setup: claim every code, use summons to find one real carry, farm enough Gems and Gold to test that carry, then hold rare reroll materials until a clear actually changes.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'YouTube search on June 9, 2026 surfaced multiple Anime Squadron beginner guides, especially videos focused on Gems, Gold, rerolls, and noob-to-pro routes.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox beginner guide',
      'Anime Squadron Roblox codes',
      'Anime Squadron best units early game',
      'Anime Squadron noob to pro',
    ],
    tags: ['Beginner', 'First Hour', 'Progression'],
    relatedRoutes: [
      '/codes',
      '/tier-list',
      '/units',
      '/traits',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Claim codes before you decide what your account is',
        paragraphs: [
          'The first real Anime Squadron decision happens after codes, not before them. Launch rewards include Gems, Gold, Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes, so a player who upgrades before redeeming is judging the account with half the starting tools missing.',
          'A cleaner route is to join the official Roblox experience, redeem every active code, rejoin if a code fails on an old server, then look at your summons and material stack. Only after that should you decide which unit is allowed to become the first project.',
        ],
        bullets: [
          'Redeem active codes first, including punctuation and capitalization.',
          'Use Gems to create options before committing Gold.',
          'Keep Perfect Cubes untouched until you identify a keeper unit.',
          'Do not reroll a unit just because it carried the tutorial waves.',
        ],
      },
      {
        heading: 'Find one carry and make every other slot justify itself',
        paragraphs: [
          'Anime Squadron is a lane battler, so the early squad needs a unit that can actually remove waves. That unit is the carry. It does not have to be the rarest unit on the account; it has to be the unit that changes the next wave, boss, or farm run.',
          'Once the carry is chosen, every other slot should answer one question: does this unit help the carry do its job? A control unit buys time, a support unit improves output, an economy unit pays for upgrades, and boss damage covers the bulky enemy that your wave clear cannot finish.',
        ],
      },
      {
        heading: 'Do not turn early rewards into nine small upgrades',
        paragraphs: [
          'The most common early mistake is spreading rewards evenly. Even leveling feels tidy, but a lane defense account usually gets stronger when one damage unit reaches the next breakpoint before the rest of the squad catches up.',
          'Spend Gold where it changes a run. If the carry reaches a higher wave, kills a boss in time, or lets you farm a better reward loop, the Gold had a purpose. If the upgrade only makes every menu look cleaner, it can wait.',
        ],
      },
      {
        heading: 'Use rerolls only after the unit proves itself',
        paragraphs: [
          'Trait Shards, Stat Rerolls, Reroll Cubes, and Perfect Cubes are not beginner cosmetics. They are breakpoint tools. Spend them when the target unit is already part of your plan and the possible result can change a clear.',
          'The practical stop rule is simple: reroll one keeper, test the run, and stop when the run improves. If the same stage still fails after better stats, your problem may be placement, game mode choice, boss damage, or support timing rather than more rerolls.',
        ],
      },
      {
        heading: 'A first-session checklist that matches player intent',
        paragraphs: [
          'Players searching for a beginner guide usually want a route, not theory. Use this order: redeem codes, summon enough to find a carry candidate, push waves until a real wall, upgrade the carry, test again, then decide whether traits or stat rerolls are justified.',
          'After that first wall, open the unit tier list and trait guide. Those pages keep the same rule alive: one useful decision at a time, no rare materials spent on a unit you already expect to replace.',
        ],
      },
      {
        heading: 'What to copy from walkthrough videos',
        paragraphs: [
          'YouTube beginner walkthroughs are useful because they show what new players actually struggle with: where they redeem codes, how quickly currency disappears, and which mistakes happen before the first serious squad is built.',
          'Use videos for route shape, not blind spending. If a creator finds a carry faster than you do, copy the decision logic rather than the exact account state. Your summons, codes, and early drops may be different.',
        ],
        bullets: [
          'Copy the order: codes, summons, first wall, focused upgrade, then reroll test.',
          'Pause before any rare-material spend and ask what stage it is meant to fix.',
          'Do not chase a video account that pulled a better unit than you have.',
          'Return to farming when the video route depends on resources you do not own yet.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Anime Squadron?',
        answer:
          'Redeem active codes, do your first summons, identify one main carry, then spend upgrades and rerolls only when that carry changes progression.',
      },
      {
        question: 'Should beginners reroll traits immediately?',
        answer:
          'No. Reroll after the unit has proven it will stay in your first serious squad. Perfect Cubes should be saved for confirmed keepers.',
      },
      {
        question: 'What is the biggest beginner mistake?',
        answer:
          'Spreading Gems, Gold, traits, and stat rerolls across too many temporary units instead of building one carry that opens better rewards.',
      },
      {
        question: 'Which guide should I read next?',
        answer:
          'Open the codes page first, then the tier list, units page, traits guide, and Gems/Gold spending guide.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'Anime Squadron Codes Redeem Guide',
    seoTitle: 'Anime Squadron Codes Redeem Guide - Active Rewards and Fixes',
    seoDescription:
      'Redeem Anime Squadron codes correctly, fix failed code messages, and decide how to spend Gems, Gold, Trait Shards, Reroll Cubes, Stat Rerolls, and Perfect Cubes.',
    summary:
      'Codes are not just freebies. In Anime Squadron they set your first summon route, first carry upgrade, and first reroll stop rule.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Code rewards were cross-checked against Roblox code pages and YouTube searches for Anime Squadron codes, beginner routes, and reroll farming.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox codes',
      'Anime Squadron redeem codes',
      'Anime Squadron Gems Gold Rerolls farm',
      'Anime Squadron beginner guide codes',
    ],
    tags: ['Codes', 'Redeem', 'Rewards'],
    relatedRoutes: [
      '/codes',
      '/guides/beginner-guide',
      '/guides/gems-gold-spending-guide',
      '/traits',
      '/reroll',
    ],
    body: [
      {
        heading: 'Redeem before you spend anything scarce',
        paragraphs: [
          'The strongest launch codes affect almost every early decision because they give summon currency, upgrade currency, trait materials, reroll materials, and Perfect Cubes. That is why the redeem step belongs before serious account planning.',
          'If you spend Gold first, then redeem codes, you may discover that the better unit arrived after your Gold was already committed. If you spend Perfect Cubes before summoning, you may permanently improve a unit that should have been replaced within the hour.',
        ],
      },
      {
        heading: 'Use the exact code text and refresh old servers',
        paragraphs: [
          'Anime Squadron codes are case-sensitive and punctuation-sensitive. The exclamation mark is part of many launch codes. Copy the full code, paste it exactly, and avoid adding spaces before or after the text.',
          'If an active code fails, treat the server as the first suspect. Early-access Roblox games can have old servers running during updates. Rejoin a newer server, try the newest codes first, and only mark a code expired after repeated source checks agree.',
        ],
        bullets: [
          'Copy capitalization exactly.',
          'Keep exclamation marks and punctuation.',
          'Rejoin a fresh server if a code fails.',
          'Use the newest codes before older community milestone codes.',
        ],
      },
      {
        heading: 'Turn each reward type into a decision',
        paragraphs: [
          'Gems are option value, so they usually help you find the first real carry. Gold is momentum, so it belongs on the unit that changes the next clear. Trait Shards and Reroll Cubes are refinement, so they should wait until the target unit has a job.',
          'Perfect Cubes need the strictest rule. Use one only when the unit is not just good today, but likely to stay useful across waves, bosses, farming, or co-op.',
        ],
      },
      {
        heading: 'What to do after redeeming all active codes',
        paragraphs: [
          'Do not leave the code menu and immediately spend everything. First check your squad, then run a stage that tells you where the account fails. A wave leak points toward carry damage or placement. A boss timeout points toward boss damage. Slow upgrade timing points toward Gold use or economy planning.',
          'This turns codes into progression instead of clutter. The reward is not the code itself; the reward is reaching a better stage with fewer wasted materials.',
        ],
      },
      {
        heading: 'Why expired-code history still matters',
        paragraphs: [
          'Anime Squadron is new, so expired-code history is short. Still, tracking failed codes prevents duplicate rumors from cycling back into active tables.',
          'When a code expires, it should move out of the active list with the last checked date. Until then, a code that fails once should be treated as a troubleshooting case, not automatically as dead.',
        ],
      },
      {
        heading: 'A code routine for update days',
        paragraphs: [
          'On update days, run the same routine every time. Check the active-code table, open the official Roblox game, redeem the newest codes first, then retry older codes only after joining a fresh server.',
          'After redeeming, write down what changed: how many Gems you can spend, whether Gold is enough for the carry, and whether new reroll materials are worth using today. This turns codes into a progression plan instead of a short dopamine hit.',
          'If YouTube comments or community posts mention a fresh code before the main sources update, treat it as a lead. Test it in game, keep the exact spelling, and wait for repeat confirmation before making it part of your default spend route.',
        ],
        bullets: [
          'Use YouTube code videos as discovery signals, then verify the code inside the game.',
          'Do not trust videos that ask you to install tools, join unrelated servers, or enter account details.',
          'Keep failed codes separate from expired codes until multiple checks agree.',
          'Spend rewards only after checking the beginner, Gems, and reroll plans.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Anime Squadron codes case-sensitive?',
        answer:
          'Yes. Copy codes exactly, including punctuation such as exclamation marks.',
      },
      {
        question: 'Why does an active Anime Squadron code fail?',
        answer:
          'It may be typed incorrectly, expired, or blocked by an old server. Rejoin a fresh server and retry before assuming it is expired.',
      },
      {
        question: 'What should I spend code rewards on first?',
        answer:
          'Use Gems to find a carry, Gold to push that carry, and save rare reroll materials for a keeper unit.',
      },
      {
        question: 'Should I redeem codes before summoning?',
        answer:
          'Yes. Codes can change how many summons and rerolls you can afford, so they should come before serious spending.',
      },
    ],
  },
  {
    slug: 'best-units-tier-list',
    title: 'Anime Squadron Best Units Tier List',
    seoTitle: 'Anime Squadron Best Units Tier List - Early Role Priority',
    seoDescription:
      'Use the Anime Squadron tier list as an early role-priority guide for main carry, boss damage, control, support, economy, secret units, and starter filler decisions.',
    summary:
      'The safest launch tier list ranks what a unit does. Build a carry first, add boss damage when bulky enemies block you, and treat secret or rare units as investments only when their job is clear.',
    category: 'Tier List',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.completeSystems),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'YouTube results show strong demand around best units, noob-to-pro routes, secret units, and complete progression guides.',
    video: videos.completeSystems,
    videoSearchQueries: [
      'Anime Squadron Roblox tier list',
      'Anime Squadron best units',
      'Anime Squadron secret unit',
      'Anime Squadron noob to pro meta unit',
    ],
    tags: ['Tier List', 'Units', 'Meta'],
    relatedRoutes: [
      '/tier-list',
      '/units',
      '/traits',
      '/reroll',
      '/guides/stat-reroll-guide',
    ],
    body: [
      {
        heading: 'Rank the job before the name',
        paragraphs: [
          'A rare unit can still be a bad first investment if it does not solve the stage that blocks you. A tier list should answer what the unit does: wave clear, boss damage, control, support, economy, or temporary filler.',
          'That is why the first Anime Squadron ranking is role-first. Early-access unit names and exact multipliers can change quickly, but the account problems stay familiar. You need a carry, then you need to patch the thing the carry cannot do alone.',
        ],
      },
      {
        heading: 'Main carry is the safest first tier',
        paragraphs: [
          'The main carry is the unit that turns rewards into more rewards. It clears waves, lets you farm better stages, and creates a reason to spend Gold, traits, and stat rerolls.',
          'A carry deserves investment when you can describe the next clear it unlocks. If the unit only looks impressive in the lobby but does not change the next run, wait.',
        ],
      },
      {
        heading: 'Secret units need proof, not panic spending',
        paragraphs: [
          'YouTube search results show players care about secret units and meta units, which makes sense for a Roblox anime defense game. The mistake is treating every secret pull as an automatic account plan.',
          'A secret unit becomes a priority when it has a real role and can use your materials better than the current carry. If it needs too much setup or only helps a later mode, it can be saved without draining rerolls today.',
        ],
      },
      {
        heading: 'Boss damage and control are second-wave investments',
        paragraphs: [
          'Once waves stop being the problem, bosses expose weak single-target damage. That is when a boss-damage role can move up the tier list. If enemies reach the end before damage has time to work, control becomes more important.',
          'Support and economy are also real, but they are not first by default. They need a damage unit or mode structure to support, otherwise they become polished side projects.',
        ],
      },
      {
        heading: 'How to use this tier list after every summon',
        paragraphs: [
          'After a summon session, sort new units by job. Ask which unit can become the carry, which one solves bosses, which one buys time, and which one is only filler. Then compare those jobs to your current wall.',
          'The best unit is the one that changes the account today without ruining tomorrow. That may be a rare unit, a secret unit, or simply the first damage unit that lets you farm enough to chase better options.',
        ],
      },
      {
        heading: 'How to read meta videos without overreacting',
        paragraphs: [
          'Anime Squadron YouTube results already lean toward secret units, noob-to-pro runs, and complete guide claims. Those videos are helpful because they reveal what players are testing, but they can also make every new pull feel mandatory.',
          'When a video calls a unit meta, ask what role the unit played in the clear. Did it carry waves, delete bosses, enable faster upgrades, or simply look rare on the thumbnail? A role-first tier list keeps the page useful even when names and balance change.',
          'If several creators keep using the same role to solve the same wall, that role deserves attention. If only one showcase uses a unit with unclear investment cost, wait before spending Perfect Cubes or rare rerolls.',
          'Recheck the tier list after patches, code waves, or banners because those moments change what players can realistically build. A role can stay important while the best name for that role shifts.',
        ],
        bullets: [
          'Treat showcase damage as a question to test, not a permanent ranking.',
          'Compare the unit against your current wall, not against a maxed creator account.',
          'Promote units when they improve farming, bosses, or co-op in repeatable ways.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best unit in Anime Squadron?',
        answer:
          'The best early unit is the one that acts as your main carry and changes your next clear. Exact unit-name rankings should be updated only after stable game data exists.',
      },
      {
        question: 'Are secret units always worth building?',
        answer:
          'No. Build a secret unit when its role is clear and it outperforms your current carry or boss-damage option.',
      },
      {
        question: 'Should I upgrade support first?',
        answer:
          'Usually no. Support becomes valuable after you know which carry, mode, or boss plan it improves.',
      },
      {
        question: 'Why rank roles instead of only unit names?',
        answer:
          'Early-access unit data changes quickly. Role rankings help players spend better without inventing unverified facts.',
      },
    ],
  },
  {
    slug: 'traits-reroll-guide',
    title: 'Anime Squadron Traits Guide',
    seoTitle: 'Anime Squadron Traits Guide - Trait Shards and Perfect Cubes',
    seoDescription:
      'Plan Anime Squadron traits with a carry-first reroll route, Perfect Cube stop rule, support timing, economy trait caution, and stat-reroll discipline.',
    summary:
      'Trait Shards should make one important unit better. The trap is rerolling every unit a little and ending with no clear improvement.',
    category: 'Traits',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.completeSystems),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'YouTube searches surfaced complete guides that focus on secret units, Gems, Gold, traits, and fast progression.',
    video: videos.completeSystems,
    videoSearchQueries: [
      'Anime Squadron Roblox traits',
      'Anime Squadron trait shards',
      'Anime Squadron Perfect Cubes',
      'Anime Squadron fast progression traits',
    ],
    tags: ['Traits', 'Trait Shards', 'Perfect Cubes'],
    relatedRoutes: [
      '/traits',
      '/tier-list',
      '/reroll',
      '/codes',
      '/guides/stat-reroll-guide',
    ],
    body: [
      {
        heading: 'Trait the unit that already has a job',
        paragraphs: [
          'Trait materials are valuable because they can turn a useful unit into a reliable carry. They are weak when they make a replaceable unit slightly cleaner.',
          'Before rerolling, write the job in one sentence: this unit clears waves, kills bosses, controls lanes, supports my carry, or improves farm tempo. If the sentence feels forced, the trait attempt can wait.',
        ],
      },
      {
        heading: 'Use code rewards to choose, not to gamble',
        paragraphs: [
          'Launch codes give enough Trait Shards and reroll materials to tempt players into immediate gambling. That is the wrong mindset. The rewards are there to make your first good unit stronger, not to make every random unit look interesting.',
          'A carry-first trait route keeps the account readable. You know where the materials went, which run they should improve, and when the experiment has failed.',
        ],
      },
      {
        heading: 'Perfect Cubes need a hard stop rule',
        paragraphs: [
          'Perfect Cubes are the material to protect most carefully. Spend one only when the unit has already earned a permanent or semi-permanent slot across waves, bosses, farming, or co-op.',
          'If the target is still a maybe, use cheaper materials or wait. Perfect Cube spending should feel almost boring: the unit is good, the role is clear, and the upgrade changes a known problem.',
        ],
      },
      {
        heading: 'Support and economy traits are timing decisions',
        paragraphs: [
          'Support traits become strong when they improve a proven carry. Economy traits become strong when the extra resources convert into faster upgrades or better reward loops.',
          'Neither should be treated as default day-one priority. If damage is failing, support cannot carry the run by itself. If enemies leak, economy may be too slow for the stage you are attempting.',
        ],
      },
      {
        heading: 'When to stop trait rerolling',
        paragraphs: [
          'Stop when the unit can do the job you selected it for. Chasing a perfect result too early can leave you unable to respond to a better unit, a balance change, or a new mode.',
          'If a trait result is good enough to clear the next farm target, keep it and move to the next account bottleneck. Anime Squadron rewards momentum more than a beautiful reroll screen.',
        ],
      },
      {
        heading: 'A reroll budget you can actually follow',
        paragraphs: [
          'Before opening the trait screen, decide the maximum number of attempts and the minimum result you will keep. Without that rule, every near miss feels like proof that the next roll has to be better.',
          'A simple beginner budget is one serious target, one reason, and one stop point. The target is your keeper unit. The reason is the stage or boss you want to improve. The stop point is the first trait that makes that test easier.',
          'If YouTube walkthroughs show creators rerolling heavily, remember that they may be using a different account, more time, or more currency. Copy their stopping logic, not their spending volume.',
          'Review the result again after the next real update. If balance changes or a new mode raises a different problem, your old trait may still be good, but it may no longer be the next place to spend rare materials.',
        ],
        bullets: [
          'Set a maximum attempt count before rolling.',
          'Keep a useful trait if it changes the next farm target.',
          'Save Perfect Cubes for units that survive future summons.',
          'Leave support and economy rerolls for after the carry is stable.',
          'If the next update is close, keep enough materials to react.',
          'Compare the trait result against the role page before rolling again.',
        ],
      },
    ],
    faq: [
      {
        question: 'Who should get my first Anime Squadron trait rerolls?',
        answer:
          'Your strongest keeper carry or boss-damage unit should usually get the first serious trait attempt.',
      },
      {
        question: 'Should I use Perfect Cubes early?',
        answer:
          'Only if the unit is clearly part of your main squad after codes and initial summons.',
      },
      {
        question: 'Are economy traits worth it?',
        answer:
          'They are worth it only when the extra tempo turns into better clears, faster upgrades, or a higher-value farm loop.',
      },
      {
        question: 'Should support get traits before damage?',
        answer:
          'Usually no. Support should improve a carry that is already worth building.',
      },
    ],
  },
  {
    slug: 'stat-reroll-guide',
    title: 'Anime Squadron Stat Reroll Guide',
    seoTitle: 'Anime Squadron Stat Reroll Guide - When to Spend Rerolls',
    seoDescription:
      'Use Anime Squadron Stat Rerolls with a one-carry-at-a-time plan, clear stop rules, Reroll Cube discipline, and launch reward spending logic.',
    summary:
      'Stat rerolls should push a clear, not polish every unit. Focus one keeper, test the run, and stop when the result solves the current wall.',
    category: 'Reroll',
    difficulty: 'Intermediate',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'YouTube search results around Anime Squadron beginner and complete guides repeatedly mention Gems, Gold, rerolls, farming, and fast progression.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Roblox reroll',
      'Anime Squadron Stat Rerolls',
      'Anime Squadron Reroll Cubes',
      'Anime Squadron Gems Gold Rerolls farm',
    ],
    tags: ['Stat Rerolls', 'Reroll Cubes', 'Optimization'],
    relatedRoutes: [
      '/reroll',
      '/traits',
      '/codes',
      '/tier-list',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Reroll one unit at a time',
        paragraphs: [
          'Launch codes can make reroll currency look abundant, but early-access materials disappear quickly. The clean plan is to improve one keeper until it changes a clear, then stop.',
          'Avoid the middle path where every unit gets one reroll. That creates a squad full of minor upgrades and no breakthrough. Rerolling should create a visible improvement in the run you are stuck on.',
        ],
      },
      {
        heading: 'Define the wall before you roll',
        paragraphs: [
          'A stat reroll is useful only if you know what problem it is supposed to solve. Are enemies leaking? Is the boss surviving? Are you missing a farm breakpoint? Are upgrades too slow because Gold is the bottleneck?',
          'If you cannot name the wall, do not reroll yet. Run the stage again, watch where the failure happens, and decide whether stats are actually the answer.',
        ],
      },
      {
        heading: 'Stop when the clear changes',
        paragraphs: [
          'A reroll is successful when the unit reaches the next wave, kills the boss in time, or lets you farm a better mode. If the reroll only improves a number you cannot feel, the account may not need more spending yet.',
          'Save the rest for the next keeper or a future balance change. Early games often shift quickly, and liquid reroll currency is a form of power.',
        ],
      },
      {
        heading: 'Use failed rerolls as information',
        paragraphs: [
          'If better stats still do not fix the run, your wall may be team shape, placement, mode choice, or missing support. At that point, more rerolls can become a tax on a bad plan.',
          'Go back to the units page and ask which role is missing. A control unit may buy time, boss damage may finish the wall, or economy may let your carry upgrade earlier.',
        ],
      },
      {
        heading: 'Reroll Cubes versus Perfect Cubes',
        paragraphs: [
          'Normal reroll tools can be used to test a promising unit. Perfect Cubes should be saved for a unit that has already proven itself. Treat the two materials differently.',
          'If you are unsure whether a unit belongs in your long-term squad, it is not a Perfect Cube target yet. Let gameplay prove the unit first.',
        ],
      },
      {
        heading: 'Read the run after each reroll',
        paragraphs: [
          'A reroll session should include testing, not just clicking. Roll, run the stage that blocked you, and watch the exact moment that changes. If the wave ends cleaner, the reroll worked. If the boss still survives with the same health, the account may need a different role.',
          'This is the part many short guides skip. Stats are only meaningful when they change timing: enemies die before the lane collapses, the boss falls before the timer, or farming becomes consistent enough to repeat.',
          'If a YouTube guide shows a fast progression route, notice how often the creator tests after upgrades. That test loop is more valuable than any single stat result because it tells you when to stop spending.',
          'When you cannot see a difference after two or three attempts, pause and change the question. The account may need better placement, a second damage role, or more Gold before another stat roll becomes useful.',
        ],
        bullets: [
          'Test the same stage before and after the reroll.',
          'Write down the failure point so you know whether it moved.',
          'Stop if the next improvement would cost too much for too little change.',
          'Move currency to another unit only when the first project has a clear result.',
          'Keep a few rerolls liquid for a better unit or balance patch.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many units should I stat reroll early?',
        answer:
          'Usually one. Start with your main carry and only move on when the result changes progression.',
      },
      {
        question: 'Should I reroll filler units?',
        answer:
          'No, unless the filler is unexpectedly carrying your current mode and will stay useful.',
      },
      {
        question: 'What if rerolls do not help?',
        answer:
          'Check team composition, placement, unit role, and mode choice before spending more.',
      },
      {
        question: 'Should I save some rerolls?',
        answer:
          'Yes. Saving rerolls keeps you flexible for better units, future banners, and balance changes.',
      },
    ],
  },
  {
    slug: 'gems-gold-spending-guide',
    title: 'Anime Squadron Gems and Gold Guide',
    seoTitle: 'Anime Squadron Gems and Gold Guide - Spending Priority',
    seoDescription:
      'Spend Anime Squadron Gems and Gold with a launch-stage priority ladder for summons, carry upgrades, trait support, farming, and reroll decisions.',
    summary:
      'Gems create options; Gold creates momentum. Spend enough to reach the next farm or clear breakpoint, but keep rare materials for units that prove their job.',
    category: 'Rewards',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.completeBeginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'YouTube search results strongly connect Anime Squadron beginner intent with Gems, Gold, rerolls, farming, and fast progression.',
    video: videos.completeBeginner,
    videoSearchQueries: [
      'Anime Squadron Gems Gold guide',
      'Anime Squadron rerolls farm',
      'Anime Squadron fast progression',
      'Anime Squadron beginner Gems Gold',
    ],
    tags: ['Gems', 'Gold', 'Spending'],
    relatedRoutes: [
      '/codes',
      '/units',
      '/tier-list',
      '/traits',
      '/guides/stat-reroll-guide',
    ],
    body: [
      {
        heading: 'Gems are option value',
        paragraphs: [
          'Gems should help you find better unit options or respond to a useful banner. Spending every Gem immediately feels active, but it can leave you unable to react when a better target appears.',
          'After redeeming codes, decide whether your current squad already has a carry. If not, Gems should mostly serve summoning. If yes, keep some Gems for the next banner, update, or farming route that gives clearer value.',
        ],
      },
      {
        heading: 'Gold is momentum',
        paragraphs: [
          'Gold should go into the unit that improves your next clear. In a lane battler, one stronger carry usually does more than several small upgrades spread across filler units.',
          'When Gold runs low, stop upgrading sideways and test whether the carry actually needs levels, traits, better stats, or a different support role.',
        ],
      },
      {
        heading: 'Farm until the next decision, not forever',
        paragraphs: [
          'Players searching for Gems and Gold usually want a farm loop. The better question is what the farm is buying. Farm until you can do the next summon attempt, carry upgrade, trait attempt, or reroll test.',
          'If you keep farming without a target, the account can stall in a comfortable loop. Set the next decision first, then farm to fund it.',
        ],
      },
      {
        heading: 'Do not spend for the menu',
        paragraphs: [
          'A clean upgrade menu is not the same as a stronger account. Spend because the next run changes: earlier upgrades, safer boss timing, fewer leaks, or access to a better reward mode.',
          'If you cannot name the run that improves, hold the currency. Saving is not passivity; it is preserving the ability to act when the next real target appears.',
        ],
      },
      {
        heading: 'The simple launch priority ladder',
        paragraphs: [
          'First, use Gems to find one carry candidate. Second, use Gold to make that carry clear better. Third, use traits or stat rerolls only if the carry is a keeper. Fourth, add boss damage or control once the mode demands it.',
          'This ladder is intentionally conservative because Anime Squadron is new. It keeps low spenders and free players from turning launch gifts into scattered progress.',
        ],
      },
      {
        heading: 'A practical farming and spending rhythm',
        paragraphs: [
          'Use a loop that always ends in a decision. Farm until you can afford one summon target, one carry upgrade, one trait attempt, or one stat reroll test. Then spend, test, and return to farming only if the result points to the next clear step.',
          'This rhythm fits free players because it avoids emotional spending. You do not need to empty Gems because a banner exists, and you do not need to drain Gold because an upgrade button is available.',
          'Walkthrough videos are useful here because they reveal pacing. If creators repeatedly stop to farm before a major upgrade, that tells you the bottleneck is normal. If they clear with a focused carry instead of a full upgraded squad, that supports the one-project rule.',
          'Review your currency after every code wave or banner. Extra Gems may justify another summon attempt, while extra Gold may be better spent proving the carry you already own instead of chasing a cleaner roster screen.',
        ],
        bullets: [
          'Farm with a named purchase in mind.',
          'Hold part of your Gems when a banner or update is likely.',
          'Use Gold on the unit that changes the next run first.',
          'Do not convert every code reward into rerolls on the same day.',
          'Check whether farming time is buying progress or only delaying a decision.',
          'If a purchase does not unlock a test, leave the currency unspent.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I spend Gems on summons first?',
        answer:
          'If you do not have a clear carry, yes. If you already have one, keep some Gems for banners or updates.',
      },
      {
        question: 'What should Gold upgrade first?',
        answer:
          'Upgrade the unit that changes your next wave, boss, farm, or reward mode.',
      },
      {
        question: 'Should I save every reward?',
        answer:
          'No. Spend enough to progress, but avoid draining scarce rewards without a target.',
      },
      {
        question: 'When should I farm Gems and Gold?',
        answer:
          'Farm when you know the next purchase or upgrade you are trying to fund.',
      },
    ],
  },
  {
    slug: 'game-modes-rewards-guide',
    title: 'Anime Squadron Game Modes Guide',
    seoTitle: 'Anime Squadron Game Modes Guide - Waves, Bosses, Co-op, Ranks',
    seoDescription:
      'Understand Anime Squadron game modes, including story waves, boss challenges, co-op play, rank pressure, farming routes, and early reward priorities.',
    summary:
      'Anime Squadron modes test different problems. Waves test carry damage, bosses test burst, co-op rewards role splitting, and ranks should wait until your launch squad is stable.',
    category: 'Game Modes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.noobToPro),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'YouTube results around noob-to-pro and full-completion Anime Squadron videos show demand for mode order, farming, and progression routing.',
    video: videos.noobToPro,
    videoSearchQueries: [
      'Anime Squadron Roblox gameplay',
      'Anime Squadron noob to pro',
      'Anime Squadron game modes',
      'Anime Squadron 100 completed',
    ],
    tags: ['Game Modes', 'Bosses', 'Co-op'],
    relatedRoutes: [
      '/game-modes',
      '/units',
      '/tier-list',
      '/guides/beginner-guide',
      '/guides/gems-gold-spending-guide',
    ],
    body: [
      {
        heading: 'Waves are the first account check',
        paragraphs: [
          'Normal waves reveal whether your carry is good enough and whether placement makes sense. If enemies leak before bosses matter, solve wave clear first.',
          'Use early waves to learn upgrade timing, lane pressure, and which units actually deal with crowds. This is where the first carry earns the right to receive Gold and rerolls.',
        ],
      },
      {
        heading: 'Bosses ask a different question',
        paragraphs: [
          'Boss pressure can make a wave-clear squad look weak. If normal enemies are handled but the boss survives too long, your issue is not more filler; it is boss damage, control timing, or stronger carry stats.',
          'This is where a second serious unit can make sense. Build it after the main carry is stable, not before.',
        ],
      },
      {
        heading: 'Co-op rewards clean role splitting',
        paragraphs: [
          'The official description mentions teaming up with friends, and Anime Squadron naturally rewards split jobs. One player can anchor damage while another brings control, support, or economy if the mode allows it.',
          'Co-op can hide a weak solo squad, so do not use it as the only measure of account strength. If you still need solo progression, keep checking whether your own carry can clear without being carried by another player.',
        ],
      },
      {
        heading: 'Rank push is not a day-one default',
        paragraphs: [
          'Ranks are attractive because they create visible progress, but early-access rank pressure can be expensive. You should push ranks only after the account has a stable carry, a boss plan, and enough reroll discipline to avoid panic spending.',
          'If a rank attempt drains Gems, Gold, and cubes without opening better rewards, step back and farm a stronger foundation.',
        ],
      },
      {
        heading: 'Choose the mode by the problem it solves',
        paragraphs: [
          'Play waves when you need basic progression, bosses when you need damage testing, co-op when role splitting creates a better clear, and farming loops when they fund a named decision.',
          'This turns mode selection into strategy instead of habit. The best mode is the one that gives the next useful material or teaches the next squad weakness.',
        ],
      },
      {
        heading: 'Keep a reward note after each mode',
        paragraphs: [
          'After a run, record two things: what reward you gained and what problem remained. If waves gave Gold but bosses still timed out, the next stop is boss damage. If co-op worked but solo failed, your personal carry or support structure still needs attention.',
          'This habit makes game modes easier to choose. Instead of asking which mode is best in general, you can ask which mode funds the next decision. That is the difference between progression and grinding out of habit.',
          'Noob-to-pro videos are especially useful for this page because they show mode order. Use them to compare when creators farm, when they push, and when they stop to upgrade before attempting harder content.',
          'Revisit the mode plan when an update adds rewards, codes, or balance changes. A mode that was inefficient on day one can become useful if it starts dropping the material your current account is missing.',
          'When two modes feel similar, choose the one with the clearer next purchase. Better rewards only matter if they become summons, upgrades, trait attempts, or reroll tests that change a real wall.',
        ],
        bullets: [
          'Use waves to test basic clear and placement.',
          'Use bosses to test single-target damage and control timing.',
          'Use co-op to learn role splits, then retest your solo account.',
          'Use farming loops only when the next purchase is already named.',
          'Stop pushing a mode when the reward no longer funds the current wall.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which Anime Squadron mode should beginners play first?',
        answer:
          'Start with wave or story-style progression so you can learn lanes, placement, and upgrade timing.',
      },
      {
        question: 'When should I prepare for bosses?',
        answer:
          'After normal waves are stable and bulky enemies become the real wall.',
      },
      {
        question: 'Should I push ranks early?',
        answer:
          'Wait until your carry, boss damage, and reroll plan are stable enough that rank attempts do not drain the account.',
      },
      {
        question: 'Is co-op worth playing?',
        answer:
          'Yes, especially when players split damage, control, support, and economy roles instead of duplicating the same weak setup.',
      },
    ],
  },
  {
    slug: 'discord-trello-wiki-guide',
    title: 'Anime Squadron Discord, Trello, and Wiki Guide',
    seoTitle: 'Anime Squadron Discord, Trello, Wiki - Official Links Status',
    seoDescription:
      'Check Anime Squadron Discord, Trello, and Wiki status, learn which links are official, and avoid fake code or download pages.',
    summary:
      'Players want Discord, Trello, and wiki links because early-access Roblox games change quickly. Use Roblox first, treat invite links carefully, and do not trust unofficial downloads.',
    category: 'Community',
    difficulty: 'Beginner',
    coverImageUrl: cover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'guide_site_crosscheck',
    sourceNotes:
      'Public code pages mention Discord as a place to watch for updates, while official Wiki/Trello status remains unverified in the checked sources.',
    videoSearchQueries: [
      'Anime Squadron Discord',
      'Anime Squadron Trello',
      'Anime Squadron Wiki',
      'Anime Squadron official links',
    ],
    tags: ['Discord', 'Trello', 'Wiki'],
    relatedRoutes: ['/discord', '/download', '/codes', '/updates'],
    body: [
      {
        heading: 'Use Roblox as the first official link',
        paragraphs: [
          'The safest official link is the Roblox game page by Komplex Studio. Use that page to play, favorite, follow, and check the live title state.',
          'If a site claims to be official but does not connect back to Roblox or the developer community, treat it as unverified. Early-access games attract copied pages quickly.',
        ],
      },
      {
        heading: 'Discord is useful, but invite links can drift',
        paragraphs: [
          'Code outlets mention the Anime Squadron Discord as a community location for codes and announcements. Discord can be useful for updates, but invite links can change or be copied by unrelated communities.',
          'Prefer links surfaced from Roblox, developer profiles, or trusted update posts. Do not download files, scripts, or modified clients from chat.',
        ],
      },
      {
        heading: 'Trello and official wiki status',
        paragraphs: [
          'During the June 2026 check, public coverage did not verify an official Wiki or Trello page. That may change after launch, so this page treats Trello claims as watch items until they can be tied to the developer.',
          'This site is an unofficial guide wiki. It does not claim to be the official Anime Squadron Wiki, and it does not present unverified community documents as official.',
        ],
      },
      {
        heading: 'How to judge a community source',
        paragraphs: [
          'A useful community source is specific, current, and connected to the game. A risky one asks for account information, pushes executors, or promises private codes that require external forms.',
          'For codes, the safest pattern is simple: find the code from a trusted source, redeem inside the Roblox game, and never paste credentials into a third-party page.',
        ],
      },
      {
        heading: 'When to update your bookmarks',
        paragraphs: [
          'Update bookmarks when Roblox, the developer group, or several trusted code pages point to the same official community link. Do not chase every repost.',
          'A stable bookmark set should include the official Roblox page, this codes page, the Discord status page, and the guide hub.',
        ],
      },
      {
        heading: 'What Discord is good for',
        paragraphs: [
          'A verified Discord is best for fast-moving information: maintenance notices, code drops, update timing, balance chatter, and player reports about bugs. It is not automatically the best place for permanent strategy because chat moves quickly and old advice can be hard to verify.',
          'Use Discord as a signal, then return to stable pages for decisions. If multiple players mention a new code, test it in game and wait for the codes page to mark the result. If players discuss a unit buff, check whether the tier-list role actually changes before spending rare materials.',
          'This separation keeps the wiki useful. Discord can be quick, while the guide site should be slower, cleaner, and easier to revisit.',
        ],
      },
      {
        heading: 'A safe verification checklist',
        paragraphs: [
          'Before trusting a community link, check who shared it, whether it appears on Roblox or a developer-controlled profile, and whether the destination asks for anything unusual. A normal Discord invite should not require your Roblox password, payment details, or a download.',
          'For Trello and wiki claims, look for ownership signals. Does the board identify the developer? Is it linked from an official place? Does it update alongside game changes? If those answers are missing, treat the page as a community note rather than an official source.',
          'This also applies to YouTube descriptions and pinned comments. A creator can be helpful for walkthrough context, but external links still need the same checks before you treat them as official.',
        ],
        bullets: [
          'Keep the official Roblox game page as the anchor link.',
          'Use this site for stable guide decisions and source-tracked code notes.',
          'Treat private code leaks, script servers, and account forms as unsafe.',
          'Update bookmarks only when several trustworthy signals agree.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this the official Anime Squadron Wiki?',
        answer:
          'No. This is an unofficial fan-made guide site for player decisions and source-tracked updates.',
      },
      {
        question: 'Is there an official Anime Squadron Trello?',
        answer:
          'No official Trello was verified during the June 9, 2026 check.',
      },
      {
        question: 'Where should I play Anime Squadron?',
        answer:
          'Use the official Roblox game page for Anime Squadron by Komplex Studio.',
      },
      {
        question: 'Can I trust Discord code leaks?',
        answer:
          'Trust codes only when they can be redeemed inside the game and are confirmed by reliable sources.',
      },
    ],
  },
  {
    slug: 'safe-download-roblox-guide',
    title: 'Anime Squadron Download and Roblox Safety Guide',
    seoTitle: 'Anime Squadron Download - Official Roblox Link and Safety',
    seoDescription:
      'Play Anime Squadron safely through Roblox, avoid unsafe APKs or scripts, and verify the official Komplex Studio game page before joining.',
    summary:
      'Anime Squadron is a Roblox experience. The safe download path is Roblox itself, not APK mirrors, scripts, executors, or copied clients.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: cover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'Safe-download guidance is based on the official Roblox game page and standard Roblox account-safety rules.',
    videoSearchQueries: [
      'Anime Squadron Roblox download',
      'Anime Squadron official Roblox link',
      'Anime Squadron scripts',
      'Anime Squadron APK',
    ],
    tags: ['Download', 'Roblox', 'Safety'],
    relatedRoutes: [
      '/download',
      '/discord',
      '/codes',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'The official play route is Roblox',
        paragraphs: [
          'Anime Squadron lives on Roblox at place id 71132543521245. Use the official Roblox game page and check that the creator is Komplex Studio.',
          'Do not use third-party APKs, modified clients, executors, or scripts. They can put your Roblox account and device at risk, and they are not needed to redeem codes or play the game.',
        ],
      },
      {
        heading: 'How to verify you are on the right page',
        paragraphs: [
          'Check the game title, creator, and URL. The public Roblox API snapshot identifies the universe as 8356066619 and the root place as 71132543521245.',
          'If a link promises free Robux, secret codes, private exploit tools, or a download outside Roblox, leave it. A real code should work inside the game without installing anything extra.',
        ],
      },
      {
        heading: 'Why script searches need a safe answer',
        paragraphs: [
          'Roblox games often attract searches for scripts, executors, and hacked clients. This site does not provide them. The safe answer is to avoid tools that can compromise your account or violate platform rules.',
          'If you want faster progress, use legitimate codes, better spending order, improved unit roles, and stronger reroll discipline instead.',
        ],
      },
      {
        heading: 'Use codes safely after joining',
        paragraphs: [
          'Once you are in the real game, use the codes page to copy active codes. Avoid sites that require installing anything, joining unrelated servers, or entering account details to redeem a code.',
          'Codes should be typed into Anime Squadron, not into a random external form.',
        ],
      },
      {
        heading: 'What to bookmark',
        paragraphs: [
          'Bookmark the official Roblox page, the Anime Squadron codes page, and the beginner guide. That gives you a safe play link, current rewards, and a plan for spending them.',
          'If an official Discord or Trello becomes verified later, add it only after checking that it is connected to the developer or official game page.',
        ],
      },
      {
        heading: 'Search terms that should make you cautious',
        paragraphs: [
          'Players often search for Anime Squadron APK, script, executor, pastebin, auto farm, or free Robux because those terms appear around Roblox games. Those searches are risky. They usually lead away from the official experience and toward tools that can compromise accounts.',
          'A safe guide should answer those searches without providing the unsafe thing. The right answer is to play through Roblox, redeem legitimate codes inside the game, and improve progression through unit roles, farming order, and reroll discipline.',
          'If a YouTube video or website claims that a download will unlock secret units, unlimited Gems, or private codes, assume it is unsafe unless the official developer has published it through Roblox-connected channels.',
        ],
      },
      {
        heading: 'A safe setup checklist',
        paragraphs: [
          'Use the Roblox app or browser experience you already trust, sign in through Roblox only, and open Anime Squadron from the official game page. Check the creator name before playing, especially if a reposted link came from comments or chat.',
          'After joining, keep account actions inside Roblox. Redeem codes in game, join communities only through verified links, and never install a file just to claim rewards.',
          'If you are helping a younger player, set up the bookmark once and teach them to use that route every time. A repeatable safe path prevents them from searching for random mirrors whenever a new code or update appears.',
        ],
        bullets: [
          'Official game page first, then codes, then beginner guide.',
          'No APK mirrors, executors, modified clients, or external code forms.',
          'No password sharing for giveaways, private servers, or fake support.',
          'Use guide pages for faster progress instead of unsafe automation.',
          'Leave any page that turns game progress into an external login requirement.',
          'Report suspicious links instead of testing them on your main account.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I download Anime Squadron as an APK?',
        answer:
          'No safe standalone APK route is verified. Play through Roblox using the official game page.',
      },
      {
        question: 'Are scripts or executors safe for Anime Squadron?',
        answer:
          'No. This site does not provide scripts, exploits, modified clients, or unsafe downloads.',
      },
      {
        question: 'How do I know it is the right game?',
        answer:
          'Verify the Roblox page title, place id 71132543521245, and creator Komplex Studio.',
      },
      {
        question: 'Where should I redeem codes?',
        answer:
          'Redeem codes inside the real Roblox experience, not on a third-party form.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
