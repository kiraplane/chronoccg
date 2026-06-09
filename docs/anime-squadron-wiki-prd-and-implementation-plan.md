# Anime Squadron Wiki 需求与实现文档

目标站点：Anime Squadron Wiki  
目标域名：www.animesquadron.wiki  
需求来源：`docs/xuqiu.md`  
检查日期：2026-06-09

## 1. 项目目标

将现有 wiki 模板改造成只服务 Anime Squadron 的英文攻略站。站点聚焦 Roblox 玩家会搜索的高意图需求：Anime Squadron、Anime Squadron wiki、Anime Squadron codes、unit tier list、traits、stat rerolls、game modes、Discord/Trello/wiki、safe Roblox download。

首版不伪造未验证的单位数据库。Anime Squadron 仍处于 early access，公开资料主要来自 Roblox 官方页和代码站交叉验证，因此首版采用“codes + role-based tier list + decision-first guides”的安全信息架构。

## 2. 已验证基础信息

- 官方 Roblox 页面：https://www.roblox.com/games/71132543521245/Anime-Squadron
- Roblox universeId：8356066619
- Roblox rootPlaceId：71132543521245
- 官方标题：`[Early Access] Anime Squadron`
- 开发者 / 发布者：Komplex Studio
- Roblox 类型：Strategy / Tower Defense
- 官方描述核心：lane battler、summon & upgrade units、deploy anime heroes、level up、evolve、multiple game modes、team up with friends、bosses、enemy waves、rank climb
- 最大人数：16

## 3. 关键词矩阵

| keyword | intent | route | priority | status | evidence | notes |
| --- | --- | --- | --- | --- | --- | --- |
| Anime Squadron | head term / wiki hub | `/` | P0 | keep | Roblox official page, code-site coverage | 首页 H1 直接使用 Anime Squadron Wiki |
| Anime Squadron wiki | wiki intent | `/` + `/guides` | P0 | keep | Destructoid mentions no official wiki/Trello during launch window | 明确 unofficial，不冒充官方 |
| Anime Squadron codes | redeem rewards | `/codes` | P0 | keep | Beebom, Destructoid, Pro Game Guides | 首版最强流量页 |
| Anime Squadron redeem codes | redeem steps | `/guides/codes-redeem-guide` | P0 | keep | Beebom redeem flow + code demand | 解决失败、大小写、server refresh |
| Anime Squadron tier list | best units | `/tier-list` | P0 | keep | Roblox tower defense genre + competitor patterns | 先按角色排名，避免假单位数据 |
| Anime Squadron best units | unit choices | `/units` + `/guides/best-units-tier-list` | P0 | keep | 搜索结果中同类 Roblox TD 站点普遍覆盖 units | 数据稳定后再加单位详情 |
| Anime Squadron traits | trait shards / rerolls | `/traits` | P0 | keep | Codes rewards include Trait Shards, Perfect Cubes | 不编造 trait 名称，先给消费规则 |
| Anime Squadron stat reroll | stat rerolls | `/reroll` + guide | P0 | keep | Codes rewards include Stat Rerolls and Reroll Cubes | 高意图资源消费页 |
| Anime Squadron gems | spending | `/guides/gems-gold-spending-guide` | P1 | keep | Codes rewards include Gems and Gold | 文章承载，不单独建薄页 |
| Anime Squadron gold | spending | `/guides/gems-gold-spending-guide` | P1 | keep | Codes rewards include Gold | 与 gems 合并 |
| Anime Squadron game modes | mode rewards | `/game-modes` | P1 | keep | Roblox official description | story/waves/boss/co-op/rank |
| Anime Squadron Discord | community links | `/discord` | P1 | keep | Destructoid/PGG mention Discord source | 不固定未验证 invite |
| Anime Squadron Trello | official info | `/discord` | P1 | watch | Destructoid notes no official Wiki/Trello | 页面说明未验证 |
| Anime Squadron download | safe play | `/download` | P1 | keep | Roblox official page | safe Roblox only |
| Anime Squadron script / exploit / APK | unsafe demand | `/download` | P2 | watch | 常见 Roblox 风险词 | 做安全说明，不提供脚本/APK |

## 4. 竞品与参考模式

### Codes competitors

- Beebom：https://beebom.com/anime-squadron-codes/
- Destructoid：https://www.destructoid.com/anime-squadron-codes/
- Pro Game Guides：https://progameguides.com/roblox/anime-squadron-codes/

可学习：

- 更新日期清楚。
- active / expired code 分区。
- redemption failure FAQ。
- 官方 Discord / Roblox 链接提示。

改进点：

- 代码页之外增加 units、traits、reroll、game modes 的内部链接。
- 对未验证 Wiki/Trello 做安全说明。
- 把 code rewards 和早期消费顺序连接起来，而不是只列 code。

### Same-operator wiki references

抽样查看：

- https://www.animeastral.wiki/sitemap.xml
- https://defendyourbasewithanime.wiki/sitemap.xml
- https://www.animereversal.wiki/sitemap.xml

可学习：

- 首页 hub + category hub + long-tail guide。
- sitemap 里优先放英文核心页。
- `/codes`、`/guide`、`/tier-list`、`/traits`、`/units` 是 Roblox anime 站的常见入口。

本项目取舍：

- Anime Squadron 资料还薄，不启动 40-50 页矩阵。
- 首版 15 个左右英文核心 URL 足够：category hub + 9 篇 guides + legal。
- 等 GSC 和实际游戏数据出现后再扩展单位详情、traits list、banner 页面。

### Kingshotguide 参考

参考项目：`/Users/he/Documents/AI/vibe coding/kingshot/kingshotguide`

学习点：

- guide 文章 decision-first，而不是模板化复述。
- YouTube 作为 source reference，不把视频 transcript 改写成文章。
- 每篇文章都从“应该怎么做”开始，并有明确 stop rule。

Anime Squadron 当前没有可靠专属 YouTube 指南结果，因此 guide 数据先保留 `videoSearchQueries` 和 `sourceNotes`，等可靠视频出现后再嵌入。

## 5. 首版信息架构

核心页面：

- `/` Anime Squadron Wiki homepage hub
- `/codes`
- `/tier-list`
- `/units`
- `/traits`
- `/reroll`
- `/game-modes`
- `/discord`
- `/download`
- `/updates`
- `/guides`
- `/guides/[slug]`
- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

首批 guide：

1. `/guides/beginner-guide`
2. `/guides/codes-redeem-guide`
3. `/guides/best-units-tier-list`
4. `/guides/traits-reroll-guide`
5. `/guides/stat-reroll-guide`
6. `/guides/gems-gold-spending-guide`
7. `/guides/game-modes-rewards-guide`
8. `/guides/discord-trello-wiki-guide`
9. `/guides/safe-download-roblox-guide`

## 6. 数据层

新增/改造：

```txt
src/data/animesquadron/
  types.ts
  sources.ts
  codes.ts
  tier-list.ts
  traits.ts
  game-modes.ts
  guides.ts
  updates.ts
```

数据原则：

- codes 可以 active，因为多家 code-site 交叉验证。
- 单位名称、trait 名称、掉率不硬写，除非有官方/游戏内/可靠 wiki 数据。
- tier list 先按 role ranking：Main Carry、Boss Damage、Control、Economy、Support、Starter Filler。
- 所有 high-risk download/script intent 都走安全页，不提供脚本、executor、APK。

## 7. 视觉方向

官方 Roblox 缩略图偏红橙 anime battle 风，首版采用：

- background：`#090706`
- surface：`#130D0B`
- primary action：`#E03A22`
- information accent：`#37D6D0`
- reward accent：`#F3B23A`
- success/status：green tones

页面保持信息密集、8px radius、攻略站风格，不做 SaaS landing hero。

## 8. YouTube 指南补强记录

2026-06-09 重新搜索 YouTube，保留与 Anime Squadron 明确相关、并且能覆盖用户意图的结果。首版选入 guide metadata 的视频包括：

| intent | selected video | channel | guide usage |
| --- | --- | --- | --- |
| beginner / Gems / Gold / rerolls | `https://www.youtube.com/watch?v=yCsTbYaV7Sc` | DomiBlox | beginner、codes、stat reroll、Gems/Gold |
| beginner route | `https://www.youtube.com/watch?v=gCohIPnuQ0U` | Revex | backup beginner search signal |
| noob to pro | `https://www.youtube.com/watch?v=x8-wUSgKliU` | NOTORIOSX | game modes and progression intent |
| complete systems / secret unit / traits | `https://www.youtube.com/watch?v=gYhjMOCRRVY` | MimoBlox | tier list、traits |
| noob to pro / secret SSJ4 Gogeta | `https://www.youtube.com/watch?v=FDkLlTguYn0` | DomiBlox | secret/meta unit demand signal |
| full completion / mode coverage | `https://www.youtube.com/watch?v=0eEvcVJxFio` | NotScoobz | mode/progression demand signal |
| release gameplay | `https://www.youtube.com/watch?v=vBrjJ6alV84` | MimoBlox | gameplay validation signal |

处理原则：

- 文章不是视频转写，不出现“this video says/shows”式正文。
- YouTube 作为 walkthrough cross-check 和搜索意图证据；正文仍按玩家决策重写。
- 无可靠视频的 Discord/Trello/download 安全页不显示 `Source status` fallback block。
- Guide 字数已从短卡片式内容扩写为多段 decision-first 文章，覆盖执行顺序、误区、stop rule、FAQ 和内链。

## 9. 已实现清单

- 将旧模板数据目录改造成 `src/data/animesquadron`。
- 将旧模板业务组件目录改造成 `src/components/animesquadron`。
- 将公开 route group 改成 `src/app/[locale]/(animesquadron)`。
- 删除旧 dragons/campaigns/resources/factions/reigns/stronghold/alliance 公开路由。
- 新增 units、traits、reroll、game-modes、discord 等 Anime Squadron 页面。
- 更新 homepage、navbar、footer、sitemap、robots canonical、manifest、README、website config、legal copy。
- 下载 Roblox 官方图标/缩略图用于 logo、hero、OG 和 favicon。
- 首页新增 Search hub，把所有核心二级页关键词和 guide 长尾关键词呈现并加内链。
- Guide 详情页移除无视频时的 `Source status` 区块；有 YouTube 的文章显示 walkthrough cross-check embed。

## 10. 后续扩展

- 游戏正式 release 后，补真实 unit list、unit detail、trait list、banner watch 页面。
- 从 GSC 选择是否新增 `/gems`、`/bosses`、`/evolve`、`/summon`、`/codes/<month>`。
- 有可靠 YouTube 指南后，为 guide 增加视频 embed 和 source metadata。
