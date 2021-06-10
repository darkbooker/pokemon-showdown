export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	caterpie: {
		inherit: true,
		items: {5: "Coba Berry", 50: "None"}
	},
	metapod: {
		inherit: true,
		items: {5: "Coba Berry", 50: "None"}
	},
	butterfree: {
		inherit: true,
		baseStats: {hp: 60, atk: 45, def: 50, spa: 95, spd: 80, spe: 70},
		otherFormes: ["Butterfree-Mega"],
		formeOrder: ["Butterfree", "Butterfree-Mega"],
		items: {5: "Silver Powder", 50: "None"}
	},
	butterfreegmax: {
		inherit: true,
		baseStats: {hp: 60, atk: 45, def: 50, spa: 95, spd: 80, spe: 70}
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
		requiredItem: "Butterfrite",
		gen: 8
	},
	weedle: {
		inherit: true,
		items: {5: "Coba Berry", 50: "None"}
	},
	kakuna: {
		inherit: true,
		items: {5: "Coba Berry", 50: "None"}
	},
	beedrill: {
		inherit: true,
		items: {5: "Poison Barb", 50: "None"}
	},
	beedrillmega: {
		inherit: true,
		items: {5: "Poison Barb", 50: "None"}
	},
	pidgey: {
		inherit: true,
		abilities: {0: "Tangled Feet", H: "Frisk"}
	},
	pidgeotto: {
		inherit: true,
		abilities: {0: "Tangled Feet", H: "Frisk"},
		evoLevel: 16
	},
	pidgeot: {
		inherit: true,
		abilities: {0: "Tangled Feet", H: "Frisk"}
	},
	rattata: {
		inherit: true,
		items: {5: "Chilan Berry", 50: "None"}
	},
	rattataalola: {
		inherit: true,
		items: {5: "Pecha Berry", 50: "None"}
	},
	raticate: {
		inherit: true,
		baseStats: {hp: 60, atk: 91, def: 60, spa: 50, spd: 70, spe: 97},
		items: {5: "Chilan Berry", 50: "None"}
	},
	raticatealola: {
		inherit: true,
		baseStats: {hp: 75, atk: 86, def: 70, spa: 40, spd: 80, spe: 77},
		items: {5: "Pecha Berry", 50: "None"}
	},
	spearow: {
		inherit: true,
		abilities: {0: "Frisk", H: "Sniper"},
		items: {5: "Sharp Beak", 50: "None"}
	},
	fearow: {
		inherit: true,
		baseStats: {hp: 65, atk: 100, def: 65, spa: 61, spd: 61, spe: 115},
		abilities: {0: "Sniper", H: "Technician"},
		items: {5: "Sharp Beak", 50: "None"}
	},
	arbok: {
		inherit: true,
		types: ["Poison", "Dark"],
		baseStats: {hp: 75, atk: 95, def: 75, spa: 65, spd: 79, spe: 80},
		abilities: {0: "Intimidate", 1: "Shed Skin", H: "Strong Jaw"},
		items: {5: "Poison Barb", 50: "None"}
	},
	pikachu: {
		inherit: true,
		otherFormes: ["Pikachu-Cosplay", "Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", "Pikachu-Starter", "Pikachu-World", "Pikachu-Flying", "Pikachu-Surfing"],
		formeOrder: [
			"Pikachu",
			"Pikachu-Original", "Pikachu-Hoenn", "Pikachu-Sinnoh", "Pikachu-Unova", "Pikachu-Kalos", "Pikachu-Alola", "Pikachu-Partner", // Gen 7 formes
			"Pikachu-Starter", // forme 8 in LGPE
			"Pikachu-World", // Gen 8 forme (indexed as Pikachu 9 in datamine)
			"Pikachu-Rock-Star", "Pikachu-Belle", "Pikachu-Pop-Star", "Pikachu-PhD", "Pikachu-Libre", "Pikachu-Cosplay", // formes 1-6 from Gen 6
			"Pikachu-Flying", "Pikachu-Surfing",
		],
		items: {5: "Light Ball", 50: "Oran Berry"}
	},
	pikachubelle: {
		inherit: true,
		types: ["Electric", "Ice"],
		changesFrom: ""
	},
	pikachuflying: {
		num: 25,
		name: "Pikachu-Flying",
		baseSpecies: "Pikachu",
		forme: "Flying",
		types: ["Electric", "Flying"],
		baseStats: {hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90},
		abilities: {0: "Static", H: "Lightning Rod"},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 8
	},
	pikachulibre: {
		inherit: true,
		types: ["Electric", "Fighting"],
		changesFrom: ""
	},
	pikachuphd: {
		inherit: true,
		types: ["Electric", "Psychic"],
		changesFrom: ""
	},
	pikachupopstar: {
		inherit: true,
		types: ["Electric", "Fairy"],
		changesFrom: ""
	},
	pikachurockstar: {
		inherit: true,
		types: ["Electric", "Steel"],
		changesFrom: ""
	},
	pikachusurfing: {
		num: 25,
		name: "Pikachu-Surfing",
		baseSpecies: "Pikachu",
		forme: "Surfing",
		types: ["Electric", "Water"],
		baseStats: {hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90},
		abilities: {0: "Static", H: "Lightning Rod"},
		heightm: 0.4,
		weightkg: 6,
		color: "Yellow",
		eggGroups: ["Undiscovered"],
		gen: 8
	},
	raichu: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 55, spa: 100, spd: 80, spe: 110},
		items: {5: "Oran Berry", 50: "None"}
	},
	raichualola: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Shiny Stone"
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
	nidoranf: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Hustle"}
	},
	nidorina: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Hustle"}
	},
	nidoqueen: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Sheer Force"}
	},
	nidoranm: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Hustle"}
	},
	nidorino: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Hustle"}
	},
	nidoking: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Rivalry", H: "Sheer Force"}
	},
	clefairy: {
		inherit: true,
		items: {5: "Moon Stone", 50: "Leppa Berry"}
	},
	clefable: {
		inherit: true,
		items: {5: "Moon Stone", 50: "Leppa Berry"}
	},
	vulpix: {
		inherit: true,
		items: {5: "Charcoal", 50: "Rawst Berry"}
	},
	ninetales: {
		inherit: true,
		items: {5: "Heat Rock", 50: "Charcoal"}
	},
	ninetalesalola: {
		inherit: true,
		items: {5: "Icy Rock", 50: "None"}
	},
	jigglypuff: {
		inherit: true,
		items: {5: "Moon Stone", 50: "Oran Berry"}
	},
	wigglytuff: {
		inherit: true,
		abilities: {0: "Sheer Force", 1: "Competitive", H: "Frisk"},
		items: {5: "Moon Stone", 50: "Oran Berry"}
	},
	zubat: {
		inherit: true,
		abilities: {0: "Infiltrator", 1: "Sniper", H: "Corrosion"}
	},
	golbat: {
		inherit: true,
		abilities: {0: "Infiltrator", 1: "Sniper", H: "Corrosion"}
	},
	oddish: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	gloom: {
		inherit: true,
		evoLevel: 16,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	vileplume: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	paras: {
		inherit: true,
		items: {5: "Big Mushroom", 50: "Tiny Mushroom"}
	},
	parasect: {
		inherit: true,
		baseStats: {hp: 80, atk: 110, def: 100, spa: 60, spd: 80, spe: 30},
		items: {5: "Big Mushroom", 50: "Big Mushroom"}
	},
	venomoth: {
		inherit: true,
		types: ["Bug", "Psychic"],
		baseStats: {hp: 70, atk: 65, def: 65, spa: 95, spd: 75, spe: 90},
		items: {5: "Shed Shell", 50: "None"}
	},
	diglett: {
		inherit: true,
		items: {5: "Soft Sand", 50: "None"}
	},
	diglettalola: {
		inherit: true,
		items: {5: "Soft Sand", 50: "None"}
	},
	dugtrio: {
		inherit: true,
		items: {5: "Soft Sand", 50: "None"}
	},
	dugtrioalola: {
		inherit: true,
		baseStats: {hp: 35, atk: 110, def: 60, spa: 50, spd: 70, spe: 110},
		items: {5: "Soft Sand", 50: "None"}
	},
	meowth: {
		inherit: true,
		items: {5: "Nugget", 50: "Nugget"}
	},
	meowthalola: {
		inherit: true,
		abilities: {0: "Pickup", 1: "Technician", H: "Feline Power"},
		items: {5: "Nugget", 50: "Nugget"}
	},
	persian: {
		inherit: true,
		baseStats: {hp: 65, atk: 80, def: 60, spa: 60, spd: 65, spe: 115},
		abilities: {0: "Limber", 1: "Technician", H: "Feline Power"},
		items: {5: "Big Nugget", 50: "Big Nugget"}
	},
	persianalola: {
		inherit: true,
		baseStats: {hp: 65, atk: 60, def: 60, spa: 55, spd: 65, spe: 115},
		abilities: {0: "Fur Coat", 1: "Technician", H: "Feline Power"},
		items: {5: "Big Nugget", 50: "Big Nugget"}
	},
	psyduck: {
		inherit: true,
		items: {5: "Blue Shard", 50: "Blue Shard"}
	},
	golduck: {
		inherit: true,
		types: ["Water", "Psychic"],
		baseStats: {hp: 80, atk: 82, def: 78, spa: 100, spd: 80, spe: 100},
		abilities: {0: "Swift Swim", 1: "Cloud Nine", H: "Neuroforce"},
		items: {5: "Blue Shard", 50: "Blue Shard"}
	},
	mankey: {
		inherit: true,
		items: {5: "Payapa Berry", 50: "None"}
	},
	primeape: {
		inherit: true,
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Gorilla Tactics"},
		items: {5: "Payapa Berry", 50: "None"}
	},
	growlithe: {
		inherit: true,
		items: {5: "Rawst Berry", 50: "Rawst Berry"}
	},
	arcanine: {
		inherit: true,
		items: {5: "Rawst Berry", 50: "Rawst Berry"}
	},
	poliwhirl: {
		inherit: true,
		items: {5: "King's Rock", 50: "None"}
	},
	poliwrath: {
		inherit: true,
		items: {5: "King's Rock", 50: "None"}
	},
	abra: {
		inherit: true,
		items: {5: "Twisted Spoon", 50: "None"}
	},
	kadabra: {
		inherit: true,
		items: {5: "Twisted Spoon", 50: "None"}
	},
	alakazam: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "Twisted Spoon", 50: "None"}
	},
	alakazammega: {
		inherit: true,
		items: {5: "Twisted Spoon", 50: "None"}
	},
	machop: {
		inherit: true,
		items: {5: "Black Belt", 50: "None"}
	},
	machoke: {
		inherit: true,
		items: {5: "Black Belt", 50: "None"}
	},
	machamp: {
		inherit: true,
		otherFormes: ["Machamp-Mega"],
		formeOrder: ["Machamp", "Machamp-Mega"],
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "Black Belt", 50: "Black Belt"}
	},
	machampmega: {
		num: 68,
		name: "Machamp-Mega",
		baseSpecies: "Machamp",
		forme: "Mega",
		types: ["Fighting"],
		genderRatio: {M: 0.75, F: 0.25},
		baseStats: {hp: 90, atk: 145, def: 110, spa: 65, spd: 115, spe: 75},
		abilities: {0: "ORAORAORAORA"},
		heightm: 25,
		weightkg: 130,
		color: "Gray",
		eggGroups: ["Human-Like"],
		requiredItem: "Machampite",
		gen: 8
	},
	bellsprout: {
		inherit: true,
		items: {5: "None", 50: "Green Shard"}
	},
	weepinbell: {
		inherit: true,
		items: {5: "None", 50: "Green Shard"}
	},
	victreebel: {
		inherit: true,
		baseStats: {hp: 80, atk: 105, def: 70, spa: 100, spd: 75, spe: 70},
		items: {5: "None", 50: "Green Shard"}
	},
	tentacool: {
		inherit: true,
		items: {5: "Poison Barb", 50: "None"}
	},
	tentacruel: {
		inherit: true,
		baseStats: {hp: 80, atk: 60, def: 80, spa: 90, spd: 120, spe: 100},
		items: {5: "Poison Barb", 50: "None"}
	},
	geodudealola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Magnet Pull", H: "Galvanize"}
	},
	graveler: {
		inherit: true,
		items: {5: "everstone", 50: "Weakness Policy"}
	},
	graveleralola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Magnet Pull", H: "Galvanize"},
		items: {5: "everstone", 50: "Weakness Policy"}
	},
	golem: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "everstone", 50: "Weakness Policy"}
	},
	golemalola: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Magnet Pull", H: "Galvanize"},
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "everstone", 50: "Weakness Policy"}
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
		baseStats: {hp: 65, atk: 100, def: 70, spa: 60, spd: 80, spe: 125},
		types: ["Fire", "Fairy"]
	},
	slowbro: {
		inherit: true,
		items: {5: "King's Rock", 50: "None"}
	},
	slowbrogalar: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 105, spa: 115, spd: 70, spe: 30},
		abilities: {0: "Gluttony", 1: "Own Tempo", H: "Regenerator"},
		evoType: null,
		evoLevel: 37,
		evoItem: ""
	},
	slowbromega: {
		inherit: true,
		baseStats: {hp: 95, atk: 75, def: 180, spa: 130, spd: 80, spe: 30},
		abilities: {0: "Regenerator", 1: "Regenerator", H: "Shell Armor"}
	},
	magnemite: {
		inherit: true,
		items: {5: "Magnet", 50: "None"}
	},
	magneton: {
		inherit: true,
		items: {5: "Magnet", 50: "None"}
	},
	farfetchd: {
		inherit: true,
		types: ["Fighting", "Flying"],
		baseStats: {hp: 75, atk: 90, def: 70, spa: 58, spd: 77, spe: 60},
		abilities: {0: "Frisk", 1: "Inner Focus", H: "Blademaster"},
		items: {5: "Leek Stick", 50: "None"}
	},
	doduo: {
		inherit: true,
		items: {5: "Sharp Beak", 50: "None"}
	},
	dodrio: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Early Bird", H: "Tangled Feet"},
		items: {5: "Sharp Beak", 50: "None"}
	},
	seel: {
		inherit: true,
		items: {5: "None", 50: "Aspear Berry"}
	},
	dewgong: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 80, spa: 90, spd: 95, spe: 70},
		abilities: {0: "Thick Fat", 1: "Ice Scales", H: "Ice Body"},
		items: {5: "Never-Melt Ice", 50: "Aspear Berry"}
	},
	grimer: {
		inherit: true,
		items: {5: "Black Sludge", 50: "None"}
	},
	muk: {
		inherit: true,
		abilities: {0: "Regenerator", 1: "Sticky Hold", H: "Poison Touch"},
		items: {5: "None", 50: "Black Sludge"}
	},
	shellder: {
		inherit: true,
		items: {5: "Big Pearl", 50: "Pearl"}
	},
	cloyster: {
		inherit: true,
		items: {5: "Big Pearl", 50: "Pearl"}
	},
	haunter: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	gengar: {
		inherit: true,
		abilities: {0: "Levitate"},
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "Spell Tag", 50: "None"}
	},
	gengargmax: {
		inherit: true,
		abilities: {0: "Levitate"}
	},
	gengarmega: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	onix: {
		inherit: true,
		baseStats: {hp: 50, atk: 60, def: 150, spa: 30, spd: 45, spe: 65},
		items: {5: "Hard Stone", 50: "None"}
	},
	drowzee: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Psychic Surge"},
		items: {5: "Terrain Extender", 50: "None"}
	},
	hypno: {
		inherit: true,
		abilities: {0: "Insomnia", 1: "Forewarn", H: "Psychic Surge"},
		items: {5: "Terrain Extender", 50: "None"}
	},
	kingler: {
		inherit: true,
		otherFormes: ["Kingler-Mega"],
		formeOrder: ["Kingler", "Kingler-Mega"]
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
		requiredItem: "Kinglerite",
		gen: 8
	},
	voltorb: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Static", H: "Galvanize"}
	},
	electrode: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 70, spa: 100, spd: 80, spe: 150},
		abilities: {0: "Soundproof", 1: "Static", H: "Galvanize"}
	},
	exeggcute: {
		inherit: true,
		items: {5: "Psychic Seed", 50: "None"}
	},
	cubone: {
		inherit: true,
		abilities: {0: "Rock Head", 1: "Battle Armor", H: "Bone Zone"},
		items: {5: "Thick Club", 50: "None"}
	},
	marowak: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 110, spa: 30, spd: 80, spe: 45},
		abilities: {0: "Rock Head", 1: "Battle Armor", H: "Bone Zone"},
		items: {5: "Thick Club", 50: "None"}
	},
	marowakalola: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Rock Head", H: "Bone Zone"},
		evoCondition: "from a Cubone caught in Lavender Tower",
		items: {5: "Thick Club", 50: "Thick Club"}
	},
	marowakalolatotem: {
		inherit: true,
		abilities: {0: "Bone Zone"}
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
	koffing: {
		inherit: true,
		items: {5: "Smoke Ball", 50: "None"}
	},
	weezing: {
		inherit: true,
		items: {5: "Smoke Ball", 50: "None"}
	},
	chansey: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Shiny Stone",
		evoCondition: "",
		items: {5: "luckyegg", 50: "Lucky Punch"}
	},
	horsea: {
		inherit: true,
		items: {5: "Prism Scale", 50: "None"}
	},
	seadra: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Sniper", H: "Damp"},
		items: {5: "Prism Scale", 50: "None"}
	},
	goldeen: {
		inherit: true,
		abilities: {0: "Rain Dish", 1: "Water Veil", H: "Lightning Rod"},
		items: {5: "Mystic Water", 50: "None"}
	},
	seaking: {
		inherit: true,
		abilities: {0: "Rain Dish", 1: "Water Veil", H: "Lightning Rod"},
		items: {5: "Mystic Water", 50: "None"}
	},
	staryu: {
		inherit: true,
		items: {5: "Star Piece", 50: "Stardust"}
	},
	starmie: {
		inherit: true,
		items: {5: "Star Piece", 50: "Stardust"}
	},
	mrmime: {
		inherit: true,
		baseStats: {hp: 50, atk: 45, def: 65, spa: 100, spd: 120, spe: 90},
		abilities: {0: "Soundproof", 1: "Filter", H: "Misty Surge"},
		items: {5: "Terrain Extender", 50: "None"}
	},
	jynx: {
		inherit: true,
		baseStats: {hp: 65, atk: 50, def: 50, spa: 115, spd: 95, spe: 100},
		items: {5: "Heart Scale", 50: "Heart Scale"}
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
		formeOrder: ["Lapras", "Lapras-Mega"],
		items: {5: "Mystic Water", 50: "Mystic Water"}
	},
	laprasgmax: {
		inherit: true,
		types: ["Water", "Dragon"]
	},
	laprasmega: {
		num: 131,
		name: "Lapras-Mega",
		baseSpecies: "Lapras",
		forme: "Mega",
		types: ["Water", "Dragon"],
		baseStats: {hp: 130, atk: 105, def: 90, spa: 115, spd: 105, spe: 70},
		abilities: {0: "Liquid Voice"},
		heightm: 24,
		weightkg: 220,
		color: "Blue",
		eggGroups: ["Monster", "Water 1"],
		requiredItem: "Laprasite",
		gen: 8
	},
	ditto: {
		inherit: true,
		items: {5: "Metal Powder", 50: "None"}
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
		formeOrder: ["Snorlax", "Snorlax-Mega"],
		items: {5: "Leftovers", 50: "Leftovers"}
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
		requiredItem: "Snorlaxite",
		gen: 8
	},
	articuno: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 100, spa: 95, spd: 125, spe: 105},
		abilities: {0: "Pressure", H: "Shield Dust"}
	},
	articunogalar: {
		inherit: true,
		baseStats: {hp: 90, atk: 70, def: 95, spa: 125, spd: 100, spe: 100}
	},
	dratini: {
		inherit: true,
		items: {5: "Dragon Scale", 50: "None"}
	},
	dragonair: {
		inherit: true,
		items: {5: "Dragon Scale", 50: "None"}
	},
	dragonite: {
		inherit: true,
		items: {5: "Dragon Scale", 50: "None"}
	},
	mew: {
		inherit: true,
		items: {5: "Lum Berry", 50: "Lum Berry"}
	},
	meganium: {
		inherit: true,
		types: ["Grass", "Fairy"],
		abilities: {0: "Overgrow", H: "Triage"}
	},
	typhlosion: {
		inherit: true,
		abilities: {0: "Flash Fire", H: "Blazing Soul"}
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
		abilities: {0: "Run Away", 1: "Frisk"},
		items: {5: "Oran Berry", 50: "None"}
	},
	furret: {
		inherit: true,
		baseStats: {hp: 85, atk: 86, def: 64, spa: 45, spd: 55, spe: 90},
		abilities: {0: "Adaptability", 1: "Frisk"},
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
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
	ledyba: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Early Bird"}
	},
	ledian: {
		inherit: true,
		types: ["Bug", "Fighting"],
		baseStats: {hp: 55, atk: 90, def: 50, spa: 35, spd: 100, spe: 85},
		evoLevel: 16
	},
	ariados: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 70, spa: 60, spd: 70, spe: 70},
		abilities: {0: "Swarm", 1: "No Guard", H: "Sniper"}
	},
	crobat: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 80, spa: 90, spd: 80, spe: 130},
		abilities: {0: "Infiltrator", 1: "Sniper", H: "Corrosion"}
	},
	pichu: {
		inherit: true,
		items: {5: "Oran Berry", 50: "None"}
	},
	pichuspikyeared: {
		inherit: true,
		items: {5: "Oran Berry", 50: "None"}
	},
	cleffa: {
		inherit: true,
		items: {5: "Moon Stone", 50: "Leppa Berry"}
	},
	igglybuff: {
		inherit: true,
		items: {5: "None", 50: "Oran Berry"}
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
	politoed: {
		inherit: true,
		evoType: "useItem",
		evoItem: "King's Rock",
		items: {5: "Damp Rock", 50: "None"}
	},
	skiploom: {
		inherit: true,
		evoLevel: 16
	},
	jumpluff: {
		inherit: true,
		baseStats: {hp: 75, atk: 85, def: 70, spa: 35, spd: 95, spe: 110},
		abilities: {0: "Chlorophyll", 1: "Leaf Guard", H: "Aerilate"}
	},
	aipom: {
		inherit: true,
		items: {5: "Silk Scarf", 50: "None"}
	},
	sunflora: {
		inherit: true,
		types: ["Grass", "Fire"],
		baseStats: {hp: 95, atk: 75, def: 55, spa: 135, spd: 85, spe: 55}
	},
	yanma: {
		inherit: true,
		items: {5: "Wide Lens", 50: "None"}
	},
	quagsire: {
		inherit: true,
		baseStats: {hp: 100, atk: 85, def: 90, spa: 65, spd: 65, spe: 35}
	},
	slowking: {
		inherit: true,
		evoType: "useItem",
		evoItem: "King's Rock",
		items: {5: "King's Rock", 50: "None"}
	},
	slowkinggalar: {
		inherit: true,
		abilities: {0: "Oblivious", 1: "Own Tempo", H: "Regenerator"},
		evoItem: "King's Rock"
	},
	misdreavus: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	girafarig: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Early Bird", H: "Parental Bond"},
		items: {5: "Persim Berry", 50: "None"}
	},
	dunsparce: {
		inherit: true,
		baseStats: {hp: 100, atk: 70, def: 80, spa: 65, spd: 75, spe: 45},
		abilities: {0: "Serene Grace", 1: "Run Away"}
	},
	steelix: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Metal Coat",
		items: {5: "Metal Coat", 50: "None"}
	},
	steelixmega: {
		inherit: true,
		abilities: {0: "Heatproof"},
		items: {5: "Metal Coat", 50: "None"}
	},
	snubbull: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Run Away", H: "Defiant"},
		items: {5: "Pixie Plate", 50: "None"}
	},
	granbull: {
		inherit: true,
		types: ["Fairy", "Fighting"],
		baseStats: {hp: 100, atk: 120, def: 75, spa: 60, spd: 60, spe: 45},
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Bull Rush"},
		items: {5: "Pixie Plate", 50: "None"}
	},
	qwilfish: {
		inherit: true,
		baseStats: {hp: 65, atk: 105, def: 85, spa: 55, spd: 55, spe: 85},
		abilities: {0: "Prankster", 1: "Swift Swim", H: "Intimidate"},
		items: {5: "Poison Barb", 50: "None"}
	},
	scizor: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Metal Coat"
	},
	shuckle: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Solid Rock", H: "Contrary"},
		items: {5: "Berry Juice", 50: "Berry Juice"}
	},
	sneasel: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Frisk", H: "Infiltrator"}
	},
	teddiursa: {
		inherit: true,
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	ursaring: {
		inherit: true,
		baseStats: {hp: 100, atk: 130, def: 80, spa: 55, spd: 80, spe: 55},
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	slugma: {
		inherit: true,
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	magcargo: {
		inherit: true,
		abilities: {0: "Simple", 1: "Flame Body", H: "Weak Armor"},
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	swinub: {
		inherit: true,
		items: {5: "None", 50: "Aspear Berry"}
	},
	piloswine: {
		inherit: true,
		items: {5: "Never-Melt Ice", 50: "Aspear Berry"}
	},
	corsola: {
		inherit: true,
		baseStats: {hp: 85, atk: 55, def: 100, spa: 65, spd: 100, spe: 55}
	},
	corsolagalar: {
		inherit: true,
		baseStats: {hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 40},
		abilities: {0: "Weak Armor", 1: "Unburden", H: "Cursed Body"}
	},
	remoraid: {
		inherit: true,
		abilities: {0: "Hustle", 1: "Sniper", H: "Skill Link"}
	},
	octillery: {
		inherit: true,
		baseStats: {hp: 75, atk: 105, def: 75, spa: 105, spd: 75, spe: 75},
		abilities: {0: "Mega Launcher", 1: "Sniper", H: "Skill Link"}
	},
	delibird: {
		inherit: true,
		baseStats: {hp: 45, atk: 100, def: 45, spa: 65, spd: 45, spe: 105},
		abilities: {0: "Vital Spirit", 1: "Hustle", H: "Surprise!"},
		items: {5: "Bottle Cap", 50: "Bottle Cap"}
	},
	mantine: {
		inherit: true,
		baseStats: {hp: 85, atk: 40, def: 70, spa: 90, spd: 140, spe: 70}
	},
	skarmory: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sturdy", H: "Weak Armor"},
		items: {5: "Metal Coat", 50: "None"}
	},
	houndour: {
		inherit: true,
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	houndoom: {
		inherit: true,
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	houndoommega: {
		inherit: true,
		baseStats: {hp: 75, atk: 110, def: 90, spa: 140, spd: 90, spe: 115},
		abilities: {0: "Dark Aura", 1: "Solar Power", H: "Dark Aura"}
	},
	kingdra: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Prism Scale",
		items: {5: "Dragon Scale", 50: "None"}
	},
	donphan: {
		inherit: true,
		abilities: {0: "Sturdy", H: "Technician"}
	},
	porygon2: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Up-Grade",
		items: {5: "Up-Grade", 50: "Up-Grade"}
	},
	stantler: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 70, spa: 100, spd: 73, spe: 100},
		abilities: {0: "Intimidate", 1: "Reckless", H: "Sap Sipper"}
	},
	smeargle: {
		inherit: true,
		abilities: {0: "Own Tempo", 1: "Technician"}
	},
	smoochum: {
		inherit: true,
		items: {5: "Aspear Berry", 50: "Aspear Berry"}
	},
	miltank: {
		inherit: true,
		baseStats: {hp: 95, atk: 85, def: 105, spa: 40, spd: 70, spe: 100},
		items: {5: "moomoomilk", 50: "moomoomilk"}
	},
	blissey: {
		inherit: true,
		items: {5: "luckyegg", 50: "luckyegg"}
	},
	hooh: {
		inherit: true,
		items: {5: "sacredash", 50: "sacredash"}
	},
	celebi: {
		inherit: true,
		items: {5: "Lum Berry", 50: "Lum Berry"}
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
		abilities: {0: "Run Away", 1: "Quick Feet", H: "Moxie"},
		items: {5: "Pecha Berry", 50: "None"}
	},
	mightyena: {
		inherit: true,
		baseStats: {hp: 70, atk: 95, def: 70, spa: 60, spd: 60, spe: 70},
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Moxie"},
		evoLevel: 16,
		items: {5: "Pecha Berry", 50: "None"}
	},
	zigzagoon: {
		inherit: true,
		items: {5: "revive", 50: "potion"}
	},
	linoone: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 61, spa: 50, spd: 61, spe: 100},
		evoLevel: 16,
		items: {5: "maxrevive", 50: "potion"}
	},
	linoonegalar: {
		inherit: true,
		evoLevel: 16
	},
	wurmple: {
		inherit: true,
		items: {5: "Silver Powder", 50: "Pecha Berry"}
	},
	silcoon: {
		inherit: true,
		items: {5: "Silver Powder", 50: "None"}
	},
	beautifly: {
		inherit: true,
		baseStats: {hp: 60, atk: 70, def: 50, spa: 105, spd: 50, spe: 75},
		items: {5: "Shed Shell", 50: "Silver Powder"}
	},
	cascoon: {
		inherit: true,
		items: {5: "Silver Powder", 50: "None"}
	},
	dustox: {
		inherit: true,
		baseStats: {hp: 80, atk: 40, def: 70, spa: 60, spd: 90, spe: 65},
		items: {5: "Shed Shell", 50: "Silver Powder"}
	},
	lotad: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
	},
	lombre: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
	},
	ludicolo: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
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
		baseStats: {hp: 90, atk: 120, def: 60, spa: 110, spd: 60, spe: 80},
		abilities: {0: "Chlorophyll", 1: "Early Bird", H: "Infiltrator"}
	},
	taillow: {
		inherit: true,
		items: {5: "Charti Berry", 50: "None"}
	},
	swellow: {
		inherit: true,
		abilities: {0: "Guts", H: "Aerilate"},
		items: {5: "Charti Berry", 50: "None"}
	},
	wingull: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Hydration", H: "Rain Dish"}
	},
	pelipper: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Drizzle", H: "Rain Dish"},
		items: {5: "Damp Rock", 50: "luckyegg"}
	},
	masquerain: {
		inherit: true,
		types: ["Bug", "Water"],
		baseStats: {hp: 80, atk: 60, def: 62, spa: 100, spd: 82, spe: 80},
		items: {5: "Silver Powder", 50: "None"}
	},
	shroomish: {
		inherit: true,
		items: {5: "Kebia Berry", 50: "Tiny Mushroom"}
	},
	breloom: {
		inherit: true,
		items: {5: "Kebia Berry", 50: "Big Mushroom"}
	},
	nincada: {
		inherit: true,
		items: {5: "Soft Sand", 50: "None"}
	},
	ninjask: {
		inherit: true,
		evoLevel: 16
	},
	shedinja: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Dusk Stone",
		evoLevel: 0
	},
	whismur: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Oblivious", H: "Scrappy"},
		items: {5: "Throat Spray", 50: "None"}
	},
	loudred: {
		inherit: true,
		abilities: {0: "Soundproof", 1: "Oblivious", H: "Punk Rock"},
		items: {5: "Throat Spray", 50: "None"}
	},
	exploud: {
		inherit: true,
		baseStats: {hp: 104, atk: 81, def: 63, spa: 91, spd: 73, spe: 73},
		abilities: {0: "Soundproof", 1: "Scrappy", H: "Punk Rock"},
		items: {5: "Throat Spray", 50: "None"}
	},
	makuhita: {
		inherit: true,
		items: {5: "Black Belt", 50: "None"}
	},
	hariyama: {
		inherit: true,
		items: {5: "King's Rock", 50: "None"}
	},
	nosepass: {
		inherit: true,
		items: {5: "Magnet", 50: "None"}
	},
	skitty: {
		inherit: true,
		items: {5: "Leppa Berry", 50: "Pecha Berry"}
	},
	delcatty: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 65, spd: 55, spe: 90},
		abilities: {0: "Cute Charm", 1: "Feline Power", H: "Wonder Skin"},
		items: {5: "Leppa Berry", 50: "Pecha Berry"}
	},
	sableye: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Stall", H: "Prankster"},
		items: {5: "Wide Lens", 50: "None"}
	},
	mawile: {
		inherit: true,
		items: {5: "Iron Ball", 50: "None"}
	},
	aron: {
		inherit: true,
		items: {5: "Hard Stone", 50: "None"}
	},
	lairon: {
		inherit: true,
		items: {5: "Hard Stone", 50: "None"}
	},
	aggron: {
		inherit: true,
		items: {5: "Hard Stone", 50: "None"}
	},
	aggronmega: {
		inherit: true,
		items: {5: "Hard Stone", 50: "None"}
	},
	electrike: {
		inherit: true,
		items: {5: "None", 50: "Yellow Shard"}
	},
	manectric: {
		inherit: true,
		abilities: {0: "Static", 1: "Lightning Rod", H: "Intimidate"},
		items: {5: "None", 50: "Yellow Shard"}
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
		abilities: {0: "Prankster", 1: "Illuminate", H: "Prankster"}
	},
	illumise: {
		inherit: true,
		types: ["Bug", "Fairy"],
		baseStats: {hp: 85, atk: 90, def: 75, spa: 47, spd: 85, spe: 100}
	},
	roselia: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Poison Touch", H: "Leaf Guard"},
		items: {5: "Poison Barb", 50: "None"}
	},
	gulpin: {
		inherit: true,
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	swalot: {
		inherit: true,
		baseStats: {hp: 100, atk: 88, def: 88, spa: 93, spd: 88, spe: 55},
		abilities: {0: "Liquid Ooze", 1: "Sticky Hold", H: "Magic Guard"},
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	carvanha: {
		inherit: true,
		items: {5: "Deep Sea Tooth", 50: "None"}
	},
	sharpedo: {
		inherit: true,
		items: {5: "Deep Sea Tooth", 50: "None"}
	},
	wailord: {
		inherit: true,
		baseStats: {hp: 150, atk: 50, def: 80, spa: 105, spd: 80, spe: 50},
		abilities: {0: "Water Veil", 1: "Multiscale", H: "Pressure"}
	},
	numel: {
		inherit: true,
		items: {5: "Rawst Berry", 50: "Rawst Berry"}
	},
	camerupt: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 70, spa: 105, spd: 75, spe: 40},
		items: {5: "Rawst Berry", 50: "Rawst Berry"}
	},
	cameruptmega: {
		inherit: true,
		baseStats: {hp: 90, atk: 100, def: 110, spa: 145, spd: 115, spe: 20},
		items: {5: "Rawst Berry", 50: "Rawst Berry"}
	},
	torkoal: {
		inherit: true,
		baseStats: {hp: 70, atk: 75, def: 140, spa: 95, spd: 70, spe: 20},
		items: {5: "Heat Rock", 50: "None"}
	},
	spoink: {
		inherit: true,
		items: {5: "Tanga Berry", 50: "Persim Berry"}
	},
	grumpig: {
		inherit: true,
		baseStats: {hp: 90, atk: 45, def: 65, spa: 90, spd: 110, spe: 80},
		items: {5: "Tanga Berry", 50: "Persim Berry"}
	},
	spinda: {
		inherit: true,
		baseStats: {hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80},
		items: {5: "Chesto Berry", 50: "None"}
	},
	trapinch: {
		inherit: true,
		items: {5: "Soft Sand", 50: "None"}
	},
	vibrava: {
		inherit: true,
		abilities: {0: "Levitate", 1: "Compound Eyes", H: "Tinted Lens"}
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
		baseStats: {hp: 73, atk: 115, def: 70, spa: 60, spd: 70, spe: 100},
		abilities: {0: "Tough Claws", H: "Toxic Boost"}
	},
	seviper: {
		inherit: true,
		baseStats: {hp: 83, atk: 100, def: 83, spa: 100, spd: 83, spe: 85},
		abilities: {0: "Merciless", 1: "Shed Skin", H: "Fatal Precision"},
		items: {5: "Shed Shell", 50: "None"}
	},
	lunatone: {
		inherit: true,
		baseStats: {hp: 90, atk: 55, def: 65, spa: 105, spd: 85, spe: 90},
		items: {5: "Moon Stone", 50: "stardust"}
	},
	solrock: {
		inherit: true,
		baseStats: {hp: 90, atk: 105, def: 85, spa: 55, spd: 65, spe: 90},
		items: {5: "Sun Stone", 50: "stardust"}
	},
	whiscash: {
		inherit: true,
		abilities: {0: "Water Bubble", 1: "Anticipation", H: "Hydration"}
	},
	claydol: {
		inherit: true,
		baseStats: {hp: 60, atk: 70, def: 105, spa: 80, spd: 120, spe: 75}
	},
	lileep: {
		inherit: true,
		items: {5: "Big Root", 50: "None"}
	},
	cradily: {
		inherit: true,
		items: {5: "Big Root", 50: "None"}
	},
	milotic: {
		inherit: true,
		baseStats: {hp: 95, atk: 60, def: 84, spa: 100, spd: 125, spe: 86},
		evoType: "useItem",
		evoItem: "Prism Scale",
		items: {5: "Heart Scale", 50: "Heart Scale"}
	},
	castform: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85},
		items: {5: "Mystic Water", 50: "Mystic Water"}
	},
	castformrainy: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	castformsnowy: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	castformsunny: {
		inherit: true,
		baseStats: {hp: 85, atk: 85, def: 85, spa: 85, spd: 85, spe: 85}
	},
	kecleon: {
		inherit: true,
		baseStats: {hp: 85, atk: 100, def: 70, spa: 60, spd: 120, spe: 40},
		items: {5: "Persim Berry", 50: "None"}
	},
	shuppet: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	banette: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	banettemega: {
		inherit: true,
		types: ["Ghost", "Normal"],
		items: {5: "Spell Tag", 50: "None"}
	},
	duskull: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	dusclops: {
		inherit: true,
		items: {5: "Spell Tag", 50: "None"}
	},
	tropius: {
		inherit: true,
		types: ["Grass", "Dragon"],
		baseStats: {hp: 99, atk: 68, def: 83, spa: 92, spd: 87, spe: 81}
	},
	chimecho: {
		inherit: true,
		baseStats: {hp: 90, atk: 50, def: 80, spa: 95, spd: 90, spe: 80},
		items: {5: "Shell Bell", 50: "cleansetag"}
	},
	absolmega: {
		inherit: true,
		types: ["Dark", "Fairy"],
		abilities: {0: "Magic Bounce", 1: "Blademaster", H: "Blademaster"}
	},
	snorunt: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Ice Body", H: "Refrigerate"}
	},
	glalie: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Ice Body", H: "Refrigerate"},
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	glaliemega: {
		inherit: true,
		baseStats: {hp: 80, atk: 135, def: 80, spa: 105, spd: 80, spe: 100},
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	walrein: {
		inherit: true,
		baseStats: {hp: 90, atk: 80, def: 90, spa: 95, spd: 90, spe: 65},
		abilities: {0: "Thick Fat", 1: "Ice Body", H: "Fur Coat"}
	},
	clamperl: {
		inherit: true,
		abilities: {0: "Shell Armor", H: "Hydration"},
		items: {5: "bigpearl", 50: "pearl"}
	},
	huntail: {
		inherit: true,
		types: ["Water", "Dark"],
		abilities: {0: "Intimidate", H: "Defiant"},
		evoType: "useItem",
		evoItem: "Water Stone",
		items: {5: "Deep Sea Tooth", 50: "None"}
	},
	gorebyss: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 55, atk: 84, def: 105, spa: 104, spd: 75, spe: 52},
		abilities: {0: "Dazzling", H: "Regenerator"},
		evoType: "useItem",
		evoItem: "Sun Stone",
		items: {5: "Deep Sea Scale", 50: "Heart Scale"}
	},
	relicanth: {
		inherit: true,
		baseStats: {hp: 100, atk: 105, def: 115, spa: 45, spd: 65, spe: 55}
	},
	luvdisc: {
		inherit: true,
		types: ["Water", "Fairy"],
		baseStats: {hp: 43, atk: 30, def: 55, spa: 100, spd: 65, spe: 97},
		abilities: {0: "Swift Swim", H: "Soul-Heart"},
		items: {5: "Heart Scale", 50: "Heart Scale"}
	},
	bagon: {
		inherit: true,
		items: {5: "Dragon Fang", 50: "None"}
	},
	shelgon: {
		inherit: true,
		items: {5: "Dragon Fang", 50: "None"}
	},
	salamence: {
		inherit: true,
		items: {5: "Dragon Fang", 50: "None"}
	},
	salamencemega: {
		inherit: true,
		baseStats: {hp: 95, atk: 135, def: 130, spa: 120, spd: 90, spe: 120}
	},
	beldum: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	metang: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	metagross: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	metagrossmega: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	regirock: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Solid Rock"}
	},
	regice: {
		inherit: true,
		abilities: {0: "Clear Body", H: "Filter"}
	},
	jirachi: {
		inherit: true,
		items: {5: "Star Piece", 50: "Star Piece"}
	},
	turtwig: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Self Sufficient", H: "Rock Head"}
	},
	grotle: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Self Sufficient", H: "Rock Head"}
	},
	torterra: {
		inherit: true,
		abilities: {0: "Overgrow", 1: "Self Sufficient", H: "Rock Head"}
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
		abilities: {0: "Frisk", H: "Reckless"},
		items: {5: "Yache Berry", 50: "Charti Berry"}
	},
	staravia: {
		inherit: true,
		items: {5: "Yache Berry", 50: "Charti Berry"}
	},
	staraptor: {
		inherit: true,
		items: {5: "Yache Berry", 50: "Charti Berry"}
	},
	bidoof: {
		inherit: true,
		abilities: {0: "Simple", 1: "Unaware"}
	},
	bibarel: {
		inherit: true,
		abilities: {0: "Simple", 1: "Unaware"},
		baseStats: {hp: 79, atk: 85, def: 80, spa: 55, spd: 80, spe: 50},
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	kricketot: {
		inherit: true,
		baseStats: {hp: 37, atk: 40, def: 41, spa: 40, spd: 41, spe: 25},
		abilities: {0: "Technician", H: "Run Away"},
		items: {5: "Silver Powder", 50: "None"}
	},
	kricketune: {
		inherit: true,
		baseStats: {hp: 77, atk: 95, def: 71, spa: 55, spd: 71, spe: 80},
		items: {5: "Silver Powder", 50: "None"}
	},
	luxray: {
		inherit: true,
		types: ["Electric", "Dark"]
	},
	budew: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Poison Touch", H: "Leaf Guard"},
		items: {5: "Poison Barb", 50: "None"}
	},
	roserade: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Poison Touch", H: "Technician"},
		items: {5: "Poison Barb", 50: "None"}
	},
	bastiodon: {
		inherit: true,
		abilities: {0: "Dauntless Shield", H: "Soundproof"}
	},
	wormadam: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 85, spa: 79, spd: 105, spe: 50},
		items: {5: "Silver Powder", 50: "None"}
	},
	wormadamsandy: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 105, spa: 79, spd: 85, spe: 50},
		items: {5: "Silver Powder", 50: "None"}
	},
	wormadamtrash: {
		inherit: true,
		baseStats: {hp: 60, atk: 59, def: 95, spa: 79, spd: 95, spe: 50},
		items: {5: "Silver Powder", 50: "None"}
	},
	mothim: {
		inherit: true,
		baseStats: {hp: 70, atk: 84, def: 50, spa: 94, spd: 50, spe: 80},
		items: {5: "Silver Powder", 50: "None"}
	},
	vespiquen: {
		inherit: true,
		baseStats: {hp: 85, atk: 80, def: 102, spa: 80, spd: 102, spe: 40},
		abilities: {0: "Queenly Majesty", H: "Unnerve"},
		items: {5: "Poison Barb", 50: "None"}
	},
	pachirisu: {
		inherit: true,
		baseStats: {hp: 75, atk: 45, def: 70, spa: 45, spd: 95, spe: 95},
		abilities: {0: "Prankster", 1: "Pickup", H: "Volt Absorb"}
	},
	buizel: {
		inherit: true,
		items: {5: "Wacan Berry", 50: "None"}
	},
	floatzel: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 55, spa: 85, spd: 50, spe: 115},
		abilities: {0: "Water Veil", H: "Technician"},
		items: {5: "Wacan Berry", 50: "None"}
	},
	cherubi: {
		inherit: true,
		items: {5: "Miracle Seed", 50: "Green Shard"}
	},
	cherrim: {
		inherit: true,
		baseStats: {hp: 70, atk: 100, def: 70, spa: 87, spd: 78, spe: 85},
		items: {5: "Miracle Seed", 50: "Green Shard"}
	},
	ambipom: {
		inherit: true,
		items: {5: "Silk Scarf", 50: "None"}
	},
	drifloon: {
		inherit: true,
		items: {5: "Air Balloon", 50: "None"}
	},
	drifblim: {
		inherit: true,
		items: {5: "Air Balloon", 50: "None"}
	},
	buneary: {
		inherit: true,
		items: {5: "Chople Berry", 50: "Pecha Berry"}
	},
	lopunny: {
		inherit: true,
		types: ["Normal", "Fighting"],
		items: {5: "Chople Berry", 50: "Pecha Berry"}
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		baseStats: {hp: 70, atk: 60, def: 70, spa: 105, spd: 105, spe: 105}
	},
	honchkrow: {
		inherit: true,
		baseStats: {hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 96}
	},
	glameow: {
		inherit: true,
		abilities: {0: "Limber", 1: "Own Tempo", H: "Frisk"},
		items: {5: "Cheri Berry", 50: "None"}
	},
	purugly: {
		inherit: true,
		baseStats: {hp: 100, atk: 82, def: 79, spa: 64, spd: 74, spe: 112},
		items: {5: "Cheri Berry", 50: "None"}
	},
	chingling: {
		inherit: true,
		items: {5: "Shell Bell", 50: "cleansetag"}
	},
	stunky: {
		inherit: true,
		abilities: {0: "Stench", 1: "Aftermath", H: "Frisk"},
		items: {5: "Pecha Berry", 50: "None"}
	},
	skuntank: {
		inherit: true,
		baseStats: {hp: 103, atk: 93, def: 67, spa: 91, spd: 61, spe: 84},
		abilities: {0: "Stench", 1: "Aftermath", H: "Frisk"},
		items: {5: "Pecha Berry", 50: "None"}
	},
	bronzor: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	bronzong: {
		inherit: true,
		items: {5: "Metal Coat", 50: "None"}
	},
	bonsly: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Rock Head"}
	},
	mimejr: {
		inherit: true,
		items: {5: "Leppa Berry", 50: "None"}
	},
	happiny: {
		inherit: true,
		items: {5: "luckyegg", 50: "Oval Stone"}
	},
	chatot: {
		inherit: true,
		baseStats: {hp: 76, atk: 65, def: 45, spa: 92, spd: 42, spe: 101},
		abilities: {0: "Tangled Feet", H: "Frisk"}
	},
	spiritomb: {
		inherit: true,
		abilities: {0: "Pressure", H: "Intimidate"},
		items: {5: "Smoke Ball", 50: "Smoke Ball"}
	},
	gible: {
		inherit: true,
		items: {5: "Haban Berry", 50: "None"}
	},
	gabite: {
		inherit: true,
		items: {5: "Haban Berry", 50: "None"}
	},
	garchomp: {
		inherit: true,
		items: {5: "Haban Berry", 50: "None"}
	},
	garchompmega: {
		inherit: true,
		baseStats: {hp: 108, atk: 170, def: 105, spa: 120, spd: 95, spe: 102}
	},
	munchlax: {
		inherit: true,
		items: {5: "Leftovers", 50: "Leftovers"}
	},
	hippowdon: {
		inherit: true,
		items: {5: "Smooth Rock", 50: "None"}
	},
	skorupi: {
		inherit: true,
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Frisk"},
		items: {5: "Poison Barb", 50: "None"}
	},
	drapion: {
		inherit: true,
		baseStats: {hp: 70, atk: 80, def: 110, spa: 60, spd: 75, spe: 95},
		abilities: {0: "Battle Armor", 1: "Sniper", H: "Frisk"},
		items: {5: "Poison Barb", 50: "None"}
	},
	croagunk: {
		inherit: true,
		items: {5: "Black Sludge", 50: "None"}
	},
	toxicroak: {
		inherit: true,
		items: {5: "Black Sludge", 50: "None"}
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
	snover: {
		inherit: true,
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	abomasnow: {
		inherit: true,
		items: {5: "Icy Rock", 50: "None"}
	},
	abomasnowmega: {
		inherit: true,
		baseStats: {hp: 90, atk: 132, def: 105, spa: 132, spd: 105, spe: 60},
		abilities: {0: "Slush Rush"}
	},
	weavile: {
		inherit: true,
		abilities: {0: "Pressure", H: "Infiltrator"},
		evoType: "useItem",
		evoItem: "Dusk Stone"
	},
	magnezone: {
		inherit: true,
		items: {5: "Magnet", 50: "None"}
	},
	lickilicky: {
		inherit: true,
		baseStats: {hp: 110, atk: 95, def: 95, spa: 80, spd: 95, spe: 30},
		abilities: {0: "Own Tempo", 1: "Unaware", H: "Cloud Nine"}
	},
	rhyperior: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	electivire: {
		inherit: true,
		types: ["Electric", "Fighting"],
		baseStats: {hp: 75, atk: 113, def: 67, spa: 105, spd: 85, spe: 95},
		abilities: {0: "Motor Drive", H: "Iron Fist"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	magmortar: {
		inherit: true,
		baseStats: {hp: 75, atk: 80, def: 67, spa: 125, spd: 95, spe: 98},
		abilities: {0: "Flame Body", H: "Mega Launcher"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	yanmega: {
		inherit: true,
		items: {5: "Wide Lens", 50: "None"}
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
	gliscor: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Dusk Stone"
	},
	porygonz: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Dusk Stone"
	},
	gallademega: {
		inherit: true,
		baseStats: {hp: 68, atk: 165, def: 75, spa: 65, spd: 115, spe: 110},
		abilities: {0: "Blademaster", 1: "Blademaster", H: "Inner Focus"}
	},
	probopass: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Magnet Pull", H: "Levitate"},
		baseStats: {hp: 65, atk: 45, def: 145, spa: 80, spd: 150, spe: 40},
		evoType: "useItem",
		evoItem: "Metal Coat",
		items: {5: "Magnet", 50: "None"}
	},
	dusknoir: {
		inherit: true,
		abilities: {0: "Pressure", H: "Hustle"},
		evoType: "useItem",
		evoItem: "Reaper Cloth",
		items: {5: "Spell Tag", 50: "None"}
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
		eggGroups: ["Amorphous"]
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
		eggGroups: ["Amorphous"]
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
		requiredItem: "Adamant Orb",
		gen: 8
	},
	shaymin: {
		inherit: true,
		items: {5: "Lum Berry", 50: "Lum Berry"}
	},
	emboar: {
		inherit: true,
		abilities: {0: "Bull Rush", H: "Reckless"}
	},
	samurott: {
		inherit: true,
		types: ["Water", "Steel"],
		baseStats: {hp: 95, atk: 108, def: 85, spa: 95, spd: 70, spe: 100},
		abilities: {0: "Torrent", H: "Blademaster"}
	},
	patrat: {
		inherit: true,
		abilities: {0: "Run Away", 1: "Frisk", H: "Analytic"}
	},
	watchog: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 74, spa: 60, spd: 74, spe: 77},
		abilities: {0: "Analytic", 1: "Frisk", H: "No Guard"}
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
	pansage: {
		inherit: true,
		items: {5: "Occa Berry", 50: "Oran Berry"}
	},
	simisage: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"},
		items: {5: "Occa Berry", 50: "Oran Berry"}
	},
	pansear: {
		inherit: true,
		items: {5: "Passho Berry", 50: "Oran Berry"}
	},
	simisear: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"},
		items: {5: "Passho Berry", 50: "Oran Berry"}
	},
	panpour: {
		inherit: true,
		items: {5: "Rindo Berry", 50: "Oran Berry"}
	},
	simipour: {
		inherit: true,
		abilities: {0: "Gluttony", H: "Sage Power"},
		items: {5: "Rindo Berry", 50: "Oran Berry"}
	},
	musharna: {
		inherit: true,
		abilities: {0: "Forewarn", 1: "Synchronize", H: "Unaware"}
	},
	pidove: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Super Luck", H: "Rivalry"}
	},
	tranquill: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Super Luck", H: "Rivalry"},
		evoLevel: 16
	},
	unfezant: {
		inherit: true,
		baseStats: {hp: 80, atk: 115, def: 80, spa: 65, spd: 55, spe: 108},
		abilities: {0: "Frisk", 1: "Super Luck", H: "Rivalry"}
	},
	blitzle: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Flare Boost", H: "Sap Sipper"},
		items: {5: "None", 50: "Cheri Berry"}
	},
	zebstrika: {
		inherit: true,
		abilities: {0: "Lightning Rod", 1: "Flare Boost", H: "Sap Sipper"},
		items: {5: "None", 50: "Cheri Berry"}
	},
	boldore: {
		inherit: true,
		items: {5: "Hard Stone", 50: "everstone"}
	},
	gigalith: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "Hard Stone", 50: "everstone"}
	},
	swoobat: {
		inherit: true,
		baseStats: {hp: 75, atk: 57, def: 65, spa: 77, spd: 55, spe: 114}
	},
	audino: {
		inherit: true,
		items: {5: "Sitrus Berry", 50: "Oran Berry"}
	},
	audinomega: {
		inherit: true,
		abilities: {0: "Regenerator"}
	},
	conkeldurr: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	tympole: {
		inherit: true,
		items: {5: "None", 50: "Pecha Berry"}
	},
	palpitoad: {
		inherit: true,
		items: {5: "None", 50: "Pecha Berry"}
	},
	seismitoad: {
		inherit: true,
		items: {5: "None", 50: "Pecha Berry"}
	},
	throh: {
		inherit: true,
		baseStats: {hp: 120, atk: 100, def: 95, spa: 30, spd: 95, spe: 45},
		abilities: {0: "Guts", 1: "Technician", H: "Mold Breaker"},
		items: {5: "Expert Belt", 50: "None"}
	},
	sawk: {
		inherit: true,
		abilities: {0: "Sturdy", 1: "Inner Focus", H: "Contrary"},
		items: {5: "Expert Belt", 50: "None"}
	},
	sewaddle: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
	},
	swadloon: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
	},
	leavanny: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Chlorophyll", H: "Blademaster"},
		items: {5: "Mental Herb", 50: "None"}
	},
	venipede: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Swarm", H: "Speed Boost"},
		items: {5: "Poison Barb", 50: "Pecha Berry"}
	},
	whirlipede: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Swarm", H: "Speed Boost"},
		items: {5: "Poison Barb", 50: "Pecha Berry"}
	},
	scolipede: {
		inherit: true,
		abilities: {0: "Poison Touch", 1: "Swarm", H: "Speed Boost"},
		items: {5: "Poison Barb", 50: "Pecha Berry"}
	},
	cottonee: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	whimsicott: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	petilil: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	lilligant: {
		inherit: true,
		items: {5: "Absorb Bulb", 50: "None"}
	},
	basculin: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 55, spe: 98},
		items: {5: "Deep Sea Tooth", 50: "None"}
	},
	basculinbluestriped: {
		inherit: true,
		baseStats: {hp: 70, atk: 110, def: 65, spa: 80, spd: 55, spe: 98},
		items: {5: "Deep Sea Scale", 50: "None"}
	},
	sandile: {
		inherit: true,
		items: {5: "Black Glasses", 50: "None"}
	},
	krokorok: {
		inherit: true,
		items: {5: "Black Glasses", 50: "None"}
	},
	krookodile: {
		inherit: true,
		items: {5: "None", 50: "Black Glasses"}
	},
	darumaka: {
		inherit: true,
		items: {5: "None", 50: "Rawst Berry"}
	},
	darmanitan: {
		inherit: true,
		items: {5: "None", 50: "Rawst Berry"}
	},
	darmanitangalar: {
		inherit: true,
		baseStats: {hp: 105, atk: 130, def: 55, spa: 30, spd: 55, spe: 95}
	},
	maractus: {
		inherit: true,
		baseStats: {hp: 75, atk: 106, def: 67, spa: 86, spd: 67, spe: 60},
		abilities: {0: "Water Absorb", 1: "Chlorophyll", H: "Grassy Surge"},
		items: {5: "Terrain Extender", 50: "Miracle Seed"}
	},
	dwebble: {
		inherit: true,
		items: {5: "Hard Stone", 50: "None"}
	},
	crustle: {
		inherit: true,
		baseStats: {hp: 70, atk: 105, def: 125, spa: 65, spd: 75, spe: 55},
		items: {5: "Hard Stone", 50: "None"}
	},
	scraggy: {
		inherit: true,
		items: {5: "Shed Shell", 50: "None"}
	},
	scrafty: {
		inherit: true,
		items: {5: "Shed Shell", 50: "None"}
	},
	yamask: {
		inherit: true,
		abilities: {0: "Mummy", H: "Shadow Shield"},
		items: {5: "Spell Tag", 50: "None"}
	},
	yamaskgalar: {
		inherit: true,
		abilities: {0: "Wandering Spirit", H: "Shadow Shield"}
	},
	cofagrigus: {
		inherit: true,
		abilities: {0: "Mummy", H: "Shadow Shield"},
		items: {5: "Spell Tag", 50: "None"}
	},
	trubbish: {
		inherit: true,
		items: {5: "Bottle Cap", 50: "None"}
	},
	garbodor: {
		inherit: true,
		baseStats: {hp: 80, atk: 115, def: 82, spa: 60, spd: 82, spe: 60},
		abilities: {0: "Gooey", 1: "Weak Armor", H: "Aftermath"},
		otherFormes: ["Garbodor-Mega"],
		formeOrder: ["Garbodor", "Garbodor-Mega"],
		items: {5: "Bottle Cap", 50: "Bottle Cap"}
	},
	garbodormega: {
		num: 569,
		name: "Garbodor-Mega",
		baseSpecies: "Garbodor",
		forme: "Mega",
		types: ["Poison"],
		baseStats: {hp: 80, atk: 135, def: 105, spa: 105, spd: 105, spe: 75},
		abilities: {0: "Parasitic Waste"},
		heightm: 21,
		weightkg: 107.3,
		color: "Green",
		eggGroups: ["Mineral"],
		requiredItem: "Garbodorite",
		gen: 8
	},
	minccino: {
		inherit: true,
		items: {5: "Silk Scarf", 50: "Chesto Berry"}
	},
	cinccino: {
		inherit: true,
		items: {5: "Silk Scarf", 50: "Chesto Berry"}
	},
	gothita: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	gothorita: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	gothitelle: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	solosis: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	duosion: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	reuniclus: {
		inherit: true,
		items: {5: "None", 50: "Persim Berry"}
	},
	ducklett: {
		inherit: true,
		abilities: {0: "Frisk", H: "Hydration"}
	},
	swanna: {
		inherit: true,
		baseStats: {hp: 75, atk: 77, def: 63, spa: 97, spd: 63, spe: 108},
		abilities: {0: "Frisk", H: "No Guard"}
	},
	vanillite: {
		inherit: true,
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	vanillish: {
		inherit: true,
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	vanilluxe: {
		inherit: true,
		baseStats: {hp: 71, atk: 90, def: 85, spa: 110, spd: 95, spe: 84},
		items: {5: "None", 50: "Never-Melt Ice"}
	},
	sawsbuck: {
		inherit: true,
		baseStats: {hp: 80, atk: 100, def: 70, spa: 60, spd: 70, spe: 105}
	},
	emolga: {
		inherit: true,
		baseStats: {hp: 55, atk: 55, def: 60, spa: 95, spd: 60, spe: 103},
		items: {5: "Cheri Berry", 50: "Cheri Berry"}
	},
	escavalier: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	foongus: {
		inherit: true,
		items: {5: "Big Mushroom", 50: "Tiny Mushroom"}
	},
	amoonguss: {
		inherit: true,
		items: {5: "Big Mushroom", 50: "Big Mushroom"}
	},
	jellicent: {
		inherit: true,
		baseStats: {hp: 100, atk: 60, def: 80, spa: 75, spd: 105, spe: 60},
		abilities: {0: "Water Absorb", 1: "Cursed Body", H: "Water Bubble"}
	},
	alomomola: {
		inherit: true,
		items: {5: "Heart Scale", 50: "Heart Scale"}
	},
	galvantula: {
		inherit: true,
		evoLevel: 32
	},
	klinklang: {
		inherit: true,
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
		abilities: {0: "Snow Cloak", 1: "Slush Rush", H: "Swift Swim"},
		items: {5: "None", 50: "Aspear Berry"}
	},
	beartic: {
		inherit: true,
		types: ["Ice", "Fighting"],
		baseStats: {hp: 95, atk: 140, def: 80, spa: 70, spd: 80, spe: 50},
		items: {5: "None", 50: "Aspear Berry"}
	},
	cryogonal: {
		inherit: true,
		baseStats: {hp: 80, atk: 50, def: 50, spa: 110, spd: 135, spe: 105},
		items: {5: "Never-Melt Ice", 50: "None"}
	},
	accelgor: {
		inherit: true,
		abilities: {0: "Hydration", 1: "Sheer Force", H: "Unburden"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	stunfisk: {
		inherit: true,
		abilities: {0: "Static", 1: "Water Absorb", H: "Sand Veil"},
		items: {5: "Soft Sand", 50: "None"}
	},
	stunfiskgalar: {
		inherit: true,
		abilities: {0: "Filter"}
	},
	mienshao: {
		inherit: true,
		evoLevel: 40
	},
	druddigon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 90, spa: 60, spd: 90, spe: 41},
		items: {5: "Dragon Fang", 50: "None"}
	},
	golurk: {
		inherit: true,
		baseStats: {hp: 100, atk: 124, def: 90, spa: 55, spd: 90, spe: 55}
	},
	bouffalant: {
		inherit: true,
		baseStats: {hp: 95, atk: 110, def: 95, spa: 40, spd: 95, spe: 65},
		abilities: {0: "Reckless", 1: "Sap Sipper", H: "Bull Rush"}
	},
	rufflet: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sheer Force", H: "Hustle"}
	},
	braviary: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sheer Force", H: "Defiant"},
		evoLevel: 44
	},
	vullaby: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Overcoat", H: "Weak Armor"}
	},
	mandibuzz: {
		inherit: true,
		evoLevel: 45,
		abilities: {0: "Frisk", 1: "Overcoat", H: "Weak Armor"}
	},
	heatmor: {
		inherit: true,
		baseStats: {hp: 85, atk: 90, def: 66, spa: 105, spd: 66, spe: 100},
		abilities: {0: "Gluttony", 1: "Flash Fire", H: "Fatal Precision"},
		items: {5: "Flame Orb", 50: "None"}
	},
	volcarona: {
		inherit: true,
		items: {5: "Silver Powder", 50: "Silver Powder"}
	},
	meloetta: {
		inherit: true,
		items: {5: "Star Piece", 50: "Star Piece"}
	},
	meloettapirouette: {
		inherit: true,
		requiredMove: "",
		battleOnly: ""
	},
	chesnaught: {
		inherit: true,
		abilities: {0: "Bulletproof", H: "Iron Barbs"}
	},
	delphox: {
		inherit: true,
		abilities: {0: "Blaze", H: "Magic Guard"}
	},
	greninja: {
		inherit: true,
		abilities: {0: "Torrent", 1: "Battle Bond", H: "Protean"}
	},
	greninjaash: {
		inherit: true,
		gender: "",
		genderRatio: {M: 0.875, F: 0.125}
	},
	fletchling: {
		inherit: true,
		abilities: {0: "Frisk", H: "Gale Wings"}
	},
	fletchinder: {
		inherit: true,
		abilities: {0: "Frisk", H: "Gale Wings"}
	},
	talonflame: {
		inherit: true,
		baseStats: {hp: 78, atk: 91, def: 71, spa: 74, spd: 69, spe: 126}
	},
	litleo: {
		inherit: true,
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	pyroar: {
		inherit: true,
		abilities: {0: "Rivalry", 1: "Unnerve", H: "Adaptability"},
		items: {5: "Red Shard", 50: "Red Shard"}
	},
	flabebe: {
		inherit: true,
		abilities: {0: "Flower Veil", 1: "Natural Cure", H: "Symbiosis"}
	},
	floette: {
		inherit: true,
		abilities: {0: "Flower Veil", 1: "Natural Cure", H: "Symbiosis"}
	},
	floetteeternal: {
		inherit: true,
		abilities: {0: "Flower Veil", 1: "Natural Cure", H: "Symbiosis"}
	},
	florges: {
		inherit: true,
		abilities: {0: "Flower Veil", 1: "Natural Cure", H: "Symbiosis"}
	},
	gogoat: {
		inherit: true,
		baseStats: {hp: 123, atk: 100, def: 72, spa: 67, spd: 87, spe: 74}
	},
	pancham: {
		inherit: true,
		items: {5: "Mental Herb", 50: "None"}
	},
	pangoro: {
		inherit: true,
		abilities: {0: "Iron Fist", 1: "Mold Breaker", H: "Quick Feet"},
		items: {5: "Mental Herb", 50: "None"}
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
		baseStats: {hp: 74, atk: 48, def: 76, spa: 55, spd: 81, spe: 104},
		abilities: {0: "Prankster", 1: "Infiltrator", H: "Feline Power"}
	},
	meowsticf: {
		inherit: true,
		baseStats: {hp: 74, atk: 48, def: 76, spa: 55, spd: 81, spe: 104},
		abilities: {0: "Competitive", 1: "Infiltrator", H: "Feline Power"}
	},
	honedge: {
		inherit: true,
		abilities: {0: "Blademaster"}
	},
	doublade: {
		inherit: true,
		abilities: {0: "Blademaster"}
	},
	aromatisse: {
		inherit: true,
		baseStats: {hp: 101, atk: 62, def: 82, spa: 99, spd: 89, spe: 29},
		abilities: {0: "Fairy Aura", H: "Aroma Veil"},
		evoType: "useItem",
		evoItem: "Shiny Stone"
	},
	slurpuff: {
		inherit: true,
		baseStats: {hp: 82, atk: 90, def: 86, spa: 75, spd: 75, spe: 72},
		evoType: "useItem",
		evoItem: "Shiny Stone"
	},
	binacle: {
		inherit: true,
		abilities: {0: "Tough Claws", 1: "Sniper", H: "Infiltrator"}
	},
	barbaracle: {
		inherit: true,
		abilities: {0: "Tough Claws", 1: "Sniper", H: "Infiltrator"}
	},
	skrelp: {
		inherit: true,
		abilities: {0: "Poison Touch", H: "Adaptability"}
	},
	dragalge: {
		inherit: true,
		abilities: {0: "Poison Touch", H: "Adaptability"}
	},
	clawitzer: {
		inherit: true,
		baseStats: {hp: 71, atk: 73, def: 88, spa: 120, spd: 89, spe: 72}
	},
	helioptile: {
		inherit: true,
		items: {5: "None", 50: "Yellow Shard"}
	},
	heliolisk: {
		inherit: true,
		items: {5: "None", 50: "Yellow Shard"}
	},
	dedenne: {
		inherit: true,
		baseStats: {hp: 67, atk: 58, def: 57, spa: 91, spd: 67, spe: 101},
		abilities: {0: "Cheek Pouch", 1: "Pickup", H: "Electric Surge"},
		items: {5: "Terrain Extender", 50: "None"}
	},
	goomy: {
		inherit: true,
		items: {5: "Shed Shell", 50: "None"}
	},
	sliggoo: {
		inherit: true,
		items: {5: "Shed Shell", 50: "None"}
	},
	trevenant: {
		inherit: true,
		baseStats: {hp: 85, atk: 120, def: 82, spa: 65, spd: 82, spe: 56},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	pumpkaboo: {
		inherit: true,
		baseStats: {hp: 49, atk: 44, def: 70, spa: 66, spd: 55, spe: 51}
	},
	pumpkaboolarge: {
		inherit: true,
		baseStats: {hp: 54, atk: 44, def: 70, spa: 66, spd: 55, spe: 46}
	},
	pumpkaboosmall: {
		inherit: true,
		baseStats: {hp: 44, atk: 44, def: 70, spa: 66, spd: 55, spe: 56}
	},
	pumpkaboosuper: {
		inherit: true,
		baseStats: {hp: 59, atk: 44, def: 70, spa: 66, spd: 55, spe: 41},
		items: {5: "Miracle Seed", 50: "Miracle Seed"}
	},
	gourgeist: {
		inherit: true,
		baseStats: {hp: 65, atk: 58, def: 122, spa: 90, spd: 75, spe: 84},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	gourgeistlarge: {
		inherit: true,
		baseStats: {hp: 75, atk: 58, def: 122, spa: 95, spd: 75, spe: 69},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	gourgeistsmall: {
		inherit: true,
		baseStats: {hp: 55, atk: 58, def: 122, spa: 85, spd: 75, spe: 99},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"},
		evoType: "useItem",
		evoItem: "Link Cable"
	},
	gourgeistsuper: {
		inherit: true,
		baseStats: {hp: 85, atk: 58, def: 122, spa: 100, spd: 75, spe: 54},
		abilities: {0: "Pickup", 1: "Frisk", H: "Flare Boost"},
		evoType: "useItem",
		evoItem: "Link Cable",
		items: {5: "Miracle Seed", 50: "Miracle Seed"}
	},
	avalugg: {
		inherit: true,
		abilities: {0: "Filter", 1: "Ice Body", H: "Sturdy"}
	},
	noibat: {
		inherit: true,
		items: {5: "Dragon Fang", 50: "None"}
	},
	noivern: {
		inherit: true,
		baseStats: {hp: 85, atk: 70, def: 80, spa: 102, spd: 80, spe: 123},
		items: {5: "None", 50: "Dragon Fang"}
	},
	zygarde: {
		inherit: true,
		abilities: {0: "Aura Break", H: "Power Construct"}
	},
	zygarde10: {
		inherit: true,
		abilities: {0: "Aura Break", H: "Power Construct"}
	},
	decidueye: {
		inherit: true,
		baseStats: {hp: 78, atk: 107, def: 75, spa: 95, spd: 85, spe: 100},
		abilities: {0: "Overgrow", H: "Tinted Lens"}
	},
	pikipek: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Skill Link", H: "Pickup"},
		items: {5: "Oran Berry", 50: "None"}
	},
	trumbeak: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Skill Link", H: "Pickup"},
		items: {5: "Sitrus Berry", 50: "None"}
	},
	toucannon: {
		inherit: true,
		baseStats: {hp: 90, atk: 120, def: 75, spa: 75, spd: 75, spe: 60},
		abilities: {0: "Frisk", 1: "Skill Link", H: "Sheer Force"},
		items: {5: "Rawst Berry", 50: "None"}
	},
	yungoos: {
		inherit: true,
		items: {5: "Pecha Berry", 50: "None"}
	},
	gumshoos: {
		inherit: true,
		baseStats: {hp: 98, atk: 110, def: 60, spa: 55, spd: 60, spe: 45},
		evoLevel: 16,
		items: {5: "Pecha Berry", 50: "None"}
	},
	crabrawler: {
		inherit: true,
		items: {5: "Aspear Berry", 50: "None"}
	},
	crabominable: {
		inherit: true,
		evoType: null,
		evoLevel: 30,
		evoCondition: "",
		items: {5: "Cheri Berry", 50: "None"}
	},
	oricorio: {
		inherit: true,
		items: {5: "Pink Nectar", 50: "Yellow Nectar"}
	},
	oricoriopau: {
		inherit: true,
		items: {5: "Yellow Nectar", 50: "Purple Nectar"}
	},
	oricoriopompom: {
		inherit: true,
		items: {5: "Purple Nectar", 50: "Red Nectar"}
	},
	oricoriosensu: {
		inherit: true,
		items: {5: "Red Nectar", 50: "Pink Nectar"}
	},
	rockruff: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Vital Spirit", H: "Steadfast"}
	},
	lycanroc: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Sand Rush", H: "Steadfast"}
	},
	lycanrocdusk: {
		inherit: true,
		evoCondition: "between 5:00 - 7:59 PM"
	},
	lycanrocmidnight: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Vital Spirit", H: "No Guard"}
	},
	mareanie: {
		inherit: true,
		items: {5: "Poison Barb", 50: "None"}
	},
	toxapex: {
		inherit: true,
		items: {5: "Poison Barb", 50: "None"}
	},
	dewpider: {
		inherit: true,
		items: {5: "Mystic Water", 50: "None"}
	},
	araquanid: {
		inherit: true,
		items: {5: "Mystic Water", 50: "None"}
	},
	fomantis: {
		inherit: true,
		items: {5: "Miracle Seed", 50: "None"}
	},
	lurantis: {
		inherit: true,
		types: ["Grass", "Fighting"],
		baseStats: {hp: 70, atk: 105, def: 90, spa: 80, spd: 90, spe: 55},
		items: {5: "Miracle Seed", 50: "None"}
	},
	morelull: {
		inherit: true,
		items: {5: "Big Mushroom", 50: "Tiny Mushroom"}
	},
	shiinotic: {
		inherit: true,
		items: {5: "Tiny Mushroom", 50: "Big Mushroom"}
	},
	salandit: {
		inherit: true,
		items: {5: "Smoke Ball", 50: "None"}
	},
	salazzle: {
		inherit: true,
		items: {5: "Smoke Ball", 50: "None"}
	},
	steenee: {
		inherit: true,
		items: {5: "Grassy Seed", 50: "None"}
	},
	tsareena: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Queenly Majesty", H: "Striker"},
		items: {5: "None", 50: "Grassy Seed"}
	},
	comfey: {
		inherit: true,
		items: {5: "Misty Seed", 50: "None"}
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
	sandygast: {
		inherit: true,
		items: {5: "Bottle Cap", 50: "None"}
	},
	palossand: {
		inherit: true,
		items: {5: "Bottle Cap", 50: "Bottle Cap"}
	},
	silvally: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"}
	},
	silvallybug: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallydark: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallydragon: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyelectric: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyfairy: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyfighting: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyfire: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyflying: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyghost: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallygrass: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyground: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyice: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallypoison: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallypsychic: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallyrock: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallysteel: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	silvallywater: {
		inherit: true,
		baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
		abilities: {0: "Battle Armor"},
		requiredItem: ""
	},
	minior: {
		inherit: true,
		items: {5: "Star Piece", 50: "None"}
	},
	komala: {
		inherit: true,
		baseStats: {hp: 75, atk: 115, def: 65, spa: 75, spd: 95, spe: 65}
	},
	turtonator: {
		inherit: true,
		baseStats: {hp: 70, atk: 58, def: 135, spa: 91, spd: 85, spe: 36},
		abilities: {0: "Dauntless Shield"},
		items: {5: "Charcoal", 50: "None"}
	},
	togedemaru: {
		inherit: true,
		baseStats: {hp: 65, atk: 108, def: 63, spa: 40, spd: 73, spe: 96},
		abilities: {0: "Iron Barbs", 1: "Motor Drive", H: "Sturdy"},
		items: {5: "Electric Seed", 50: "None"}
	},
	mimikyu: {
		inherit: true,
		items: {5: "Chesto Berry", 50: "None"}
	},
	drampa: {
		inherit: true,
		baseStats: {hp: 103, atk: 50, def: 85, spa: 135, spd: 91, spe: 36},
		abilities: {0: "Berserk", 1: "Sap Sipper", H: "Fatal Precision"},
		items: {5: "Persim Berry", 50: "None"}
	},
	xurkitree: {
		inherit: true,
		baseStats: {hp: 83, atk: 74, def: 71, spa: 173, spd: 71, spe: 98}
	},
	guzzlord: {
		inherit: true,
		baseStats: {hp: 203, atk: 101, def: 73, spa: 97, spd: 73, spe: 23},
		abilities: {0: "Beast Boost", 1: "Dark Aura"}
	},
	meltan: {
		inherit: true,
		evos: ["Melmetal"]
	},
	melmetal: {
		inherit: true,
		abilities: {0: "Clear Body"},
		prevo: "Meltan",
		evoType: "useItem",
		evoItem: "Metal Coat"
	},
	melmetalgmax: {
		inherit: true,
		abilities: {0: "Clear Body"},
	},
	cinderace: {
		inherit: true,
		baseStats: {hp: 80, atk: 111, def: 75, spa: 65, spd: 75, spe: 119}
	},
	cinderacegmax: {
		inherit: true,
		baseStats: {hp: 80, atk: 111, def: 75, spa: 65, spd: 75, spe: 119}
	},
	skwovet: {
		inherit: true,
		items: {5: "Oran Berry", 50: "None"}
	},
	greedent: {
		inherit: true,
		items: {5: "Sitrus Berry", 50: "None"}
	},
	rookidee: {
		inherit: true,
		abilities: {0: "Unnerve", H: "Frisk"}
	},
	corvisquire: {
		inherit: true,
		abilities: {0: "Unnerve", H: "Frisk"}
	},
	corviknight: {
		inherit: true,
		evoLevel: 60
	},
	dottler: {
		inherit: true,
		items: {5: "Psychic Seed", 50: "None"}
	},
	orbeetle: {
		inherit: true,
		otherFormes: ["Orbeetle-Mega"],
		formeOrder: ["Orbeetle", "Orbeetle-Mega"],
		items: {5: "Psychic Seed", 50: "None"}
	},
	orbeetlemega: {
		num: 826,
		name: "Orbeetle-Mega",
		baseSpecies: "Orbeetle",
		forme: "Mega",
		types: ["Bug", "Psychic"],
		baseStats: {hp: 60, atk: 45, def: 120, spa: 135, spd: 130, spe: 100},
		abilities: {0: "Magic Guard"},
		heightm: 0.4,
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
		heightm: 1,
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
		heightm: 2.8,
		weightkg: 310.5,
		color: "Black",
		eggGroups: ["Mineral"],
		requiredItem: "Coalossite"
	},
	flapple: {
		inherit: true,
		evoItem: "Leaf Stone",
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
		abilities: {0: "Dragon's Maw"},
		heightm: 0.3,
		weightkg: 1,
		color: "Green",
		eggGroups: ["Grass", "Dragon"],
		requiredItem: "Flapplite"
	},
	appletun: {
		inherit: true,
		evoItem: "Sun Stone",
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
		heightm: 0.4,
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
		heightm: 3.8,
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
	toxtricitylowkeymega: {
		num: 849,
		name: "Toxtricity-Low-Key-Mega",
		baseSpecies: "Toxtricity-Low-Key",
		forme: "Low-Key-Mega",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 80, spa: 155, spd: 80, spe: 111},
		abilities: {0: "Punk Rock"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		isMega: true,
		requiredItem: "Toxtricitite",
	},
	toxtricitymega: {
		num: 849,
		name: "Toxtricity-Mega",
		baseSpecies: "Toxtricity",
		forme: "Mega",
		types: ["Electric", "Poison"],
		baseStats: {hp: 75, atk: 120, def: 80, spa: 155, spd: 80, spe: 111},
		abilities: {0: "Punk Rock"},
		heightm: 1.6,
		weightkg: 40,
		color: "Purple",
		eggGroups: ["Human-Like"],
		requiredItem: "Toxtricitite"
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
		heightm: 3,
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
	polteageist: {
		inherit: true,
		evoItem: "Moon Stone"
	},
	polteageistantique: {
		inherit: true,
		evoItem: "Moon Stone"
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
	grimmsnarlgmax: {
		inherit: true,
		abilities: {0: "Prankster", 1: "Frisk", H: "Infiltrator"}
	},
	perrserker: {
		inherit: true,
		baseStats: {hp: 90, atk: 110, def: 100, spa: 30, spd: 60, spe: 50}
	},
	cursola: {
		inherit: true,
		baseStats: {hp: 80, atk: 75, def: 50, spa: 145, spd: 130, spe: 55},
		abilities: {0: "Weak Armor", 1: "Unburden", H: "Perish Body"}
	},
	sirfetchd: {
		inherit: true,
		baseStats: {hp: 82, atk: 135, def: 95, spa: 68, spd: 82, spe: 65},
		abilities: {0: "Blademaster", H: "Scrappy"},
		evoType: "levelFriendship",
		evoCondition: ""
	},
	mrrime: {
		inherit: true,
		baseStats: {hp: 80, atk: 65, def: 75, spa: 110, spd: 90, spe: 100}
	},
	runerigus: {
		inherit: true,
		abilities: {0: "Wandering Spirit", H: "Shadow Shield"},
		evoType: null,
		evoLevel: 35,
		evoCondition: ""
	},
	alcremie: {
		inherit: true,
		baseForme: "Vanilla-Cream",
		evoType: "useItem",
		evoItem: "Shiny Stone",
		evoCondition: "",
		otherFormes: ["Alcremie-Mega"],
		formeOrder: ["Alcremie", "Alcremie-Mega", "Alcremie-Ruby-Cream", "Alcremie-Matcha-Cream", "Alcremie-Mint-Cream", "Alcremie-Lemon-Cream", "Alcremie-Salted-Cream", "Alcremie-Ruby-Swirl", "Alcremie-Caramel-Swirl", "Alcremie-Rainbow-Swirl"],
		items: {5: "None", 50: "Alcremite"}
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
		heightm: 0.3,
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
		types: ["Electric", "Water"],
		baseStats: {hp: 68, atk: 81, def: 95, spa: 91, spd: 85, spe: 15},
		items: {5: "Terrain Extender", 50: "None"}
	},
	frosmoth: {
		inherit: true,
		baseStats: {hp: 70, atk: 65, def: 65, spa: 125, spd: 90, spe: 65},
		evoType: "useItem",
		evoItem: "Ice Stone",
		evoCondition: ""
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
	indeedee: {
		inherit: true,
		items: {5: "Terrain Extender", 50: "None"}
	},
	indeedeef: {
		inherit: true,
		items: {5: "Terrain Extender", 50: "None"}
	},
	morpeko: {
		inherit: true,
		baseStats: {hp: 58, atk: 110, def: 58, spa: 70, spd: 58, spe: 97}
	},
	cufant: {
		inherit: true,
		abilities: {0: "Heavy Metal"},
		items: {5: "Iron Ball", 50: "None"}
	},
	copperajah: {
		inherit: true,
		baseStats: {hp: 122, atk: 130, def: 79, spa: 80, spd: 79, spe: 30},
		abilities: {0: "Heavy Metal"},
		otherFormes: ["Copperajah-Mega"],
		formeOrder: ["Copperajah", "Copperajah-Mega"],
		items: {5: "Iron Ball", 50: "None"}
	},
	copperajahgmax: {
		inherit: true,
		baseStats: {hp: 122, atk: 130, def: 79, spa: 80, spd: 79, spe: 30},
		abilities: {0: "Heavy Metal"}
	},
	copperajahmega: {
		num: 879,
		name: "Copperajah-Mega",
		baseSpecies: "Copperajah",
		forme: "Mega",
		types: ["Steel", "Fighting"],
		baseStats: {hp: 122, atk: 155, def: 94, spa: 100, spd: 94, spe: 20},
		abilities: {0: "Sheer Force"},
		heightm: 3,
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
		baseStats: {hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75}
	},
	arctovish: {
		inherit: true,
		baseStats: {hp: 90, atk: 90, def: 100, spa: 55, spd: 90, spe: 80}
	},
	duraludon: {
		inherit: true,
		baseStats: {hp: 85, atk: 95, def: 115, spa: 120, spd: 50, spe: 85},
		abilities: {0: "Light Metal", 1: "Heavy Metal", H: "Clear Body"},
		otherFormes: ["Duraludon-Mega"],
		formeOrder: ["Duraludon", "Duraludon-Mega"]
	},
	duraludongmax: {
		inherit: true,
		baseStats: {hp: 85, atk: 95, def: 115, spa: 120, spd: 50, spe: 85},
		abilities: {0: "Light Metal", 1: "Heavy Metal", H: "Clear Body"}
	},
	duraludonmega: {
		num: 884,
		name: "Duraludon-Mega",
		baseSpecies: "Duraludon",
		forme: "Mega",
		types: ["Steel", "Dragon"],
		baseStats: {hp: 85, atk: 95, def: 140, spa: 140, spd: 90, spe: 95},
		abilities: {0: "Bad Company"},
		heightm: 1.8,
		weightkg: 40,
		color: "White",
		eggGroups: ["Mineral", "Dragon"],
		requiredItem: "Duraludonite"
	},
	eternatuseternamax: {
		num: 890,
		name: "Eternatus-Eternamax",
		baseSpecies: "Eternatus",
		forme: "Eternamax",
		types: ["Poison", "Dragon"],
		gender: "N",
		baseStats: {hp: 255, atk: 115, def: 250, spa: 125, spd: 250, spe: 130},
		abilities: {0: "Levitate"},
		heightm: 20,
		weightkg: 950,
		color: "Purple",
		eggGroups: ["Undiscovered"],
		isPrimal: true,
		requiredItem: "Eternamax Orb",
	},
	urshifu: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Dusk Stone",
		evoCondition: ""
	},
	urshifurapidstrike: {
		inherit: true,
		evoType: "useItem",
		evoItem: "Water Stone",
		evoCondition: ""
	},
	zarude: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Defiant"}
	},
	zarudedada: {
		inherit: true,
		abilities: {0: "Leaf Guard", 1: "Defiant"}
	}
};