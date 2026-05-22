# Glitch Haven RPG

**Corebook Alpha 1.0**  
Created by AMPJD Games  
Compiled and cleaned for review: May 22, 2026

## What This Game Is

Glitch Haven is a lightweight tabletop RPG about surviving a modern world that has been rewritten by broken game logic. Streets, offices, shops, homes, and landmarks are turning into unstable dungeon zones. Everyday objects become weapons, monsters, crafting parts, shrines, or living threats.

The players are survivors trying to build safe havens, rescue NPCs, craft corrupted gear, awaken patron shrines, and fight through reality-breaking danger zones.

## Design Pillars

### Lightweight System

Glitch Haven uses a simple 2d6 core mechanic. Most checks are resolved with:

```text
2d6 + Stat vs Difficulty Rating
```

The goal is fast table play, low math, and easy improvisation.

### Systemic Chaos

The Glitch is not only story flavor. It appears as conditions, random events, corrupted enemies, unstable gear, shrine effects, and world pressure.

### Hybrid World

The setting is the real modern world with RPG logic leaking through it. A printer can become a boss. A cafe can become a base. A supermarket run can become a survival mission.

### Modular Expansion

Classes, shrines, crafting, corruption, factions, safe haven management, and campaigns are designed as modules that can grow after the core rules are playable.

---

# 1. Core Rules

## Core Mechanic

When a character attempts something risky, roll:

```text
2d6 + relevant Stat
```

Compare the result to the Difficulty Rating (DR).

| Result | Outcome |
| --- | --- |
| Total is equal to or higher than the DR | Success |
| Total is lower than the DR | Failure |
| Double 6 | Critical success |
| Double 1 | Critical failure |

Critical success means the action succeeds with an extra benefit. Critical failure means something goes wrong beyond ordinary failure.

## Difficulty Ratings

| DR | Challenge |
| --- | --- |
| 6 | Easy |
| 8 | Standard |
| 10 | Difficult |
| 12 | Very hard |
| 14 | Extreme |

## Stats

Stats range from `0` to `+3`.

| Stat | Used For |
| --- | --- |
| STR | Melee attacks, force, lifting, resisting physical harm |
| AGI | Dodging, movement, ranged attacks, initiative |
| INT | Hacking, crafting, analysis, technical magic |
| WIL | Mental resistance, divine power, rituals |
| PRE | Social control, negotiation, intimidation, commanding NPCs |

## Advantage and Disadvantage

| State | Roll |
| --- | --- |
| Advantage | Roll 3d6 and keep the highest 2 dice |
| Disadvantage | Roll 3d6 and keep the lowest 2 dice |

If a character has both Advantage and Disadvantage on the same roll, they cancel out and the character rolls normally.

## Conditions

| Condition | Effect |
| --- | --- |
| Burning | Take 1 damage at the end of each round until cured |
| Stunned | Lose 1 AP on your next turn |
| Glitched | Whenever you roll a 6, reroll it and treat the new result as final |
| Frozen | You cannot move for 1 round |
| Hexed | Disadvantage on your next magic roll |
| Bleeding | Take 1 damage at the end of each round until treated |
| Slowed | Your movement distance is halved for 1 round |

## Glitched Condition Note

Glitched is a signature condition. It should feel like reality is punishing good dice. Use it sparingly enough that it stays scary.

---

# 2. Combat

## Turn Structure

Combat is played in rounds. Each combatant takes a turn in initiative order.

## Initiative

Roll:

```text
1d6 + AGI
```

Highest result acts first. Ties are decided by the GM or by comparing AGI.

## Action Points

Each player character has `3 AP` per turn.

| Action | AP Cost |
| --- | --- |
| Move up to 3 spaces | 1 AP |
| Attack | 1 AP |
| Use item | 1 AP |
| Use ability | 1-2 AP |
| Skill check / interact | 1 AP |
| Defend | 1 AP |

## Attack Rolls

| Attack Type | Roll |
| --- | --- |
| Melee | 2d6 + STR |
| Ranged | 2d6 + AGI |
| Magic | 2d6 + INT or WIL |

Most normal enemies use DR 8 as their base Defense. Tougher enemies use DR 10 or higher.

## Damage

Damage is usually:

```text
Weapon damage + relevant Stat
```

If an ability lists fixed damage, use the ability damage instead.

## Defend

Spend 1 AP to prepare against danger. Until your next turn, gain one of the following:

- +1 DR against the next attack targeting you.
- Advantage on one roll to resist a condition.
- Protect an adjacent ally; if they are hit, you may take the damage instead.

## Movement and Spaces

The game can be played with a grid, theatre of the mind, or simple zones.

If using a grid, 1 space is roughly 5 feet. A character can move 3 spaces for 1 AP.

---

# 3. Character Creation

## Character Creation Steps

1. Create a concept and background.
2. Choose a class.
3. Assign 3 stat points.
4. Choose 3 starting abilities from your class.
5. Choose 1 background trait.
6. Choose starting gear.
7. Name the character and connect them to the group.

## Base Character Values

| Value | Starting Rule |
| --- | --- |
| HP | 10 + STR |
| AP | 3 |
| Inventory | 3 slots |
| Starting abilities | 3 |
| Starting trait | 1 |

## Assigning Stats

All stats begin at 0. Assign 3 points across STR, AGI, INT, WIL, and PRE.

No stat can start above +2. Through progression, stats can rise to a maximum of +3.

## Background Traits

Traits are small passive or narrative advantages. Pick one at character creation.

| Trait | Category | Effect |
| --- | --- | --- |
| Fast Learner | Mental | Gain +1 XP the first time you complete a major encounter in a campaign |
| Streetwise | Social | Advantage on urban investigation checks |
| Light Sleeper | Physical | You wake instantly when danger approaches during rest |
| Echo-Touched | Weird | Once per day, reroll a failed roll involving sound, memory, or echoes |
| Glitch Scar | Weird | Ignore one Glitch Event effect per session |
| Silver Tongue | Social | +1 to PRE checks when negotiating |
| Technophile | Mental | +1 to INT checks involving tech, hacking, or machines |
| Thick-Blooded | Physical | Advantage against poison, disease, or blood-based effects |
| Mark of Sulis | Weird | You can sense nearby shrine locations or sacred water |

## Starting Gear

Each character begins with:

- 1 basic weapon.
- 1 basic armor or protective clothing.
- 1 minor healing item.
- 1 class-appropriate tool or focus.
- Clothes, a bag, a blanket, and one day's worth of food.

---

# 4. Classes

Classes define identity and starting ability access. Classes do not need large stat bonuses. They are role frameworks with ability choices and upgrade paths.

Each class has:

- A role.
- 3 suggested starter abilities.
- 2 upgrade paths.

Players choose 3 starting abilities from their class list. During progression, they can learn more.

## Axe Warrior

**Role:** Brutal melee damage and crowd clearing.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Cleave | 1 AP | Attack one target and one adjacent enemy. |
| Reckless Swing | 1 AP | Deal +2 damage, but enemies have +1 to hit you until your next turn. |
| Berserker Charge | 2 AP | Move up to 3 spaces in a straight line and make a melee attack. |

### Upgrade Paths

**Blood Splitter:** gain Rage on kills, cause Bleeding with Cleave, deal more damage while under half HP.

**Juggernaut Breaker:** knock enemies back, shred armor, unlock a seismic slam AoE.

## Spear Warrior

**Role:** Tactical melee reach and line control.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Pierce Line | 1 AP | Hit up to 2 enemies in a straight line. |
| Quick Step | 1 AP | Move 2 spaces without triggering reactions or hazards from enemies. |
| Focused Jab | 1 AP | Gain Advantage if the target has no adjacent allies. |

### Upgrade Paths

**Hoplite Form:** counter stance, defensive movement, parry armor.

**Lancer Form:** longer dashes, stun chance, combo strikes.

## Shield Bearer

**Role:** Tank, protector, and battlefield control.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Shield Bash | 1 AP | Melee attack. On success, the target is Stunned. |
| Cover Ally | 1 AP | Until your next turn, redirect one hit from an adjacent ally to yourself. |
| Iron Wall | 1 AP | Gain +2 DR against the next attack before your next turn. |

### Upgrade Paths

**Aegis:** defense aura, partial reflection, cannot be pushed.

**Shield Shock:** stronger bash, ground slam, taunt and root effects.

## Priest

**Role:** Healing, purification, and divine support.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Heal | 1 AP | Restore 1d6 HP to a touched target. |
| Purify | 1 AP | Remove one negative condition. |
| Blessing | 1 AP | An ally gains +1 to their next roll. |

### Upgrade Paths

**Divine Voice:** stronger buffs, shrine healing, rare rituals.

**Spirit Caller:** ancestral aid, regen aura, prayer-based attacks.

## Warden

**Role:** Guardian hybrid, nature control, and survival.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Nature Bind | 1 AP | Root one target; it cannot move for 1 round. |
| Earth Guard | 1 AP | Gain +1 DR for 2 rounds. |
| Hunter's Mark | 1 AP | Mark a target; the next hit against it deals +1 damage. |

### Upgrade Paths

**Green Sentinel:** wards, thorns, ally protection.

**Wild Hunter:** traps, stealth, marked target bonuses.

## Fire Mage

**Role:** Area damage, burning, and destruction.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Fire Bolt | 1 AP | Ranged magic attack dealing fire damage. |
| Flame Field | 2 AP | Create a small burning zone. Creatures entering it take 1 damage. |
| Ignite | 1 AP | Inflict Burning on one target. |

### Upgrade Paths

**Pyromancer:** Fireball, extra damage to Burning targets, spreading flames.

**Inferno Caller:** flame companion, corpse explosion, burning movement trail.

## Ice Mage

**Role:** Control, slowing, and defensive magic.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Ice Spike | 1 AP | Ranged magic attack. On success, target is Slowed. |
| Frost Skin | 1 AP | Gain +1 DR. The next melee attacker takes 1 cold damage. |
| Ice Trap | 2 AP | Place a trap. First enemy entering it is Frozen. |

### Upgrade Paths

**Cryomancer:** AoE slow/freeze, chill chains, stronger ice armor.

**Glacier Warden:** ice walls, defensive zones, slippery terrain.

## Wind Mage

**Role:** Movement, disruption, and knockback.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Wind Slash | 1 AP | Ranged magic attack that pushes the target 1 space. |
| Gale Leap | 1 AP | Move 4 spaces ignoring difficult terrain. |
| Whirlwind | 2 AP | Push all adjacent enemies 1 space away. |

### Upgrade Paths

**Sky Dancer:** blink movement, dodge boost, movement-combo attacks.

**Storm Herald:** tornado pull, lightning strike, cone knockdown.

## Earth Mage

**Role:** Defense, area control, and terrain manipulation.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Stone Spike | 1 AP | Ranged magic attack from the ground. |
| Wall Rise | 2 AP | Create cover in an adjacent space. |
| Earth Bind | 1 AP | Target is Slowed or rooted on a critical success. |

### Upgrade Paths

**Terra Bastion:** rock armor, mini golem, taunt zone.

**Seismic Sage:** line AoE, stomp stun, quicksand trap.

## Energy Wizard

**Role:** High-risk tech-magic damage and disruption.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Chain Zap | 1 AP | Hit one target. On critical success, hit a second nearby target. |
| Overload | 1 AP | Take 1 damage to add +2 damage to your next magic attack. |
| Pulse Field | 2 AP | Short-range AoE energy burst. |

### Upgrade Paths

**Shock Caster:** longer chains, stun chance, EMP burst.

**Battery Mage:** charge meter, self-recharge, essence-powered attacks.

## Hex Witch

**Role:** Debuffs, status effects, and twisted control.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Weaken | 1 AP | Target takes -1 to its next attack or defense roll. |
| Curse Token | 1 AP | Place a token on a target. Your next Hex Witch ability against it has Advantage. |
| Hex Pulse | 2 AP | Inflict Hexed or fear-like confusion on nearby enemies. |

### Upgrade Paths

**Malediction:** longer curses, chained status effects, weakening aura.

**Possession:** control weakened enemies, mind-burst, mirror damage.

## Archer

**Role:** Precision ranged attacks, mobility, and traps.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Power Shot | 1 AP | Ranged attack with +2 damage. |
| Tripwire | 1 AP | Place a trap. The first enemy crossing it is Slowed. |
| Leap Shot | 2 AP | Move 2 spaces and make a ranged attack. |

### Upgrade Paths

**Ranger:** multi-shot, high-ground crits, scout companion.

**Saboteur:** poison arrows, explosive traps, camouflage.

## Scavenger

**Role:** Loot, improvisation, and chaotic field utility.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Trash Toss | 1 AP | Throw junk for improvised damage. On a critical success, add a random condition. |
| Quick Mod | 1 AP | Give one item +1 damage or +1 DR until the end of the encounter. |
| Sense Weakness | 1 AP | Gain Advantage against one glitched enemy this round. |

### Upgrade Paths

**Trash Lord:** stronger improvised weapons, scrap bombs, field upgrades.

**Core Hacker:** machine control, signal jammer, mini drone.

## Engineer

**Role:** Gadgets, constructs, and tactical support.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Deploy Turret | 2 AP | Place a small turret that attacks once per round until destroyed. |
| EMP Grenade | 1 AP | Disable one tech enemy or device for 1 round on success. |
| Armor Boost | 1 AP | Give an ally +1 DR until your next turn. |

### Upgrade Paths

**Siege Master:** heavy turret, laser mount, barricades.

**Utility Tech:** jump pads, repair drones, shield emitter.

## Tinker

**Role:** Crafting, alchemy, traps, and unstable support.

### Starter Abilities

| Ability | Cost | Effect |
| --- | --- | --- |
| Essence Infuse | 1 AP | Temporarily give an item a minor essence effect. |
| Extract Component | 1 AP | Break an object down into a useful crafting part. |
| Trap Crafter | 2 AP | Build a simple trap from available materials. |

### Upgrade Paths

**Field Crafter:** craft from field junk, reduce essence costs, patch-up kits.

**Essence Alchemist:** mix essence types, potion bombs, random effect vials.

---

# 5. Progression

## Gaining XP

| Event | XP |
| --- | --- |
| Major encounter | 1 XP |
| Completed mission goal | 1 XP |
| Rescued important NPC | 1 XP |
| Mini-boss | 2 XP |
| Boss | 2 XP |

## Spending XP

Every 5 XP, choose one upgrade:

- Learn one new class ability.
- Improve one stat by +1, to a maximum of +3.
- Unlock a new crafting tier.
- Unlock one class upgrade path feature.

## Horizontal Progression

Glitch Haven should not become a pure numbers race. New abilities, crafting options, haven features, and shrine effects should matter as much as stat increases.

---

# 6. Equipment and Inventory

## Inventory

Each character has 3 inventory slots by default.

Small items can be bundled at the GM's discretion. Armor and equipped weapons do not count against inventory unless the table wants stricter survival rules.

## Basic Weapons

| Weapon | Damage | Notes |
| --- | --- | --- |
| Scrap Shiv | 1d4 | +1 damage on stealth attacks |
| Pipe Wrench Club | 1d6 | Reliable blunt weapon |
| Rusted Sword | 1d6 | Standard melee weapon |
| Makeshift Spear | 1d6 | Can attack from 1 extra space away |
| Cracked Wand | 1d4 | Magic focus |
| Scrap Bow | 1d6 | Ranged weapon |

## Armor

Armor adds to defensive checks or reduces incoming damage, depending on table preference. The default rule is:

```text
Armor reduces incoming damage by its Defense value.
```

| Armor | Defense | Notes |
| --- | --- | --- |
| Heavy clothing | +1 | Common starting protection |
| Reinforced leather vest | +2 | Basic armor |
| Scrap plating | +3 | Heavy, noisy |
| Worn robe | +1 | Does not interfere with magic |

## Crafted Weapons

| Weapon | Damage | Components | Essence | Craft DR | Effect |
| --- | --- | --- | --- | --- | --- |
| Reclaimed Fire Axe | 1d8 | Broken fire axe + bolts | Yellow | 8 | Burn enemies on crit |
| Parking Meter Mace | 1d6 | Meter pole + cap | Yellow | 7 | Stun on critical success |
| Street Sign Spear | 1d6 | Signpost + duct tape | Yellow | 7 | Knockback on critical success |
| Burner Wand | 1d6 fire | Candle stick + lighter fluid | Yellow | 8 | Burning lasts +1 round |
| Frost Rod | 1d6 cold | Glass rod + freezer coil | Yellow | 8 | Slow 1 round on hit |
| Blower Wand | 1d4 wind | Desk fan + hose | Yellow | 7 | Push 1 space on hit |
| Compound Scrap Bow | 1d6 | Drawer rails + old bow limbs | Yellow | 7 | Bleed on critical success |
| Nailgun Launcher | 1d6 | Nailgun + battery | Yellow | 7 | Stagger on critical success |
| Drill Gauntlet | 1d8 | Drill + glove | Blue | 10 | Ignores armor once per fight |
| Circuit Pike | 1d8 | Fuse box + wiring | Blue | 10 | EMP pulse disables tech for 1 round |

## Crafted Armor

| Armor | Defense | Components | Essence | Craft DR | Effect |
| --- | --- | --- | --- | --- | --- |
| Sports Padding | +2 | Used padding + reinforced stitching | None | 5 | +1 melee damage while under half HP |
| Utility Harness | +1 | Belts + pockets | None | 4 | +1 to repairs or crafting |
| Chain Hoodie | +2 | Hoodie + chain links | Yellow | 7 | +1 movement space |
| Fireproof Lab Coat | +1 | Treated fabric + lab coat | Yellow | 6 | Fire resistance |
| Stealth Hoodie | +2 | Black fabric + foam pads | Yellow | 6 | Enemies have Disadvantage on perception checks |
| Riot Gear | +4 | Plexiglass + rubber pads | Blue | 10 | Taunt as 1 AP |
| Reflective Armor | +3 | Mirror shards + padded vest | Blue | 9 | Reflect one ranged attack on a critical defense |
| Exo-Joint Frame | +2 | Pistons + steel rods | Blue | 10 | +1 STR for lifting and tool use |

---

# 7. Crafting and Essence

## Core Crafting Formula

```text
Everyday Item + Essence + Crafter = Gear
```

Crafting requires appropriate tools, time, and a safe enough place to work.

## Crafting Roll

Roll:

```text
2d6 + INT vs Crafting DR
```

On success, the item is crafted. On failure, the components are not destroyed unless the GM says the attempt was risky.

## Essence Tiers

| Essence | Use |
| --- | --- |
| None | Basic improvised gear |
| Yellow / Basic Essence | +1 gear or minor special effect |
| Blue / Shrine Essence | +2 gear or major special effect |
| Divine Essence | Shrine-tier or story-tier crafting |

## Light Essence Effects

Roll d8 or choose.

| d8 | Weapon Effect | Armor Effect |
| --- | --- | --- |
| 1 | +1 weapon level | +1 armor level |
| 2 | Crit applies Glitched for 1 round | Auto-pass one defense roll per day |
| 3 | Add fire, lightning, or ice damage | Resist one elemental damage type |
| 4 | +1 to hit once per day | +1 DR against next condition |
| 5 | Heal 1 HP on crit | Gain 1 AP when reduced below half HP |
| 6 | Push target 1 space on crit | Reflect 1 melee damage |
| 7 | Bleed for 1 damage over 2 rounds | Reduce Burn, Frost, or Glitch duration by 1 round |
| 8 | Weapon counts as holy | Wearer glows faintly; +1 intimidate |

## Major Essence Effects

Roll d8 or choose.

| d8 | Weapon Effect | Armor Effect |
| --- | --- | --- |
| 1 | AoE damage once per day | Immunity to one condition |
| 2 | Stun on double 6 | Reflect magic once per fight |
| 3 | Glitch Rift pulls target on crit | Teleport 1 space as a reaction once per day |
| 4 | Bypass armor once per day | Take 0 damage from one source per rest |
| 5 | Shock Chain hits one extra enemy | Adjacent enemies get -1 to hit |
| 6 | Restore 1 AP on kill | Heal 2 HP when an enemy critically fails against you |
| 7 | Elemental Surge, +2 damage when charged | Nullify elemental damage once per fight |
| 8 | Warpstrike ignores line of sight once | Auto-dodge one attack per day |

---

# 8. Safe Havens and Shrines

## Safe Havens

A Safe Haven is a stable location where survivors can rest, craft, store supplies, recruit NPCs, and build shrine support.

Common safe haven examples:

- Old cafe.
- Reclaimed church.
- Library.
- School hall.
- Community centre.
- Warehouse.

## Safe Haven Functions

| Function | Requirement |
| --- | --- |
| Rest safely | Cleared zone |
| Store supplies | Basic barricades |
| Craft basic gear | Workbench and crafter NPC |
| Build shrine | Safe zone, shrine materials, worshipper NPC |
| Upgrade shrine | Boss essence and ongoing worship |

## Shrine Rules

- A haven may have only one active Patron God at a time.
- Shrines require safety and NPC support.
- Each player can use a shrine blessing once per day.
- Shrine upgrades unlock stronger blessings and higher crafting tiers.

## Shrine Building Cost

Default cost:

- 1 purified or cleared zone.
- 3 supporting NPCs.
- 1 divine or shrine essence.
- A successful WIL or PRE check, usually DR 8 or DR 10.

## Example Daily Blessings

At rest, each player chooses one available blessing:

- Reroll one failed roll.
- Add +1d6 to one damage roll.
- Heal 5 HP instantly.
- Remove one condition.
- Gain +1 DR against Glitch effects for one scene.

## Patron Gods

| Patron | Domain | Haven Bonus |
| --- | --- | --- |
| Brigid | Healing / Crafting | Faster crafting and one shrine revive per day |
| Epona | Travel / Mounts | Faster travel and earlier fast travel unlock |
| Cernunnos | Wild / Nature | Tameable creatures appear near the haven |
| Belenus | Light / Fire | Forged weapons gain +1 fire damage |
| Taranis | Storms / War | Allies begin fights with a charge token for lightning damage |
| Sucellus | Strength / Earth | Increased resource yield and carrying capacity |
| Nodens | Dreams / Sea | Dream realm side quests and protection from XP loss |
| Andraste | War / Vengeance | Bonus damage against dungeon bosses |
| Rhiannon | Spirit / Sovereignty | NPCs work faster and haven resists corruption |
| Arawn | Death / Shadow | Ghost scouts patrol and fallen NPCs may be restored |
| Woden | Wisdom / Fate | Rare spell access and crit bonus against elites |
| Thunor | Thunder / Protection | Haven defenses gain lightning attacks |
| Tiw | Justice / Law | NPC morale conflicts are easier to resolve |
| Frige | Hearth / Love | Increased loyalty and food storage |
| Eostre | Fertility / Rebirth | Resource nodes respawn faster |
| Sulis Minerva | Water / Wisdom | Healing pools and stronger shrine upgrades |
| Maponus Apollo | Art / Youth | Music buffs and mental resistance |
| Coventina | Springs / Dreams | Water essence gathers automatically |
| Belatucadros | Battle / Shine | Champion Form once per dungeon |
| Camulus Mars | Conquest / Order | Fortified defenses and faster NPC training |

---

# 9. Glitch Events and Corruption

## Glitch Events

Once per session, or whenever the story demands it, the GM may trigger a Glitch Event.

| d6 | Event |
| --- | --- |
| 1 | Time stutters; everyone repeats their last movement |
| 2 | One enemy mutates and gains +2 HP |
| 3 | A random object animates as a hostile creature |
| 4 | Gravity flickers; ranged attacks have Disadvantage for 1 round |
| 5 | A god manifests briefly, offering a bargain or warning |
| 6 | Reality stabilizes; each player may remove one condition |

## Corruption Meter

The Corruption Meter is an optional campaign pressure system.

Use a 0-10 track.

| Corruption | World State |
| --- | --- |
| 0-2 | Stable pockets remain common |
| 3-5 | Glitch events become frequent |
| 6-8 | Safe havens are threatened |
| 9 | Dungeons spread into normal locations |
| 10 | Major outbreak or boss event |

## Raising Corruption

Corruption rises when:

- Players fail major missions.
- A haven is attacked and not defended.
- A boss escapes.
- Players overuse unstable essence.
- A shrine ritual fails critically.

## Lowering Corruption

Corruption lowers when:

- Players clear a dungeon.
- A shrine is upgraded.
- NPCs stabilize a zone.
- A major glitch source is destroyed.

---

# 10. Bestiary

## Enemy Format

Each enemy has:

- HP.
- DR.
- Damage.
- One or more special traits.
- Loot or essence, if relevant.

## Starter Enemies

| Enemy | HP | DR | Damage | Traits |
| --- | --- | --- | --- | --- |
| Plastic Rat | 4 | 6 | 1 | Swarm instincts |
| Glitch Rat | 3 | 6 | 1d4 | +1 damage if adjacent to another rat |
| Hover Trolley | 8 | 8 | 1d3 | Bash and knockback |
| Fridge Wight | 10 | 9 | 2 cold | Can inflict Slowed |
| Nail Crawler | 6 | 7 | 2 pierce | Crawls over walls |
| Drill Wasp | 9 | 8 | 1d4 shock | Flying; shock crits Stun |
| Monitor Fiend | 4 | 8 | 1 | Cable Whip; prefers casters |
| Printer Golem | 8 | 8 | 1d6 | Paper jam grapple |

## Glitched Animal and Hybrid Bestiary

| Name | Description | HP | DR | Special Traits |
| --- | --- | --- | --- | --- |
| Rustclaw Squirrel | Twisted squirrel with rusty forks and nails | 7 | 7 | Leap Slash, Wall Scramble |
| Magpie Collector | Hoards shiny objects and shoots glass shards | 9 | 8 | Glass Shot, Item Thief |
| Trash Rat Titan | Giant rodent fused with rubbish and cans | 11 | 9 | Tail Slam, Disease Cloud |
| Hound of the Siren Pipe | Stray dog fused with a pipe siren | 12 | 10 | Sonic Bark, Tracking Snout |
| Mirror Pigeon | Reflective bird that stores the last spell cast | 6 | 8 | Reflect Magic, Sky Scatter |
| Wirehawk | Cable-wrapped bird that zaps and tangles targets | 10 | 9 | Cable Snare, Zap Dive |
| Alleycat Specter | Semi-ghost cat flickering through shadows | 8 | 9 | Shadow Step, Distracting Meow |
| Steelback Fox | Fox merged with car scraps and barbed wire | 12 | 10 | Steel Charge, Shrapnel Spray |
| Glitch Elk | Antlers emit static and traffic-light flashes | 16 | 12 | Static Surge, Ram |
| Garden Golem | Animated garden ornament and hose hybrid | 13 | 9 | Hose Blast, Plant Growth |
| Plastic Wasp Swarm | Toy-plastic wasps with hive-mind logic | 10 | 11 | Swarm Bite, Nest Rebuild |
| Flame Toad | Toad fused with lighter and match fire | 10 | 8 | Fire Spit, Self-Ignite |
| Broken Drone Falcon | Bird-drone hybrid with lock-on targeting | 9 | 9 | Lock-On Screech, Kamikaze |
| Drain Serpent | Sewer snake fused with pipe fragments | 12 | 10 | Drain Lash, Acid Spray |
| Echo Bat | Sound-warped bat that blinds with sonar | 8 | 9 | Echo Burst, Sound Cloak |
| Bone Crow | Bird merged with cemetery bones and rebar | 10 | 9 | Bone Peck, Carrion Cry |
| Neon Rabbit | Shop-sign rabbit leaving false trails | 7 | 7 | Trail Decoy, Blink Hop |

## Mini-Bosses

| Mini-Boss | HP | DR | Damage | Abilities | Loot |
| --- | --- | --- | --- | --- | --- |
| Photocopier Spider | 12 | 9 | 1d6 | AoE flash, paper-web snare | Ink Essence |
| Null Fang | 18 | 10 | 2d6 | Phase Charge, Data Howl | Yellow Essence, Glitched Fang Blade |
| Loop Widow | 22 | 11 | 2d4 glitch | Memory Loop, Net Glitch | Yellow Essence, Spindle Fang |
| Signal Revenant | 26 | 12 | 1d10 shock | Signal Drain, Ping Jump | Yellow Essence, Signal Staff |

## Bosses

| Boss | HP | DR | Damage | Abilities | Loot |
| --- | --- | --- | --- | --- | --- |
| Server Mind Cluster | 18 | 10 | 1d8 shock | Firewall, Glitch Pulse, summons firewall spirits | Tech Essence, Shrine Data Key |
| Overseer.exe | 40 | 14 | 2d8 | EMP Pulse, Replicate Minion, Firewall Cloak | Blue Essence, Eye of the Observer |
| Forgotten Shopper | 50 | 13 | 2d10 | Discount Rage, Aisle Crash | Blue Essence, Bag of Holding Brands |
| Echo of the Admin | 45 | 15 | 1d12 glitch magic | Force Reboot, Stack Overflow, System Rewrite | Blue Essence, Admin Ring |

---

# 11. Quick Start Adventure: The Glitch in Tower 9

## Summary

Tower 9, a tech start-up high-rise, has been overtaken by corruption. NPC engineers are trapped inside. The building is transforming into a dungeon. The players must enter, rescue survivors, craft their first upgraded gear, and clear the shrine room.

## Recommended Setup

| Detail | Value |
| --- | --- |
| Recommended level | Starting characters |
| Players | 2-5 |
| Objective | Rescue engineers and clear the shrine |
| Map | 4 floors, elevator hub, 2 locked security doors, 1 shrine room |

## Floor 1: Lobby and Printer Golems

The lobby flickers between corporate reception and dungeon entrance. Office chairs twitch like insects. Printers cough paper like warning flags.

### Encounter

- 2 Printer Golems.
- 2 Mouse Minions.

### Loot

- Ink Essence.
- Broken printer parts.
- Improvised blunt weapon.

### Teaches

- Basic combat.
- Essence loot.
- Using modern objects as resources.

## Floor 2: Cubicle Maze

Cubicles rearrange into false corridors. Paper shredders whisper names.

### Challenge

Disable the paper shredder trap:

```text
2d6 + INT vs DR 10
```

Failure causes 1d6 damage or inflicts Bleeding.

### Optional Encounter

- 1 Monitor Fiend.
- 2 Cable Crawlers.

## Floor 3: Photocopier Spider

The copier has grown legs from jammed paper trays and ceiling cables.

| Stat | Value |
| --- | --- |
| HP | 12 |
| DR | 9 |
| Damage | 1d6 |

### Abilities

- **Flash Burst:** all nearby players roll WIL DR 9 or become Stunned.
- **Paper Web:** AGI DR 10 or become Frozen for 1 round.

### Loot

- Paper Core.
- Yellow Essence.
- Crafting component for +1 gear.

## Floor 4: Server Cluster and Shrine Room

The final room contains a half-formed shrine buried under a linked server hive.

| Stat | Value |
| --- | --- |
| HP | 18 |
| DR | 10 |
| Trait | Immune to non-crafted weapons |

### Abilities

- **Glitch Pulse:** all characters within 3 spaces roll WIL DR 10 or become Glitched.
- **Firewall:** an INT DR 10 check is required to reach the core safely.
- **System Reboot:** once per fight, the boss heals 3 HP.

### Victory Rewards

- Tech Essence x3.
- Memory Core.
- Shrine activation key.
- Lead Engineer rescued.
- Worshipper NPC rescued.

## NPCs

| NPC | Role |
| --- | --- |
| Lead Engineer | Unlocks crafting bench and +1 gear crafting |
| Worshipper | Enables shrine activation |
| QA Tester | Grants Advantage on one future dungeon navigation check |

---

# 12. Starter Mini-Campaign: Startup Glitch

This campaign begins in a run-down cafe in glitched Dartford town centre. The cafe is one of the few stable areas and can become the party's first Safe Haven.

## Session 1: Warm Brew, Cold Streets

### Goal

Establish a base by scavenging food and scouting nearby streets.

### Starting Hook

The players wake in an old cafe. Outside, corrupted creatures roam and buildings flicker out of reality. The cafe is stable, but supplies are low.

## Quest 1: Cold Chain Crisis

### Objective

Retrieve food from a local supermarket.

### Enemies

| Enemy | HP | DR | Damage |
| --- | --- | --- | --- |
| Plastic Rat | 4 | 6 | 1 |
| Hover Trolley | 8 | 8 | 1d3 |
| Fridge Wight | 10 | 9 | 2 cold |

### Rewards

- 1d6 days of preserved food.
- Broken plastic parts.
- Rusted kitchen knife.

## Quest 2: Nuts and Bolts

### Objective

Recover materials from a hardware store to build a workbench and simple shrine.

### Enemies

| Enemy | HP | DR | Damage |
| --- | --- | --- | --- |
| Nail Crawler | 6 | 7 | 2 pierce |
| Drill Wasp | 9 | 8 | 1d4 shock |

### Materials

- Screws.
- Wires.
- Wood planks.
- Broken power tool cores.
- Shrine fragments.

### Build Phase

After returning to the cafe, players can build:

- **Simple Workbench:** allows +0 gear crafting.
- **Simple Shrine:** allows a chosen Patron to grant one minor daily blessing.

## Campaign Direction

After the cafe is stable, the party can:

- Rescue NPCs.
- Expand shrine support.
- Build defenses.
- Find a dungeon entrance.
- Craft +1 weapons.
- Explore corrupted streets.

---

# 13. GM Tools

## Quick Mission Template

Use this structure to build sessions quickly.

1. **Hook:** What forces the players to act now?
2. **Location:** What familiar modern place has been corrupted?
3. **Objective:** What must be rescued, recovered, cleared, or discovered?
4. **Threats:** 2-3 enemy types and 1 hazard.
5. **Glitch Twist:** One reality-breaking complication.
6. **Reward:** XP, essence, NPCs, gear, or haven upgrade.

## Location Mutation Table

| d6 | Mutation |
| --- | --- |
| 1 | The exits loop back into the room |
| 2 | Furniture animates and attacks |
| 3 | Gravity shifts sideways for one round |
| 4 | A normal object becomes a shrine fragment |
| 5 | An enemy copies a player ability |
| 6 | The location briefly stabilizes and reveals hidden loot |

## Everyday Object Loot Table

| d6 | Object | Use |
| --- | --- | --- |
| 1 | Broom handle | Spear shaft |
| 2 | Frying pan | Shield or blunt weapon |
| 3 | Extension cable | Snare, whip, or crafting wire |
| 4 | Phone battery | Energy component |
| 5 | Glass bottle | Throwable or potion container |
| 6 | Road sign | Armor plate or spear head |

## Website Prototype Scope

For the first website upload, prioritize:

- Core rules summary.
- Character creation.
- Class cards.
- Combat quick reference.
- Crafting and essence.
- Shrine patrons.
- Starter adventure.
- Bestiary preview.
- Dartford campaign map visual.

Keep deep campaign chapters and long loot lists as expandable pages later.

## Campaign Map Asset

The current campaign map asset is:

```text
assets/dartford-map-nature-digital-glitches.png
```

Use it as the first website/world-map visual for Glitch Haven. It establishes Dartford as a playable campaign space where modern roads, shops, parks, hospitals, and local landmarks are being overtaken by forest growth and digital glitch corruption.

---

# 14. Known Design Decisions

## Current Core Choice

This alpha uses the lightweight stat model:

```text
STR, AGI, INT, WIL, PRE from 0 to +3
```

Some older notes use a 30-point attribute system with Strength, Dexterity, Endurance, Intelligence, Wit, Luck, and Stamina. That version has been treated as a legacy draft because it creates more math and moves away from the lightweight design pillar.

## Open Questions for Next Pass

- Should armor reduce damage, raise Defense DR, or both?
- Should class abilities have per-rest limits, cooldowns, or only AP costs?
- How many classes should be in the first public prototype?
- Should the website version present all 15 classes or start with 6 core classes?
- How harsh should the Corruption Meter be?
- Should shrine patrons be campaign-facing only, or selectable by players at character creation?

## Recommended Next Build

Create the website prototype around a smaller starter set:

- Axe Warrior.
- Shield Bearer.
- Fire Mage.
- Hex Witch.
- Scavenger.
- Tinker.

That gives melee, tank, caster, debuff, utility, and crafting roles without overwhelming first-time readers.
