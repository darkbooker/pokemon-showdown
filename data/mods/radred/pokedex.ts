export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	charmander: {
		inherit: true,
		abilities: {0: "Blaze", H: "Flame Body"}
	},
	charmeleon: {
		inherit: true,
		abilities: {0: "Blaze", H: "Flame Body"}
	},
	charizard: {
		inherit: true,
		abilities: {0: "Blaze", H: "Flame Body"}
	},
	blastoisemega: {
		inherit: true,
		baseStats: {hp: 79, atk: 103, def: 120, spa: 125, spd: 115, spe: 78}
	},
	butterfree: {
		inherit: true,
		otherFormes: ["Butterfree-Mega"],
		formeOrder: ["Butterfree", "Butterfree-Mega"]
	},
	butterfreemega: {
		num: 12,
		name: "Butterfree-Mega",
		baseSpecies: "Butterfree",
		forme: "Mega",
		types: ["Bug", "Flying"],
		baseStats: {hp: 60, atk: 45, def: 100, spa: 140, spd: 100, spe: 80},
		abilities: {0: "Compound Eyes"},
		heightm: 17,
		weightkg: 32,
		color: "White",
		eggGroups: ["Bug"],
		requiredItem: "Butterfrite"
	},
	pidgey: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Tangled Feet", H: "Big Pecks"}
	},
	pidgeotto: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Tangled Feet", H: "Big Pecks"}
	},
	pidgeot: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Tangled Feet", H: "Big Pecks"}
	},
	raticate: {
		inherit: true,
		baseStats: {hp: 60, atk: 91, def: 60, spa: 50, spd: 70, spe: 97}
	},
	raticatealola: {
		inherit: true,
		baseStats: {hp: 75, atk: 86, def: 70, spa: 40, spd: 80, spe: 77}
	},
	spearow: {
		inherit: true,
		abilities: {0: "Frisk", H: "Sniper"}
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 65, spa: 61, spd: 61, spe: 115},
		abilities: {0: "Technician", H: "Sniper"}
	},
	arbok: {
		inherit: true,
		types: ["Poison", "Dark"],
		baseStats: {hp: 75, atk: 95, def: 75, spa: 65, spd: 79, spe: 80},
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Strong Jaw"}
	},
	pikachurockstar: {
		inherit: true,
		types: ["Electric", "Steel"]
	},
	pikachubelle: {
		inherit: true,
		types: ["Electric", "Ice"]
	},
	pikachupopstar: {
		inherit: true,
		types: ["Electric", "Fairy"]
	},
	pikachulibre: {
		inherit: true,
		types: ["Electric", "Fighting"]
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 55, spa: 100, spd: 80, spe: 110}
	},
	sandshrewalola: {
		inherit: true,
		abilities: {0: "Slush Rush", H: "Snow Cloak"}
	},
	sandslash: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 120, spa: 25, spd: 65, spe: 65}
	},
	sandslashalola: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 120, spa: 25, spd: 65, spe: 65},
		abilities: {0: "Slush Rush", H: "Ice Scales"}
	},
	wigglytuff: {
		inherit: true,
		abilities: {0: "Sheer Force", 1: "Competitive", H: "Frisk"}
	},
	zubat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Sniper", H: "Infiltrator"}
	},
	golbat: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Sniper", H: "Infiltrator"}
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 100, spa: 60, spd: 80, spe: 30}
	},
	venomoth: {
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 70, atk: 65, def: 65, spa: 95, spd: 75, spe: 90}
	},
	dugtrioalola: {
		inherit: true,
		baseStats: {hp: 35, atk: 110, def: 60, spa: 50, spd: 70, spe: 110}
	},
	persian: {
		inherit: true,
		baseStats: {hp: 65, atk: 80, def: 60, spa: 60, spd: 65, spe: 115},
		abilities: {0: "Limber", 1: "Technician", H: "Feline Power"}
	},
	persianalola: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 60, spa: 55, spd: 65, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Feline Power"}
	},
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 82, def: 78, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Swift Swim", 1: "Cloud Nine", H: "Neuroforce"}
	},
	primeape: {
		inherit: true,
		baseStats: {hp: 65, atk: 95, def: 60, spa: 60, spd: 70, spe: 95},
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Gorilla Tactics"}
	},
	machamp: {
		inherit: true,
		otherFormes: ["Machamp-Mega"],
		formeOrder: ["Machamp", "Machamp-Mega"]
	},
	machampmega: {
		num: 68,
		name: "Machamp-Mega",
		baseSpecies: "Machamp",
		forme: "Mega",
		types: ["Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 90, atk: 145, def: 100, spa: 65, spd: 105, spe: 75},
		abilities: {0: "ORAORAORAORA"},
		heightm: 25,
		weightkg: 130,
		color: "Gray",
		eggGroups: ["Human-Like"],
		requiredItem: "Machampite"
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 70, spa: 100, spd: 75, spe: 70}
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 60, def: 80, spa: 90, spd: 120, spe: 100}
	},
	geodudealola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Galvanize"}
	},
	graveleralola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Galvanize"}
	},
	golemalola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Sturdy", H: "Galvanize"}
	},
	ponytagalar: {
		inherit: true,
		types: ["Fire", "Fairy"]
	},
	rapidash: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 70, spa: 60, spd: 80, spe: 125},
		abilities: {0: "Reckless", 1: "Flash Fire", H: "Blazing Soul"}
	},
	rapidashgalar: {
		inherit: true,
		types: ["Fire", "Fairy"]
	},
	slowbromega: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 165, spa: 130, spd: 80, spe: 30},
		abilities: {0: "Regenerator"}
	},
	slowbrogalar: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 105, spa: 115, spd: 70, spe: 30}
	},
	farfetchd: {
		inherit: true,
		types: ["Fighting", "Flying"],
		baseStats: {hp: 75, atk: 90, def: 70, spa: 58, spd: 77, spe: 60},
		abilities: {0: "Frisk", 1: "Inner Focus", H: "Blademaster"}
	},
	dodrio: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Early Bird", H: "Tangled Feet"}
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 80, spa: 90, spd: 95, spe: 70},
		abilities: {0: "Thick Fat", 1: "Ice Scales", H: "Ice Body"}
	},
	muk: {
		inherit: true,
		abilities: {0: "Regenerator", 1: "Sticky Hold", H: "Poison Touch"}
	},
	onix: {
		inherit: true,
		baseStats: {hp: 50, atk: 60, def: 150, spa: 30, spd: 45, spe: 65}
	},
	drowzee: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Psychic Surge"}
	},
	hypno: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Psychic Surge"}
	},
	kingler: {
		inherit: true,
		otherFormes: ["Kingler-Mega"],
		formeOrder: ["Kingler, Kingler-Mega"]
	},
	kinglermega: {
		num: 99,
		name: "Kingler-Mega",
		baseSpecies: "Kingler",
		forme: "Mega",
		types: ["Water", "Steel"],
		baseStats: {hp: 55, atk: 150, def: 125, spa: 50, spd: 70, spe: 110},
		abilities: {0: "Tough Claws"},
		heightm: 19,
		weightkg: 60,
		color: "Red",
		eggGroups: ["Water 3"],
		requiredItem: "Kinglerite"
	},
	voltorb: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Static", H: "Galvanize"}
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 70, spa: 80, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Static", H: "Galvanize"}
	},
	cubone: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Battle Armor", H: "Bone Zone"}
	},
	marowak: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 110, spa: 30, spd: 80, spe: 45},
		abilities: {0: "Rock Head", 1: "Battle Armor", H: "Bone Zone"}
	},
	marowakalola: {
		inherit: true,
		abilities: {0: "Cursed Body", 1: "Lightning Rod", H: "Bone Zone"}
	},
	hitmonlee: {
		inherit: true,
		abilities: {0: "Limber", 1: "Striker", H: "Unburden"}
	},
	hitmonchan: {
		inherit: true,
		baseStats: {hp: 50, atk: 115, def: 79, spa: 35, spd: 110, spe: 76},
		abilities: {0: "Frisk", 1: "Iron Fist", H: "Inner Focus"}
	},
	staryu: {
		inherit: true,
		abilities: {0: "Natural Cure", H: "Analytic"}
	},
	starmie: {
		inherit: true,
		abilities: {0: "Natural Cure", H: "Analytic"}
	},
	mrmime: {
		inherit: true,
		baseStats: {hp: 50, atk: 45, def: 65, spa: 100, spd: 120, spe: 90},
		abilities: {0: "Soundproof", 1: "Filter", H: "Misty Surge"}
	},
	jynx: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 50, spa: 115, spd: 95, spe: 100}
	},
	tauros: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 95, spa: 70, spd: 70, spe: 110}
	},
	magikarp: {
		inherit: true,
		abilities: {0: "Swift Swim", H: "Hydration"}
	},
	lapras: {
		inherit: true,
		types: ["Water", "Dragon"],
		otherFormes: ["Lapras-Mega"],
		formeOrder: ["Lapras", "Lapras-Mega"]
	},
	laprasmega: {
		num: 131,
		name: "Lapras-Mega",
		baseSpecies: "Lapras",
		forme: "Mega",
		types: ["Water", "Dragon"],
		baseStats: {hp: 130, atk: 105, def: 85, spa: 115, spd: 105, spe: 70},
		abilities: {0: "Liquid Voice"},
		heightm: 24,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Laprasite"
	},
	flareon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 60, spa: 65, spd: 100, spe: 95}
	},
	kabutops: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Battle Armor", H: "Blademaster"}
	},
	snorlax: {
		inherit: true,
		otherFormes: ["Snorlax-Mega"],
		formeOrder: ["Snorlax", "Snorlax-Mega"]
	},
	snorlaxmega: {
		num: 143,
		name: "Snorlax-Mega",
		baseSpecies: "Snorlax",
		forme: "Mega",
		types: ["Normal", "Grass"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 160, atk: 160, def: 85, spa: 80, spd: 125, spe: 30},
		abilities: {0: "Thick Fat"},
		heightm: 35,
		weightkg: 460,
		color: "Black",
		eggGroups: ["Monster"],
		requiredItem: "Snorlaxite"
	},
	articuno: {
		inherit: true,
		abilities: {0: "Pressure", H: "Shield Dust"}
	},
	meganium: {
		inherit: true,
		types: ["Grass", "Fairy"],
		abilities: {0: "Overgrow", H: "Triage"}
	},
	typhlosion: {
		inherit: true,
		abilities: {0: "Blaze", 1: "Blazing Soul", H: "Flash Fire"}
	},
	totodile: {
		inherit: true,
		abilities: {0: "Sheer Force", H: "Strong Jaw"}
	},
	croconaw: {
		inherit: true,
		abilities: {0: "Sheer Force", H: "Strong Jaw"}
	},
	feraligatr: {
		inherit: true,
		abilities: {0: "Sheer Force", H: "Strong Jaw"}
	},
	sentret: {
		inherit: true,
		abilities: {0: "Run Away", 1: "Frisk", H: "Frisk"}
	},
	furret: {
		inherit: true,
		baseStats: {hp: 85, atk: 86, def: 64, spa: 45, spd: 55, spe: 90},
		abilities: {0: "Adaptability", 1: "Frisk"}
	},
	hoothoot: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Frisk", H: "Tinted Lens"}
	},
	noctowl: {
		inherit: true,
		baseStats: {hp: 110, atk: 50, def: 50, spa: 86, spd: 96, spe: 70},
		abilities: {0: "Insomnia", 1: "Frisk", H: "Tinted Lens"}
	},
	ledian: {
		inherit: true,
		types: ["Bug", "Fighting"],
		baseStats: {hp: 55, atk: 90, def: 50, spa: 35, spd: 100, spe: 85}
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 70, spa: 60, spd: 70, spe: 70},
		abilities: {0: "Swarm", 1: "No Guard", H: "Sniper"}
	},
	crobat: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 80, spa: 90, spd: 80, spe: 130},
		abilities: {0: "Inner Focus", 1: "Sniper", H: "Infiltrator"}
	},
	chinchou: {
		inherit: true,
		abilities: {0: "Volt Absorb", H: "Water Absorb"}
	},
	lanturn: {
		inherit: true,
		baseStats: {hp: 125, atk: 50, def: 65, spa: 76, spd: 90, spe: 67},
		abilities: {0: "Volt Absorb", H: "Water Absorb"}
	},
	xatu: {
		inherit: true,
		baseStats: {hp: 65, atk: 75, def: 70, spa: 105, spd: 70, spe: 105}
	},
	ampharosmega: {
		inherit: true,
		abilities: {0: "Thick Fat"}
	},
	bellossom: {
		inherit: true,
		types: ["Grass", "Fairy"],
		baseStats: {hp: 85, atk: 70, def: 95, spa: 90, spd: 100, spe: 50}
	},
	sudowoodo: {
		inherit: true,
		types: ["Rock", "Grass"],
		baseStats: {hp: 90, atk: 100, def: 115, spa: 30, spd: 65, spe: 30},
		abilities: {0: "Sturdy", 1: "Rock Head"}
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 75, atk: 85, def: 70, spa: 35, spd: 95, spe: 110},
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Aerilate"}
	},
	sunflora: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 95, atk: 75, def: 55, spa: 135, spd: 85, spe: 45}
	},
	quagsire: {
		inherit: true,
		baseStats: {hp: 100, atk: 85, def: 90, spa: 65, spd: 65, spe: 35}
	},
	girafarig: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Early Bird", H: "Parental Bond"}
	},
	dunsparce: {
		inherit: true,
		baseStats: {hp: 100, atk: 70, def: 50, spa: 65, spd: 75, spe: 45},
		abilities: {0: "Serene Grace", 1: "Run Away"}
	},
	steelixmega: {
		inherit: true,
		abilities: {0: "Heatproof"}
	},
	snubbull: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Run Away", H: "Defiant"}
	},
	granbull: {
		inherit: true,
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 100, atk: 120, def: 75, spa: 60, spd: 60, spe: 45},
		abilities: {0: "Intimidate", 1: "Quick Feet", H: "Bull Rush"}
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 105, def: 85, spa: 55, spd: 55, spe: 85},
		abilities: {0: "Prankster", 1: "Swift Swim", H: "Intimidate"}
	},
	shuckle: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Solid Rock", H: "Contrary"}
	},
	sneasel: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Frisk", H: "Infiltrator"}
	},
	ursaring: {
		inherit: true,
		baseStats: {hp: 100, atk: 130, def: 80, spa: 55, spd: 80, spe: 55}
	},
	magcargo: {
		inherit: true,
		abilities: {0: "Simple", 1: "Flame Body", H: "Weak Armor"}
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 85, atk: 55, def: 100, spa: 65, spd: 100, spe: 35}
	},
	corsolagalar: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 40},
		abilities: {0: "Weak Armor", 1: "Unburden", H: "Cursed Body"}
	},
	octillery: {
		inherit: true,
		baseStats: {hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 75},
		abilities: {0: "Mega Launcher", 1: "Sniper", H: "Skill Link"}
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 45, atk: 100, def: 45, spa: 65, spd: 45, spe: 105},
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Surprise"}
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 85, atk: 40, def: 70, spa: 90, spd: 140, spe: 70}
	},
	skarmory: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sturdy", H: "Weak Armor"}
	},
	houndoommega: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 90, spa: 140, spd: 90, spe: 115},
		abilities: {0: "Dark Aura"}
	},
	donphan: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Technician"}
	},
	stantler: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 70, spa: 100, spd: 73, spe: 100},
		abilities: {0: "Intimidate", 1: "Reckless", H: "Sap Sipper"}
	},
	miltank: {
		inherit: true,
		baseStats: {hp: 95, atk: 85, def: 105, spa: 40, spd: 70, spe: 100}
	},
	sceptile: {
		inherit: true,
		types: ["Grass", "Dragon"],
		baseStats: {hp: 70, atk: 105, def: 65, spa: 85, spd: 85, spe: 120}
	},
	sceptilemega: {
		inherit: true,
		baseStats: {hp: 70, atk: 135, def: 75, spa: 110, spd: 85, spe: 145},
		abilities: {0: "Technician"}
	},
	blaziken: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 70, spa: 120, spd: 70, spe: 80}
	},
	blazikenmega: {
		inherit: true,
		baseStats: {hp: 80, atk: 130, def: 80, spa: 160, spd: 80, spe: 100}
	},
	poochyena: {
		inherit: true,
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Moxie"}
	},
	mightyena: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 70, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Moxie"}
	},
	linoone: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 61, spa: 50, spd: 61, spe: 100}
	},
	beautifly: {
		inherit: true,
		baseStats: {hp: 60, atk: 70, def: 50, spa: 105, spd: 50, spe: 75}
	},
	dustox: {
		inherit: true,
		baseStats: {hp: 80, atk: 40, def: 70, spa: 60, spd: 90, spe: 65}
	},
	seedot: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Early Bird", H: "Infiltrator"}
	},
	nuzleaf: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Early Bird", H: "Infiltrator"}
	},
	shiftry: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Early Bird", H: "Infiltrator"}
	},
	swellow: {
		inherit: true,
		abilities: {0: "Guts", H: "Aerilate"}
	},
	wingull: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Hydration", H: "Rain Dish"}
	},
	pelipper: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Drizzle", H: "Rain Dish"}
	},
	masquerain: {
		inherit: true,
		types: ["Bug", "Water"],
		baseStats: {hp: 80, atk: 60, def: 62, spa: 100, spd: 82, spe: 80}
	},
	whismur: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Oblivious", H: "Scrappy"}
	},
	loudred: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Scrappy", H: "Scrappy"}
	},
	exploud: {
		inherit: true,
		baseStats: {hp: 104, atk: 81, def: 63, spa: 91, spd: 73, spe: 73},
		abilities: {0: "Soundproof", 1: "Scrappy", H: "Punk Rock"}
	},
	delcatty: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 65, spd: 55, spe: 90},
		abilities: {0: "Cute Charm", 1: "Feline Power", H: "Wonder Skin"}
	},
	sableye: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Stall", H: "Prankster"}
	},
	manectric: {
		inherit: true,
		abilities: {0: "Static", 1: "Lightning Rod", H: "Intimidate"}
	},
	plusle: {
		inherit: true,
		baseStats: {hp: 60, atk: 50, def: 40, spa: 85, spd: 75, spe: 110},
		abilities: {0: "Plus", 1: "Lightning Rod", H: "Transistor"}
	},
	minun: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 75, spa: 50, spd: 40, spe: 110},
		abilities: {0: "Minus", 1: "Lightning Rod", H: "Galvanize"}
	},
	volbeat: {
		inherit: true,
		types: ["Bug", "Electric"],
		baseStats: {hp: 85, atk: 47, def: 75, spa: 90, spd: 85, spe: 100},
		abilities: {0: "Swarm", H: "Prankster"}
	},
	illumise: {
		inherit: true,
		types: ["Bug", "Fairy"],
		baseStats: {hp: 85, atk: 90, def: 75, spa: 47, spd: 85, spe: 100}
	},
	swalot: {
		inherit: true,
		baseStats: {hp: 100, atk: 88, def: 88, spa: 93, spd: 88, spe: 55},
		abilities: {0: "Liquid Ooze", 1: "Sticky Hold", H: "Magic Guard"}
	},
	wailord: {
		inherit: true,
		baseStats: {hp: 170, atk: 70, def: 60, spa: 90, spd: 60, spe: 60},
		abilities: {0: "Water Veil", 1: "Thick Fat", H: "Pressure"}
	},
	camerupt: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 70, spa: 105, spd: 75, spe: 40}
	},
	cameruptmega: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 110, spa: 145, spd: 115, spe: 20}
	},
	torkoal: {
		inherit: true,
		baseStats: {hp: 70, atk: 75, def: 140, spa: 95, spd: 70, spe: 20}
	},
	grumpig: {
		inherit: true,
		baseStats: {hp: 90, atk: 45, def: 65, spa: 90, spd: 110, spe: 80}
	},
	spinda: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80}
	},
	vibrava: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Tinted Lens"}
	},
	flygon: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 80, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Levitate", 1: "Compound Eyes", H: "Tinted Lens"}
	},
	cacnea: {
		inherit: true,
		abilities: {0: "Sand Veil", 1: "Water Absorb", H: "Sand Rush"}
	},
	cacturne: {
		inherit: true,
		baseStats: {hp: 70, atk: 120, def: 60, spa: 120, spd: 60, spe: 55},
		abilities: {0: "Sand Veil", 1: "Water Absorb", H: "Sand Rush"}
	},
	altaria: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 90, spa: 70, spd: 105, spe: 80}
	},
	altariamega: {
		inherit: true,
		baseStats: {hp: 85, atk: 110, def: 110, spa: 110, spd: 105, spe: 80}
	},
	zangoose: {
		inherit: true,
		abilities: {0: "Tough Claws", H: "Toxic Boost"}
	},
	seviper: {
		inherit: true,
		baseStats: {hp: 83, atk: 100, def: 83, spa: 100, spd: 83, spe: 85},
		abilities: {0: "Merciless", H: "Fatal Precision"}
	},
	lunatone: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 65, spa: 105, spd: 85, spe: 90}
	},
	solrock: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 85, spa: 55, spd: 65, spe: 90}
	},
	whiscash: {
		inherit: true,
		abilities: {0: "Water Bubble", 1: "Anticipation", H: "Hydration"}
	},
	claydol: {
		inherit: true,
		baseStats: {hp: 60, atk: 70, def: 105, spa: 80, spd: 120, spe: 75}
	},
	milotic: {
		inherit: true,
		baseStats: {hp: 95, atk: 60, def: 84, spa: 100, spd: 125, spe: 86}
	},
	castform: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	castformsunny: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	castformrainy: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	castformsnowy: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	kecleon: {
		inherit: true,
		baseStats: {hp: 60, atk: 100, def: 70, spa: 60, spd: 120, spe: 40}
	},
	banettemega: {
		inherit: true,
		types: ["Ghost", "Normal"]
	},
	tropius: {
		inherit: true,
		types: ["Grass", "Dragon"],
		baseStats: {hp: 99, atk: 68, def: 83, spa: 92, spd: 87, spe: 81}
	},
	chimecho: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 80, spa: 95, spd: 90, spe: 80}
	},
	absolmega: {
		inherit: true,
		types: ["Dark", "Fairy"],
		abilities: {0: "Blademaster"}
	},
	glaliemega: {
		inherit: true,
		baseStats: {hp: 80, atk: 135, def: 80, spa: 105, spd: 80, spe: 100}
	},
	walrein: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 90, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Thick Fat", 1: "Ice Body", H: "Fur Coat"}
	},
	clamperl: {
		inherit: true,
		abilities: {0: "Shell Armor", H: "Hydration"}
	},
	huntail: {
		inherit: true,
		types: ["Water", "Dark"],
		abilities: {0: "Intimidate", H: "Defiant"}
	},
	gorebyss: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 55, atk: 84, def: 105, spa: 104, spd: 75, spe: 52},
		abilities: {0: "Swift Swim", H: "Regenerator"}
	},
	relicanth: {
		inherit: true,
		baseStats: {hp: 100, atk: 105, def: 115, spa: 45, spd: 65, spe: 55}
	},
	luvdisc: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 43, atk: 30, def: 55, spa: 100, spd: 65, spe: 97},
		abilities: {0: "Swift Swim", H: "Soul-Heart"}
	},
	salamencemega: {
		inherit: true,
		baseStats: {hp: 95, atk: 135, def: 130, spa: 120, spd: 90, spe: 120}
	},
	torterra: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Self Sufficient"}
	},
	infernape: {
		inherit: true,
		baseStats: {hp: 76, atk: 110, def: 71, spa: 110, spd: 71, spe: 113}
	},
	empoleon: {
		inherit: true,
		abilities: {0: "Torrent", H: "Competitive"}
	},
	starly: {
		inherit: true,
		abilities: {0: "Frisk", H: "Reckless"}
	},
	bibarel: {
		inherit: true,
		baseStats: {hp: 79, atk: 85, def: 80, spa: 55, spd: 80, spe: 50}
	},
	kricketot: {
		inherit: true,
		baseStats: {hp: 37, atk: 40, def: 41, spa: 40, spd: 41, spe: 25},
		abilities: {0: "Technician", H: "Run Away"}
	},
	kricketune: {
		inherit: true,
		baseStats: {hp: 77, atk: 95, def: 71, spa: 55, spd: 71, spe: 80}
	},
	luxray: {
		inherit: true,
		types: ["Electric", "Dark"]
	},
	bastiodon: {
		inherit: true,
		abilities: {0: "Dauntless Shield", H: "Soundproof"}
	},
	wormadam: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 50}
	},
	wormadamsandy: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 105, spa: 79, spd: 85, spe: 50}
	},
	wormadamtrash: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 95, spa: 79, spd: 95, spe: 50}
	},
	mothim: {
		inherit: true,
		baseStats: {hp: 70, atk: 84, def: 50, spa: 94, spd: 50, spe: 80}
	},
	vespiquen: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
		abilities: {0: "Queenly Majesty", H: "Unnerve"}
	},
	pachirisu: {
		inherit: true,
		baseStats: {hp: 75, atk: 45, def: 70, spa: 45, spd: 95, spe: 95},
		abilities: {0: "Prankster", 1: "Pickup", H: "Volt Absorb"}
	},
	floatzel: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 55, spa: 85, spd: 50, spe: 115},
		abilities: {0: "Swift Swim", H: "Technician"}
	},
	cherrim: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 70, spa: 87, spd: 78, spe: 85}
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 70, atk: 60, def: 67, spa: 105, spd: 105, spe: 105}
	},
	glameow: {
		inherit: true,
		baseStats: {hp: 49, atk: 55, def: 42, spa: 42, spd: 37, spe: 112},
		abilities: {0: "Limber", 1: "Own Tempo", H: "Frisk"}
	},
	purugly: {
		inherit: true,
		baseStats: {hp: 100, atk: 82, def: 79, spa: 64, spd: 74, spe: 112}
	},
	stunky: {
		inherit: true,
		abilities: {0: "Stench", 1: "Aftermath", H: "Frisk"}
	},
	skuntank: {
		inherit: true,
		baseStats: {hp: 103, atk: 93, def: 67, spa: 91, spd: 61, spe: 84},
		abilities: {0: "Stench", 1: "Aftermath", H: "Frisk"}
	},
	chatot: {
		inherit: true,
		baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 101},
		abilities: {0: "Frisk", 1: "Tangled Feet", H: "Big Pecks"}
	},
	spiritomb: {
		inherit: true,
		abilities: {0: "Pressure", H: "Intimidate"}
	},
	garchompmega: {
		inherit: true,
		baseStats: {hp: 108, atk: 170, def: 105, spa: 120, spd: 95, spe: 102}
	},
	lucariomega: {
		inherit: true,
		baseStats: {hp: 70, atk: 135, def: 88, spa: 140, spd: 70, spe: 112}
	},
	skorupi: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Frisk"}
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 110, spa: 60, spd: 75, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Frisk"}
	},
	carnivine: {
		inherit: true,
		baseStats: {hp: 89, atk: 100, def: 82, spa: 55, spd: 82, spe: 46}
	},
	lumineon: {
		inherit: true,
		baseStats: {hp: 79, atk: 59, def: 76, spa: 96, spd: 69, spe: 101},
		abilities: {0: "Dazzling", 1: "Storm Drain", H: "Water Veil"}
	},
	abomasnowmega: {
		inherit: true,
		baseStats: {hp: 90, atk: 132, def: 100, spa: 132, spd: 100, spe: 45},
		abilities: {0: "Slush Rush"}
	},
	weavile: {
		inherit: true,
		abilities: {0: "Pressure", H: "Infiltrator"}
	},
	lickilicky: {
		inherit: true,
		baseStats: {hp: 110, atk: 95, def: 95, spa: 80, spd: 95, spe: 30},
		abilities: {0: "Own Tempo", 1: "Unaware", H: "Cloud Nine"}
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 113, def: 67, spa: 105, spd: 85, spe: 95},
		abilities: {0: "Motor Drive", H: "Iron Fist"}
	},
	magmortar: {
		inherit: true,
		abilities: {0: "Flame Body", H: "Mega Launcher"}
	},
	leafeon: {
		inherit: true,
		baseStats: {hp: 65, atk: 130, def: 110, spa: 60, spd: 65, spe: 95},
		abilities: {0: "Sap Sipper", H: "Chlorophyll"}
	},
	glaceon: {
		inherit: true,
		baseStats: {hp: 80, atk: 45, def: 100, spa: 130, spd: 95, spe: 75},
		abilities: {0: "Snow Cloak", 1: "Ice Body", H: "Slush Rush"}
	},
	gallademega: {
		inherit: true,
		baseStats: {hp: 68, atk: 155, def: 75, spa: 65, spd: 115, spe: 110},
		abilities: {0: "Blademaster"}
	},
	probopass: {
		inherit: true,
		baseStats: {hp: 65, atk: 45, def: 145, spa: 80, spd: 150, spe: 40}
	},
	dusknoir: {
		inherit: true,
		abilities: {0: "Pressure", H: "Hustle"}
	},
	froslass: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 70, spa: 95, spd: 70, spe: 110}
	},
	rotom: {
		num: 479,
		name: "Rotom",
		types: ["Electric", "Ghost"],
		gender: "N",
		baseStats: {hp: 50, atk: 50, def: 70, spa: 95, spd: 70, spe: 91},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		evos: ["Rotom-Heat", "Rotom-Wash", "Rotom-Frost", "Rotom-Fan", "Rotom-Mow"],
		eggGroups: ["Amorphous"]
	},
	rotomheat: {
		num: 479,
		name: "Rotom-Heat",
		types: ["Electric", "Fire"],
		gender: "N",
		baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		prevo: "Rotom",
		evoType: "useItem",
		evoItem: "Fire Stone",
		eggGroups: ["Amorphous"]
	},
	rotomwash: {
		num: 479,
		name: "Rotom-Wash",
		types: ["Electric", "Water"],
		gender: "N",
		baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		prevo: "Rotom",
		evoType: "useItem",
		evoItem: "Water Stone",
		eggGroups: ["Amorphous"],
	},
	rotomfrost: {
		num: 479,
		name: "Rotom-Frost",
		types: ["Electric", "Ice"],
		gender: "N",
		baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		prevo: "Rotom",
		evoType: "useItem",
		evoItem: "Ice Stone",
		eggGroups: ["Amorphous"],
	},
	rotomfan: {
		num: 479,
		name: "Rotom-Fan",
		types: ["Electric", "Flying"],
		gender: "N",
		baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Motor Drive"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		prevo: "Rotom",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		eggGroups: ["Amorphous"],
	},
	rotommow: {
		num: 479,
		name: "Rotom-Mow",
		types: ["Electric", "Grass"],
		gender: "N",
		baseStats: {hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86},
		abilities: {0: "Levitate"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		prevo: "Rotom",
		evoType: "useItem",
		evoItem: "Leaf Stone",
		eggGroups: ["Amorphous"],
	},
	dialga: {
		inherit: true,
		otherFormes: ["Dialga-Primal"],
		formeOrder: ["Dialga", "Dialga-Primal"]
	},
	dialgaprimal: {
		num: 483,
		name: "Dialga-Primal",
		baseSpecies: "Dialga",
		forme: "Primal",
		types: ["Steel", "Dragon"],
		gender: "N",
		baseStats: {hp: 100, atk: 120, def: 150, spa: 185, spd: 130, spe: 90},
		abilities: {0: "Primal Armor"},
		heightm: 5.4,
		weightkg: 683,
		color: "White",
		eggGroups: ["Undiscovered"],
		requiredItem: "Adamant Orb"
	},
	emboar: {
		inherit: true,
		abilities: {0: "Bull Rush", H: "Reckless"}
	},
	samurott: {
		inherit: true,
		types: ["Water", "Steel"],
		abilities: {0: "Torrent", H: "Blademaster"}
	},
	patrat: {
		inherit: true,
		abilities: {0: "Run Away", 1: "Frisk", H: "Analytic"}
	},
	watchog: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 74, spa: 60, spd: 74, spe: 77},
		abilities: {0: "Analytic", H: "No Guard"}
	},
	stoutland: {
		inherit: true,
		baseStats: {hp: 90, atk: 115, def: 90, spa: 45, spd: 90, spe: 80}
	},
	liepard: {
		inherit: true,
		baseStats: {hp: 64, atk: 98, def: 50, spa: 78, spd: 50, spe: 106},
		abilities: {0: "Moxie", 1: "Unburden", H: "Prankster"}
	},
	simisage: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"}
	},
	simisear: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"}
	},
	simipour: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"}
	},
	musharna: {
		inherit: true,
		abilities: {0: "Forewarn", 1: "Synchronize", H: "Unaware"}
	},
	unfezant: {
		inherit: true,
		baseStats: {hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 108}
	},
	blitzle: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Flare Boost", H: "Sap Sipper"}
	},
	zebstrika: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Flare Boost", H: "Sap Sipper"}
	},
	swoobat: {
		inherit: true,
		baseStats: {hp: 75, atk: 57, def: 65, spa: 77, spd: 55, spe: 114}
	},
	audinomega: {
		inherit: true,
		abilities: {0: "Regenerator"}
	},
	throh: {
		inherit: true,
		baseStats: {hp: 120, atk: 100, def: 95, spa: 30, spd: 95, spe: 45},
		abilities: {0: "Guts", 1: "Technician", H: "Mold Breaker"}
	},
	sawk: {
		inherit: true,
		baseStats: {hp: 75, atk: 125, def: 80, spa: 30, spd: 80, spe: 95}
	},
	leavanny: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Chlorophyll", H: "Blademaster"}
	},
	basculin: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 55, spe: 98}
	},
	basculinbluestriped: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 55, spe: 98}
	},
	darmanitangalar: {
		inherit: true,
		baseStats: {hp: 105, atk: 130, def: 55, spa: 30, spd: 55, spe: 95}
	},
	maractus: {
		inherit: true,
		baseStats: {hp: 75, atk: 106, def: 67, spa: 86, spd: 67, spe: 60},
		abilities: {0: "Water Absorb", 1: "Chlorophyll", H: "Grassy Surge"}
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 55}
	},
	yamask: {
		inherit: true,
		abilities: {0: "Mummy", H: "Shadow Shield"}
	},
	yamaskgalar: {
		inherit: true,
		abilities: {0: "Wandering Spirit", H: "Shadow Shield"}
	},
	cofagrigus: {
		inherit: true,
		abilities: {0: "Mummy", H: "Shadow Shield"}
	},
	garbodor: {
		inherit: true,
		baseStats: {hp: 80, atk: 115, def: 82, spa: 60, spd: 82, spe: 60},
		abilities: {0: "Gooey", 1: "Weak Armor", H: "Aftermath"},
		otherFormes: ["Garbodor-Mega"],
		formeOrder: ["Garbodor", "Garbodor-Mega"]
	},
	garbodormega: {
		num: 569,
		name: "Garbodor-Mega",
		baseSpecies: "Garbodor",
		forme: "Mega",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 135, def: 105, spa: 80, spd: 105, spe: 75},
		abilities: {0: "Parasitic Waste"},
		heightm: 21,
		weightkg: 107.3,
		color: "Green",
		eggGroups: ["Mineral"],
		requiredItem: "Garbodorite"
	},
	ducklett: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Big Pecks", H: "Hydration"}
	},
	swanna: {
		inherit: true,
		baseStats: {hp: 75, atk: 77, def: 63, spa: 97, spd: 63, spe: 98},
		abilities: {0: "Frisk", 1: "Big Pecks", H: "No Guard"}
	},
	vanilluxe: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 85, spa: 110, spd: 95, spe: 84}
	},
	sawsbuck: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 105}
	},
	emolga: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 60, spa: 95, spd: 60, spe: 103}
	},
	jellicent: {
		inherit: true,
		baseStats: {hp: 100, atk: 60, def: 80, spa: 60, spd: 105, spe: 60},
		abilities: {0: "Water Absorb", 1: "Cursed Body", H: "Water Bubble"}
	},
	klinklang: {
		inherit: true,
		baseStats: {hp: 60, atk: 85, def: 115, spa: 70, spd: 85, spe: 90},
		abilities: {0: "Plus", 1: "Minus", H: "Steelworker"}
	},
	eelektross: {
		inherit: true,
		baseStats: {hp: 85, atk: 105, def: 80, spa: 115, spd: 80, spe: 50},
		abilities: {0: "Levitate", H: "Fatal Precision"}
	},
	beheeyem: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 75, spa: 125, spd: 95, spe: 40}
	},
	lampent: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"}
	},
	chandelure: {
		inherit: true,
		abilities: {0: "Flash Fire", 1: "Flame Body", H: "Shadow Tag"}
	},
	cubchoo: {
		inherit: true,
		abilities: {0: "Snow Cloak", 1: "Slush Rush", H: "Swift Swim"}
	},
	beartic: {
		inherit: true,
		types: ["Ice", "Fighting"],
		baseStats: {hp: 95, atk: 140, def: 80, spa: 70, spd: 80, spe: 50}
	},
	cryogonal: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 50, spa: 110, spd: 135, spe: 105}
	},
	accelgor: {
		inherit: true,
		baseStats: {hp: 80, atk: 70, def: 40, spa: 95, spd: 60, spe: 145},
		abilities: {0: "Hydration", 1: "Sheer Force", H: "Unburden"}
	},
	stunfisk: {
		inherit: true,
		abilities: {0: "Static", 1: "Water Absorb", H: "Sand Veil"}
	},
	druddigon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 90, spa: 60, spd: 90, spe: 41}
	},
	bouffalant: {
		inherit: true,
		baseStats: {hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 65}
	},
	rufflet: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sheer Force", H: "Hustle"}
	},
	braviary: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sheer Force", H: "Defiant"}
	},
	heatmor: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 66, spa: 105, spd: 66, spe: 100},
		abilities: {0: "Gluttony", 1: "Flash Fire", H: "Fatal Precision"}
	},
	chesnaught: {
		inherit: true,
		abilities: {0: "Bulletproof", H: "Iron Barbs"}
	},
	delphox: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"}
	},
	greninjaash: {
		num: 658,
		name: "Greninja-Ash",
		baseSpecies: "Greninja",
		forme: "Ash",
		types: ["Water", "Dark"],
		genderRatio: {M: 0.875, F: 0.125},
		baseStats: {hp: 72, atk: 145, def: 67, spa: 153, spd: 71, spe: 132},
		abilities: {0: "Battle Bond"},
		heightm: 1.5,
		weightkg: 40,
		color: "Blue",
		eggGroups: ["Undiscovered"],
		requiredAbility: "Battle Bond",
		battleOnly: "Greninja",
		gen: 7
	},
	talonflame: {
		inherit: true,
		baseStats: {hp: 78, atk: 91, def: 71, spa: 74, spd: 69, spe: 126}
	},
	pyroar: {
		inherit: true,
		abilities: {0: "Rivalry", 1: "Unnerve", H: "Adaptability"}
	},
	gogoat: {
		inherit: true,
		baseStats: {hp: 123, atk: 100, def: 72, spa: 67, spd: 87, spe: 74}
	},
	pangoro: {
		inherit: true,
		abilities: {0: "Iron Fist", 1: "Mold Breaker", H: "Quick Feet"}
	},
	furfrou: {
		inherit: true,
		baseStats: {hp: 75, atk: 90, def: 60, spa: 65, spd: 90, spe: 102}
	},
	espurr: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Own Tempo"}
	},
	meowstic: {
		inherit: true,
		baseStats: {hp: 74, atk: 48, def: 76, spa: 50, spd: 81, spe: 104},
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Feline Power"}
	},
	meowsticf: {
		inherit: true,
		baseStats: {hp: 74, atk: 48, def: 76, spa: 50, spd: 81, spe: 104},
		abilities: {0: "Frisk", 1: "Infiltrator", H: "Feline Power"}
	},
	honedge: {
		inherit: true,
		abilities: {0: "Blademaster"}
	},
	doublade: {
		inherit: true,
		abilities: {0: "Blademaster"}
	},
	aegislash: {
		inherit: true,
		baseStats: {hp: 50, atk: 50, def: 140, spa: 50, spd: 140, spe: 60}
	},
	aromatisse: {
		inherit: true,
		baseStats: {hp: 101, atk: 62, def: 82, spa: 99, spd: 89, spe: 29},
		abilities: {0: "Fairy Aura", H: "Aroma Veil"}
	},
	slurpuff: {
		inherit: true,
		baseStats: {hp: 82, atk: 90, def: 86, spa: 75, spd: 75, spe: 72}
	},
	binacle: {
		inherit: true,
		abilities: {0: "Tough Claws", 1: "Sniper", H: "Infiltrator"}
	},
	barbaracle: {
		inherit: true,
		abilities: {0: "Tough Claws", 1: "Sniper", H: "Infiltrator"}
	},
	clawitzer: {
		inherit: true,
		baseStats: {hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 72}
	},
	dedenne: {
		inherit: true,
		baseStats: {hp: 67, atk: 58, def: 57, spa: 91, spd: 67, spe: 101},
		abilities: {0: "Cheek Pouch", 1: "Pickup", H: "Electric Surge"}
	},
	trevenant: {
		inherit: true,
		baseStats: {hp: 85, atk: 120, def: 82, spa: 65, spd: 82, spe: 56}
	},
	pumpkaboo: {
		inherit: true,
		baseStats: {hp: 49, atk: 44, def: 70, spa: 66, spd: 55, spe: 51}
	},
	pumpkaboosmall: {
		inherit: true,
		baseStats: {hp: 44, atk: 44, def: 70, spa: 66, spd: 55, spe: 56}
	},
	pumpkaboolarge: {
		inherit: true,
		baseStats: {hp: 54, atk: 44, def: 70, spa: 66, spd: 55, spe: 46}
	},
	pumpkaboosuper: {
		inherit: true,
		baseStats: {hp: 59, atk: 44, def: 70, spa: 66, spd: 55, spe: 41}
	},
	gourgeist: {
		inherit: true,
		baseStats: {hp: 65, atk: 58, def: 122, spa: 90, spd: 75, spe: 84},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"}
	},
	gourgeistsmall: {
		inherit: true,
		baseStats: {hp: 55, atk: 58, def: 122, spa: 85, spd: 75, spe: 99},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"}
	},
	gourgeistlarge: {
		inherit: true,
		baseStats: {hp: 75, atk: 58, def: 122, spa: 95, spd: 75, spe: 69},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"}
	},
	gourgeistsuper: {
		inherit: true,
		baseStats: {hp: 85, atk: 58, def: 122, spa: 100, spd: 75, spe: 54},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"}
	},
	avalugg: {
		inherit: true,
		abilities: {0: "Filter", 1: "Ice Body", H: "Sturdy"}
	},
	noivern: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 80, spa: 102, spd: 80, spe: 123}
	},
	decidueye: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Tinted Lens"}
	},
	pikipek: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Skill Link", H: "Pickup"}
	},
	trumbeak: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Skill Link", H: "Pickup"}
	},
	toucannon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 75, spa: 75, spd: 75, spe: 60},
		abilities: {0: "Frisk", 1: "Skill Link", H: "Sheer Force"}
	},
	gumshoos: {
		inherit: true,
		baseStats: {hp: 98, atk: 110, def: 60, spa: 55, spd: 60, spe: 45}
	},
	rockruff: {
		inherit: true,
		abilities: {
			0: "Frisk",
			1: "Vital Spirit",
			H: "Steadfast",
			S: "Own Tempo"
		}
	},
	lycanroc: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sand Rush", H: "Steadfast"}
	},
	lycanrocmidnight: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Vital Spirit", H: "No Guard"}
	},
	lurantis: {
		inherit: true,
		types: ["Grass", "Fighting"],
		baseStats: {hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 55}
	},
	morelull: {
		inherit: true,
		abilities: {0: "Effect Spore", H: "Rain Dish"}
	},
	shiinotic: {
		inherit: true,
		baseStats: {hp: 75, atk: 45, def: 80, spa: 90, spd: 100, spe: 30},
		abilities: {0: "Effect Spore", H: "Rain Dish"}
	},
	tsareena: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Queenly Majesty", H: "Striker"}
	},
	oranguru: {
		inherit: true,
		baseStats: {hp: 90, atk: 60, def: 110, spa: 90, spd: 80, spe: 60},
		abilities: {0: "Inner Focus", 1: "Telepathy", H: "Sage Power"}
	},
	passimian: {
		inherit: true,
		baseStats: {hp: 100, atk: 120, def: 90, spa: 40, spd: 75, spe: 80}
	},
	silvally: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"}
	},
	silvallybug: {
		num: 773,
		name: "Silvally-Bug",
		baseSpecies: "Silvally",
		forme: "Bug",
		types: ["Bug"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallydark: {
		num: 773,
		name: "Silvally-Dark",
		baseSpecies: "Silvally",
		forme: "Dark",
		types: ["Dark"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallydragon: {
		num: 773,
		name: "Silvally-Dragon",
		baseSpecies: "Silvally",
		forme: "Dragon",
		types: ["Dragon"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyelectric: {
		num: 773,
		name: "Silvally-Electric",
		baseSpecies: "Silvally",
		forme: "Electric",
		types: ["Electric"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyfairy: {
		num: 773,
		name: "Silvally-Fairy",
		baseSpecies: "Silvally",
		forme: "Fairy",
		types: ["Fairy"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyfighting: {
		num: 773,
		name: "Silvally-Fighting",
		baseSpecies: "Silvally",
		forme: "Fighting",
		types: ["Fighting"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyfire: {
		num: 773,
		name: "Silvally-Fire",
		baseSpecies: "Silvally",
		forme: "Fire",
		types: ["Fire"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyflying: {
		num: 773,
		name: "Silvally-Flying",
		baseSpecies: "Silvally",
		forme: "Flying",
		types: ["Flying"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyghost: {
		num: 773,
		name: "Silvally-Ghost",
		baseSpecies: "Silvally",
		forme: "Ghost",
		types: ["Ghost"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallygrass: {
		num: 773,
		name: "Silvally-Grass",
		baseSpecies: "Silvally",
		forme: "Grass",
		types: ["Grass"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyground: {
		num: 773,
		name: "Silvally-Ground",
		baseSpecies: "Silvally",
		forme: "Ground",
		types: ["Ground"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyice: {
		num: 773,
		name: "Silvally-Ice",
		baseSpecies: "Silvally",
		forme: "Ice",
		types: ["Ice"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallypoison: {
		num: 773,
		name: "Silvally-Poison",
		baseSpecies: "Silvally",
		forme: "Poison",
		types: ["Poison"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallypsychic: {
		num: 773,
		name: "Silvally-Psychic",
		baseSpecies: "Silvally",
		forme: "Psychic",
		types: ["Psychic"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallyrock: {
		num: 773,
		name: "Silvally-Rock",
		baseSpecies: "Silvally",
		forme: "Rock",
		types: ["Rock"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallysteel: {
		num: 773,
		name: "Silvally-Steel",
		baseSpecies: "Silvally",
		forme: "Steel",
		types: ["Steel"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	silvallywater: {
		num: 773,
		name: "Silvally-Water",
		baseSpecies: "Silvally",
		forme: "Water",
		types: ["Water"],
		gender: "N",
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		heightm: 2.3,
		weightkg: 100.5,
		color: "Gray",
		eggGroups: ["Undiscovered"],
		changesFrom: "Silvally"
	},
	komala: {
		inherit: true,
		baseStats: {hp: 75, atk: 115, def: 65, spa: 75, spd: 95, spe: 65}
	},
	turtonator: {
		inherit: true,
		baseStats: {hp: 70, atk: 58, def: 135, spa: 91, spd: 85, spe: 36},
		abilities: {0: "Dauntless Shield"}
	},
	togedemaru: {
		inherit: true,
		baseStats: {hp: 65, atk: 108, def: 63, spa: 40, spd: 73, spe: 96},
		abilities: {0: "Iron Barbs", 1: "Motor Drive", H: "Sturdy"}
	},
	drampa: {
		inherit: true,
		baseStats: {hp: 103, atk: 50, def: 85, spa: 135, spd: 91, spe: 36},
		abilities: {0: "Berserk", 1: "Sap Sipper", H: "Fatal Precision"}
	},
	melmetal: {
		inherit: true,
		abilities: {0: "Clear Body"}
	},
	cinderace: {
		inherit: true,
		baseStats: {hp: 80, atk: 111, def: 75, spa: 65, spd: 75, spe: 119}
	},
	rookidee: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Unnerve", H: "Big Pecks"}
	},
	corvisquire: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Unnerve", H: "Big Pecks"}
	},
	corviknight: {
		inherit: true,
		evoLevel: 60
	},
	orbeetle: {
		inherit: true,
		otherFormes: ["Orbeetle-Mega"],
		formeOrder: ["Orbeetle", "Orbeetle-Mega"]
	},
	orbeetlemega: {
		num: 826,
		name: "Orbeetle-Mega",
		baseSpecies: "Orbeetle",
		forme: "Mega",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 115, spa: 135, spd: 120, spe: 95},
		abilities: {0: "Magic Guard"},
		heightm: 14,
		weightkg: 40.8,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Orbeetlite"
	},
	thievul: {
		inherit: true,
		baseStats: {hp: 70, atk: 58, def: 58, spa: 97, spd: 92, spe: 110}
	},
	eldegoss: {
		inherit: true,
		baseStats: {hp: 75, atk: 50, def: 90, spa: 90, spd: 120, spe: 60}
	},
	dubwool: {
		inherit: true,
		baseStats: {hp: 82, atk: 80, def: 100, spa: 60, spd: 90, spe: 88}
	},
	drednaw: {
		inherit: true,
		otherFormes: ["Drednaw-Mega"],
		formeOrder: ["Drednaw", "Drednaw-Mega"]
	},
	drednawmega: {
		num: 834,
		name: "Drednaw-Mega",
		baseSpecies: "Drednaw",
		forme: "Mega",
		types: ["Water", "Fighting"],
		baseStats: {hp: 90, atk: 155, def: 125, spa: 48, spd: 98, spe: 85},
		abilities: {0: "Strong Jaw"},
		heightm: 24,
		weightkg: 115.5,
		color: "Green",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Drednawite"
	},
	yamper: {
		inherit: true,
		abilities: {0: "Ball Fetch", H: "Competitive"}
	},
	boltund: {
		inherit: true,
		baseStats: {hp: 69, atk: 100, def: 60, spa: 80, spd: 60, spe: 121}
	},
	coalossal: {
		inherit: true,
		otherFormes: ["Coalossal-Mega"],
		formeOrder: ["Coalossal", "Coalossal-Mega"]
	},
	coalossalmega: {
		num: 839,
		name: "Coalossal-Mega",
		baseSpecies: "Coalossal",
		forme: "Mega",
		types: ["Steel", "Fire"],
		baseStats: {hp: 110, atk: 80, def: 125, spa: 125, spd: 105, spe: 45},
		abilities: {0: "Mountaineer"},
		heightm: 42,
		weightkg: 310.5,
		color: "Black",
		eggGroups: ["Mineral"],
		requiredItem: "Coalossite"
	},
	flapple: {
		inherit: true,
		otherFormes: ["Flapple-Mega"],
		formeOrder: ["Flapple", "Flapple-Mega"]
	},
	flapplemega: {
		num: 841,
		name: "Flapple-Mega",
		baseSpecies: "Flapple",
		forme: "Mega",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 70, atk: 145, def: 90, spa: 135, spd: 70, spe: 105},
		abilities: {
			0: "Dragon's Maw"
		},
		heightm: 24,
		weightkg: 1,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Flapplite"
	},
	appletun: {
		inherit: true,
		otherFormes: ["Appletun-Mega"],
		formeOrder: ["Appletun", "Appletun-Mega"]
	},
	appletunmega: {
		num: 842,
		name: "Appletun-Mega",
		baseSpecies: "Appletun",
		forme: "Mega",
		types: ["Grass", "Dragon"],
		baseStats: {hp: 110, atk: 105, def: 100, spa: 135, spd: 100, spe: 40},
		abilities: {0: "Contrary"},
		heightm: 24,
		weightkg: 13,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Appletunite"
	},
	sandaconda: {
		inherit: true,
		otherFormes: ["Sandaconda-Mega"],
		formeOrder: ["Sandaconda", "Sandaconda-Mega"]
	},
	sandacondamega: {
		num: 844,
		name: "Sandaconda-Mega",
		baseSpecies: "Sandaconda",
		forme: "Mega",
		types: ["Ground", "Flying"],
		baseStats: {hp: 72, atk: 140, def: 160, spa: 85, spd: 90, spe: 81},
		abilities: {0: "Aerilate"},
		heightm: 22,
		weightkg: 65.5,
		color: "Green",
		eggGroups: ["Field", "Dragon"],
		requiredItem: "Sandacondite"
	},
	cramorant: {
		inherit: true,
		baseStats: {hp: 70, atk: 85, def: 65, spa: 100, spd: 95, spe: 105}
	},
	arrokuda: {
		inherit: true,
		abilities: {0: "Swift Swim"}
	},
	barraskewda: {
		inherit: true,
		abilities: {0: "Swift Swim"}
	},
	toxel: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Static", H: "Klutz"}
	},
	toxtricity: {
		inherit: true,
		otherFormes: ["Toxtricity-Mega", "Toxtricity-Low-Key", "Toxtricity-Low-Key-Mega"],
		formeOrder: ["Toxtricity", "Toxtricity-Mega"]
	},
	toxtricitymega: {
		num: 849,
		name: "Toxtricity-Mega",
		baseSpecies: "Toxtricity",
		forme: "Mega",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 80, spa: 155, spd: 80, spe: 111},
		abilities: {0: "Punk Rock"},
		heightm: 24,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Toxtricitite",
	},
	toxtricitylowkeymega: {
		num: 849,
		name: "Toxtricity-Low-Key-Mega",
		baseSpecies: "Toxtricity-Low-Key",
		forme: "Mega",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 80, spa: 155, spd: 80, spe: 111},
		abilities: {0: "Punk Rock"},
		heightm: 24,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Toxtricitite LK",
		changesFrom: "Toxtricity-Low-Key"
	},
	centiskorch: {
		inherit: true,
		otherFormes: ["Centiskorch-Mega"],
		formeOrder: ["Centiskorch", "Centiskorch-Mega"]
	},
	centiskorchmega: {
		num: 851,
		name: "Centiskorch-Mega",
		baseSpecies: "Centiskorch",
		forme: "Mega",
		types: ["Fire", "Bug"],
		baseStats: {hp: 100, atk: 150, def: 80, spa: 90, spd: 110, spe: 85},
		abilities: {0: "Mountaineer"},
		heightm: 75,
		weightkg: 120,
		color: "Red",
		eggGroups: ["Bug"],
		requiredItem: "Centiskite"
	},
	clobbopus: {
		inherit: true,
		types: ["Water", "Fighting"]
	},
	grapploct: {
		inherit: true,
		types: ["Water", "Fighting"]
	},
	impidimp: {
		inherit: true,
		abilities: {0: "Prankster", 1: "Frisk", H: "Infiltrator"}
	},
	morgrem: {
		inherit: true,
		abilities: {0: "Prankster", 1: "Frisk", H: "Infiltrator"}
	},
	grimmsnarl: {
		inherit: true,
		abilities: {0: "Prankster", 1: "Frisk", H: "Infiltrator"}
	},
	perrserker: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 100, spa: 30, spd: 60, spe: 50}
	},
	cursola: {
		inherit: true,
		baseStats: {hp: 80, atk: 75, def: 50, spa: 145, spd: 130, spe: 40},
		abilities: {0: "Weak Armor", 1: "Unburden", H: "Perish Body"}
	},
	sirfetchd: {
		inherit: true,
		baseStats: {hp: 82, atk: 135, def: 95, spa: 68, spd: 82, spe: 65},
		abilities: {0: "Blademaster", H: "Scrappy"}
	},
	mrrime: {
		inherit: true,
		baseStats: {hp: 80, atk: 65, def: 75, spa: 110, spd: 90, spe: 100}
	},
	runerigus: {
		inherit: true,
		abilities: {0: "Wandering Spirit", H: "Shadow Shield"}
	},
	alcremie: {
		inherit: true,
		otherFormes: ["Alcremie-Mega"],
		cosmeticFormes: ["Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
		formeOrder: ["Alcremie", "Alcremie-Mega", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"]
	},
	alcremiemega: {
		num: 869,
		name: "Alcremie-Mega",
		baseSpecies: "Alcremie",
		forme: "Mega",
		types: ["Fairy"],
		gender: "F",
		baseStats: {hp: 65, atk: 70, def: 90, spa: 140, spd: 131, spe: 84},
		abilities: {0: "Self Sufficient"},
		heightm: 30,
		weightkg: 0.5,
		color: "White",
		eggGroups: ["Fairy", "Amorphous"],
		requiredItem: "Alcremite"
	},
	falinks: {
		inherit: true,
		types: ["Bug", "Fighting"],
		baseStats: {hp: 75, atk: 100, def: 100, spa: 60, spd: 60, spe: 75}
	},
	pincurchin: {
		inherit: true,
		baseStats: {hp: 68, atk: 81, def: 95, spa: 91, spd: 85, spe: 15}
	},
	frosmoth: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 125, spd: 90, spe: 65}
	},
	stonjourner: {
		inherit: true,
		baseStats: {hp: 100, atk: 125, def: 135, spa: 20, spd: 50, spe: 80}
	},
	eiscue: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 110, spa: 45, spd: 90, spe: 50}
	},
	eiscuenoice: {
		inherit: true,
		baseStats: {hp: 75, atk: 100, def: 70, spa: 45, spd: 50, spe: 130}
	},
	morpeko: {
		inherit: true,
		baseStats: {hp: 58, atk: 110, def: 58, spa: 70, spd: 58, spe: 97}
	},
	cufant: {
		inherit: true,
		abilities: {0: "Heavy Metal"}
	},
	copperajah: {
		inherit: true,
		baseStats: {hp: 122, atk: 130, def: 79, spa: 80, spd: 79, spe: 30},
		abilities: {0: "Heavy Metal"},
		otherFormes: ["Copperajah-Mega"],
		formeOrder: ["Copperajah", "Copperajah-Mega"]
	},
	copperajahmega: {
		num: 879,
		name: "Copperajah-Mega",
		baseSpecies: "Copperajah",
		forme: "Mega",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 122, atk: 155, def: 94, spa: 100, spd: 94, spe: 20},
		abilities: {0: "Sheer Force"},
		heightm: 23,
		weightkg: 650,
		color: "Green",
		eggGroups: ["Field", "Mineral"],
		requiredItem: "Copperajite"
	},
	arctozolt: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 90, spa: 90, spd: 55, spe: 80}
	},
	dracovish: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 100, spa: 70, spd: 90, spe: 75}
	},
	arctovish: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 100, spa: 55, spd: 90, spe: 80}
	},
	duraludon: {
		inherit: true,
		abilities: {0: "Light Metal", 1: "Heavy Metal", H: "Clear Body"},
		otherFormes: ["Duraludon-Mega"],
		formeOrder: ["Duraludon", "Duraludon-Mega"]
	},
	duraludonmega: {
		num: 884,
		name: "Duraludon-Mega",
		baseSpecies: "Duraludon",
		forme: "Mega",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 70, atk: 95, def: 140, spa: 140, spd: 90, spe: 95},
		abilities: {0: "Bad Company"},
		heightm: 43,
		weightkg: 40,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		requiredItem: "Duraludonite"
	},
}