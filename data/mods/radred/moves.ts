export const Moves: {[k: string]: ModdedMoveData} =	{
	aquafang: {
		shortDesc: "No additional effect.",
		num: 850,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Aqua Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		target: "normal",
		type: "Water",
		contestType: "Tough",
	},
	armthrust: {
		inherit: true,
		basePower: 25,
	},
	attackorder: {
		inherit: true,
		basePower: 120,
	},
	beatup: {
		num: 251,
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Tough",
		desc: "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
	},
	blazekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	bonemerang: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	bonerush: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	chargebeam: {
		inherit: true,
		accuracy: 100,
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		desc: "Has a 100% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk by 1.",
	},
	chatter: {
		inherit: true,
		basePower: 80,
		isNonstandard: null,
	},
	covet: {
		inherit: true,
		type: "Fairy",
		isNonstandard: null,
	},
	cut: {
		inherit: true,
		accuracy: 100,
		basePower: 75,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		type: "Steel",
	},
	darkhole: {
		num: 851,
		name: "Dark Hole",
		category: "Special",
		pp: 5,
		accuracy: 100,
		basePower: 100,
		type: "Dark",
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1},
		onTryMove() {
			this.attrLastMove('[still]');
		},
		onPrepareHit(target, source) {
			this.add("-anim", source, "Dark Pulse", target);
			this.add("-anim", source, "Dark Void", target);
		},
		target: "normal",
		secondary: {
			chance: 40,
			status: 'slp',
		},
		shortDesc: "40% chance of putting foe to sleep, bypasses substitute.",
	},
	diamondstorm: {
		inherit: true,
		category: "Special",
	},
	doublekick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	dracometeor: {
		inherit: true,
		accuracy: 100,
	},
	dragonhammer: {
		inherit: true,
		basePower: 100,
	},
	drillpeck: {
		inherit: true,
		critRatio: 2,
		shortDesc: "High critical hit ratio.",
	},
	explosion: {
		inherit: true,
		basePower: 150,
		desc: "The user faints after using this move, even if this move fails for having no target. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints. The target's Defense is halved during damage calculation.",
	},
	falseswipe: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	flash: {
		num: 148,
		accuracy: 100,
		basePower: 50,
		category: "Special",
		isNonstandard: null,
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		secondary: {
			chance: 50,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Electric",
		contestType: "Beautiful",
		desc: "Has a 50% chance to lower the target's Attack by 1 stage.",
		shortDesc: "50% chance to lower the target's Attack by 1.",
	},
	flashcannon: {
		inherit: true,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1},
	},
	fleurcannon: {
		inherit: true,
		accuracy: 100,
	},
	fly: {
		inherit: true,
		accuracy: 100,
	},
	forbiddenspell: {
		num: 853,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Forbidden Spell",
		secondary: null,
		target: "self",
		type: "Psychic",
		flags: {},
		pp: 5,
		priority: 0,
		onHit(target, effect) {
			const spellMove = this.random(8);
			let chosen = '';
			switch (spellMove) {
			case 0:
				chosen = 'Shell Smash';
				break;
			case 1:
				chosen = 'Healing Wish';
				break;
			case 2:
				chosen = 'Dark Hole';
				break;
			case 3:
				chosen = 'Tail Glow';
				break;
			case 4:
				chosen = 'Roar of Time';
				break;
			case 5:
				chosen = 'Quiver Dance';
				break;
			case 6:
				chosen = 'No Retreat';
				break;
			case 7:
				chosen = 'Soul Robbery';
				break;
			}
			this.actions.useMove(chosen, target);
		},
		shortDesc: "Isn't RNG fun?",
		desc: "Uses of one of these 8 moves: Shell Smash, Healing Wish, Dark Hole, Tail Glow, Roar of Time, Quiver Dance, No Retreat, or Soul Robbery",
	},
	furycutter: {
		inherit: true,
		flags: {blade: 1, contact: 1, protect: 1, mirror: 1},
	},
	headsmash: {
		inherit: true,
		accuracy: 85,
	},
	highhorsepower: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	highjumpkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1},
	},
	inferno: {
		inherit: true,
		basePower: 120,
	},
	jawlock: {
		inherit: true,
		basePower: 90,
		type: "Fighting",
	},
	jumpkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, kick: 1},
		isNonstandard: null,
	},
	kingsshield: {
		inherit: true,
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		desc: "The user is protected from most attacks made by other Pokemon during this turn. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from damaging attacks.",
	},
	leafblade: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	leafstorm: {
		inherit: true,
		accuracy: 100,
	},
	lovelykiss: {
		inherit: true,
		accuracy: 85,
	},
	lowkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	megakick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	megadrain: {
		inherit: true,
		basePower: 60,
	},
	mistyexplosion: {
		inherit: true,
		desc: "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "User faints. User on Misty Terrain: 1.5x power. The target's Defense is halved during damage calculation.",
	},
	multiattack: {
		inherit: true,
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
	},
	needlearm: {
		inherit: true,
		basePower: 95,
		isNonstandard: null,
	},
	nightslash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	octazooka: {
		inherit: true,
		accuracy: 100,
		basePower: 80,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		desc: "Has a 100% chance to lower the target's speed by 1 stage.",
		shortDesc: "100% chance to lower the target's speed by 1.",
	},
	overheat: {
		inherit: true,
		accuracy: 100,
	},
	paraboliccharge: {
		inherit: true,
		basePower: 75,
	},
	poisonfang: {
		inherit: true,
		basePower: 75,
	},
	psychoboost: {
		inherit: true,
		accuracy: 100,
		isNonstandard: null,
	},
	psychocut: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	pyroball: {
		inherit: true,
		flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1, kick: 1},
	},
	razorshell: {
		inherit: true,
		accuracy: 100,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
		critRatio: 2,
		secondary: null,
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
	},
	revelationdance: {
		inherit: true,
		basePower: 100,
		type: "Fairy",
		isNonstandard: null,
	},
	roaroftime: {
		num: 459,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Roar of Time",
		pp: 10,
		priority: -6,
		flags: {protect: 1, mirror: 1},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		contestType: "Beautiful",
		desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute.",
		shortDesc: "Forces the target to switch to a random ally.",
	},
	rocksmash: {
		inherit: true,
		basePower: 60,
	},
	rollingkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
		isNonstandard: null,
	},
	sacredsword: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	secretsword: {
		inherit: true,
		flags: {protect: 1, mirror: 1, blade: 1},
	},
	selfdestruct: {
		inherit: true,
		basePower: 100,
		desc: "The user faints after using this move, even if this move fails for having no target. The target's Defense is halved during damage calculation. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints. The target's Defense is halved during damage calculation.",
	},
	shadowbone: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
	},
	shadowclaw: {
		inherit: true,
		basePower: 80,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	shadowpunch: {
		inherit: true,
		basePower: 80,
	},
	skullbash: {
		inherit: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			this.boost({atk: 1, def: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Attack and Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Raises user's Attack and Defense by 1 on turn 1. Hits turn 2.",
	},
	slam: {
		inherit: true,
		accuracy: 90,
	},
	slash: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},
	snipeshot: {
		inherit: true,
		basePower: 70,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1},
		critRatio: 3,
	},
	solarblade: {
		inherit: true,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, blade: 1},
	},
	soulrobbery: {
		num: 852,
		accuracy: 100,
		basePower: 105,
		category: "Special",
		name: "Soul Robbery",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, authentic: 1},
		stealsBoosts: true,
		// Boost stealing implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
		desc: "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
		shortDesc: "Steals target's boosts before dealing damage.",
	},
	spikecannon: {
		inherit: true,
		flags: {bullet: 1, protect: 1, mirror: 1},
		isNonstandard: null,
	},
	spikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('Shield Dust')) return;
				const damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 24);
			},
		},
	},
	stealthrock: {
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				if (pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('Shield Dust')) return;
				const typeMod = this.clampIntRange(pokemon.runEffectiveness(this.dex.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
	},
	stickweb: {
		inherit: true,
		condition: {
			onStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('Shield Dust')) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, this.effectData.source, this.dex.getActiveMove('stickyweb'));
			},
		},
	},
	stomp: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, nonsky: 1},
	},
	strengthsap: {
		inherit: true,
		pp: 4,
		noPPBoosts: true,
	},
	suckerpunch: {
		inherit: true,
		flags: {contact: 1, protect: 1, punch: 1, mirror: 1},
	},
	tailslap: {
		inherit: true,
		accuracy: 100,
	},
	toxicspikes: {
		inherit: true,
		condition: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel') || pokemon.hasItem('heavydutyboots') || pokemon.hasAbility('Shield Dust')) {
					return;
				} else if (this.effectData.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
	},
	tripleaxel: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	triplekick: {
		inherit: true,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return 20 * move.hit;
		},
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	tropkick: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, kick: 1},
	},
	wickedblow: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1},
	},
	wideguard: {
		inherit: true,
		stallingMove: true,
		onPrepareHit(pokemon) {
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onTry() {},
	},
	xscissor: {
		inherit: true,
		flags: {contact: 1, protect: 1, mirror: 1, blade: 1},
	},

	// allow all past moves
	"10000000voltthunderbolt": {
		inherit: true,
		isNonstandard: null,
	},
	aciddownpour: {
		inherit: true,
		isNonstandard: null,
	},
	alloutpummeling: {
		inherit: true,
		isNonstandard: null,
	},
	assist: {
		inherit: true,
		isNonstandard: null,
	},
	barrage: {
		inherit: true,
		isNonstandard: null,
	},
	barrier: {
		inherit: true,
		isNonstandard: null,
	},
	beakblast: {
		inherit: true,
		isNonstandard: null,
	},
	bestow: {
		inherit: true,
		isNonstandard: null,
	},
	bide: {
		inherit: true,
		isNonstandard: null,
	},
	blackholeeclipse: {
		inherit: true,
		isNonstandard: null,
	},
	bloomdoom: {
		inherit: true,
		isNonstandard: null,
	},
	boneclub: {
		inherit: true,
		flags: {protect: 1, mirror: 1, bone: 1},
		isNonstandard: null,
	},
	breakneckblitz: {
		inherit: true,
		isNonstandard: null,
	},
	bubble: {
		inherit: true,
		isNonstandard: null,
	},
	camouflage: {
		inherit: true,
		isNonstandard: null,
	},
	captivate: {
		inherit: true,
		isNonstandard: null,
	},
	catastropika: {
		inherit: true,
		isNonstandard: null,
	},
	chipaway: {
		inherit: true,
		isNonstandard: null,
	},
	clamp: {
		inherit: true,
		isNonstandard: null,
	},
	clangoroussoulblaze: {
		inherit: true,
		isNonstandard: null,
	},
	cometpunch: {
		inherit: true,
		isNonstandard: null,
	},
	constrict: {
		inherit: true,
		isNonstandard: null,
	},
	continentalcrush: {
		inherit: true,
		isNonstandard: null,
	},
	corkscrewcrash: {
		inherit: true,
		isNonstandard: null,
	},
	darkvoid: {
		inherit: true,
		isNonstandard: null,
	},
	devastatingdrake: {
		inherit: true,
		isNonstandard: null,
	},
	dizzypunch: {
		inherit: true,
		isNonstandard: null,
	},
	doubleslap: {
		inherit: true,
		isNonstandard: null,
	},
	dragonrage: {
		inherit: true,
		isNonstandard: null,
	},
	eggbomb: {
		inherit: true,
		isNonstandard: null,
	},
	embargo: {
		inherit: true,
		isNonstandard: null,
	},
	extremeevoboost: {
		inherit: true,
		isNonstandard: null,
	},
	feintattack: {
		inherit: true,
		isNonstandard: null,
	},
	flameburst: {
		inherit: true,
		isNonstandard: null,
	},
	foresight: {
		inherit: true,
		isNonstandard: null,
	},
	frustration: {
		inherit: true,
		isNonstandard: null,
	},
	genesissupernova: {
		inherit: true,
		isNonstandard: null,
	},
	gigavolthavoc: {
		inherit: true,
		isNonstandard: null,
	},
	grasswhistle: {
		inherit: true,
		isNonstandard: null,
	},
	guardianofalola: {
		inherit: true,
		isNonstandard: null,
	},
	healblock: {
		inherit: true,
		isNonstandard: null,
	},
	healorder: {
		inherit: true,
		isNonstandard: null,
	},
	heartstamp: {
		inherit: true,
		isNonstandard: null,
	},
	heartswap: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpower: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerbug: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdark: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerdragon: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerelectric: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfighting: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerfire: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerflying: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerghost: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowergrass: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerground: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerice: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpoison: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerpsychic: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerrock: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowersteel: {
		inherit: true,
		isNonstandard: null,
	},
	hiddenpowerwater: {
		inherit: true,
		isNonstandard: null,
	},
	hydrovortex: {
		inherit: true,
		isNonstandard: null,
	},
	hyperfang: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacefury: {
		inherit: true,
		isNonstandard: null,
	},
	hyperspacehole: {
		inherit: true,
		isNonstandard: null,
	},
	iceball: {
		inherit: true,
		isNonstandard: null,
	},
	icehammer: {
		inherit: true,
		isNonstandard: null,
	},
	infernooverdrive: {
		inherit: true,
		isNonstandard: null,
	},
	iondeluge: {
		inherit: true,
		isNonstandard: null,
	},
	judgment: {
		inherit: true,
		isNonstandard: null,
	},
	karatechop: {
		inherit: true,
		isNonstandard: null,
	},
	letssnuggleforever: {
		inherit: true,
		isNonstandard: null,
	},
	lightofruin: {
		inherit: true,
		isNonstandard: null,
	},
	lightthatburnsthesky: {
		inherit: true,
		isNonstandard: null,
	},
	luckychant: {
		inherit: true,
		isNonstandard: null,
	},
	magnetbomb: {
		inherit: true,
		isNonstandard: null,
	},
	magnitude: {
		inherit: true,
		isNonstandard: null,
	},
	maliciousmoonsault: {
		inherit: true,
		isNonstandard: null,
	},
	meditate: {
		inherit: true,
		isNonstandard: null,
	},
	mefirst: {
		inherit: true,
		isNonstandard: null,
	},
	menacingmoonrazemaelstrom: {
		inherit: true,
		isNonstandard: null,
	},
	miracleeye: {
		inherit: true,
		isNonstandard: null,
	},
	mirrormove: {
		inherit: true,
		isNonstandard: null,
	},
	mirrorshot: {
		inherit: true,
		isNonstandard: null,
	},
	mudbomb: {
		inherit: true,
		isNonstandard: null,
	},
	mudsport: {
		inherit: true,
		isNonstandard: null,
	},
	naturalgift: {
		inherit: true,
		isNonstandard: null,
	},
	neverendingnightmare: {
		inherit: true,
		isNonstandard: null,
	},
	nightmare: {
		inherit: true,
		isNonstandard: null,
	},
	oceanicoperetta: {
		inherit: true,
		isNonstandard: null,
	},
	odorsleuth: {
		inherit: true,
		isNonstandard: null,
	},
	ominouswind: {
		inherit: true,
		isNonstandard: null,
	},
	powder: {
		inherit: true,
		isNonstandard: null,
	},
	precipiceblades: {
		inherit: true,
		isNonstandard: null,
	},
	psywave: {
		inherit: true,
		isNonstandard: null,
	},
	pulverizingpancake: {
		inherit: true,
		isNonstandard: null,
	},
	punishment: {
		inherit: true,
		isNonstandard: null,
	},
	pursuit: {
		inherit: true,
		isNonstandard: null,
	},
	rage: {
		inherit: true,
		isNonstandard: null,
	},
	razorwind: {
		inherit: true,
		isNonstandard: null,
	},
	refresh: {
		inherit: true,
		isNonstandard: null,
	},
	relicsong: {
		inherit: true,
		isNonstandard: null,
	},
	return: {
		inherit: true,
		isNonstandard: null,
	},
	rockclimb: {
		inherit: true,
		isNonstandard: null,
	},
	rototiller: {
		inherit: true,
		isNonstandard: null,
	},
	savagespinout: {
		inherit: true,
		isNonstandard: null,
	},
	searingsunrazesmash: {
		inherit: true,
		isNonstandard: null,
	},
	secretpower: {
		inherit: true,
		isNonstandard: null,
	},
	seedflare: {
		inherit: true,
		isNonstandard: null,
	},
	sharpen: {
		inherit: true,
		isNonstandard: null,
	},
	shatteredpsyche: {
		inherit: true,
		isNonstandard: null,
	},
	signalbeam: {
		inherit: true,
		isNonstandard: null,
	},
	silverwind: {
		inherit: true,
		isNonstandard: null,
	},
	sinisterarrowraid: {
		inherit: true,
		isNonstandard: null,
	},
	sketch: {
		inherit: true,
		isNonstandard: null,
	},
	skydrop: {
		inherit: true,
		isNonstandard: null,
	},
	skyuppercut: {
		inherit: true,
		isNonstandard: null,
	},
	smellingsalts: {
		inherit: true,
		isNonstandard: null,
	},
	snatch: {
		inherit: true,
		isNonstandard: null,
	},
	sonicboom: {
		inherit: true,
		isNonstandard: null,
	},
	soulstealing7starstrike: {
		inherit: true,
		isNonstandard: null,
	},
	spiderweb: {
		inherit: true,
		isNonstandard: null,
	},
	splinteredstormshards: {
		inherit: true,
		isNonstandard: null,
	},
	spotlight: {
		inherit: true,
		isNonstandard: null,
	},
	steamroller: {
		inherit: true,
		isNonstandard: null,
	},
	stokedsparksurfer: {
		inherit: true,
		isNonstandard: null,
	},
	subzeroslammer: {
		inherit: true,
		isNonstandard: null,
	},
	supersonicskystrike: {
		inherit: true,
		isNonstandard: null,
	},
	synchronoise: {
		inherit: true,
		isNonstandard: null,
	},
	tailglow: {
		inherit: true,
		isNonstandard: null,
	},
	tectonicrage: {
		inherit: true,
		isNonstandard: null,
	},
	telekinesis: {
		inherit: true,
		isNonstandard: null,
	},
	toxicthread: {
		inherit: true,
		isNonstandard: null,
	},
	trumpcard: {
		inherit: true,
		isNonstandard: null,
	},
	twineedle: {
		inherit: true,
		isNonstandard: null,
	},
	twinkletackle: {
		inherit: true,
		isNonstandard: null,
	},
	wakeupslap: {
		inherit: true,
		isNonstandard: null,
	},
	watersport: {
		inherit: true,
		isNonstandard: null,
	},
	wringout: {
		inherit: true,
		isNonstandard: null,
	},
};
