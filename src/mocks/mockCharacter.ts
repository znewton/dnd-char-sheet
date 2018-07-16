import { Character } from 'lib/Character';

export const MockCharacter: Character = {
  // basic info
  name: 'Shoumei Dewei',
  classAndLevel: 'Fighter 1',
  race: 'Wood Elf',
  playerName: 'Zach Newton',
  background: 'Folk Hero',
  alignment: 'Chaotic Good',
  xp: 0,
  // ability scores
  abilityScores: {
    strength: 12,
    dexterity: 18 + 2, // +2 for elf
    constitution: 13,
    intelligence: 9,
    wisdom: 11 + 1, // +1 for wood elf
    charisma: 14,
  },
  perception: 0,
  inspiration: 0,
  // proficiencies
  proficiencyBonus: 2,
  skillProficiencies: ['acrobatics', 'athletics', 'animalHandling', 'survival'],
  savingThrowProficiencies: ['strength', 'constitution'],
  armorAndWeaponProficiencies: [
    'All Armor',
    'Shields',
    'Simple and Martial Weapons',
    'longsword, shortsword, shortbow, longbow',
  ],
  toolProficiencies: ['one type of artisan tools', 'vehicles (land)'],
  languages: ['common', 'elvish'],
  // combat
  armorClass: 11 + Math.floor((20 - 10) / 2),
  initiative: 0,
  speed: 35,
  hpMax: 10 + Math.floor((13 - 10) / 2),
  currentHp: this.hpMax,
  tempHp: 0,
  hitDie: '1d10',
  totalHitDie: '1d10',
  // inventory
  inventory: [
    { quantity: 1, name: 'leather armor', armorClass: '11 + Dex modifier', weight: '10 lb' },
    {
      quantity: 1,
      name: 'longbow',
      damage: '1d8 piercing',
      weight: '18 lb',
      properties: 'Amunition (range 150/600), heavy, two-handed',
    },
    { quantity: 20, name: 'arrows' },
    {
      quantity: 1,
      name: 'warhammer',
      damage: '1d8 bludgeoning',
      weight: '2 lb',
      properties: 'Versatile (1d10)',
    },
    {
      quantity: 1,
      name: '10" Cast Iron Skillet',
      damage: '1d4 bludgeoning',
      weight: '2 lb',
      properties: 'Light',
      notes: 'Reskin of a club',
    },
    {
      quantity: 2,
      name: 'handaxe',
      damage: '1d6 slashing',
      weight: '2 lb',
      properties: 'Light, thrown (range 20/60)',
    },
    { quantity: 1, name: 'brewers supplies', weight: '9 lb' },
    // explorer's pack
    { quantity: 1, name: 'backpack' },
    { quantity: 1, name: 'bedroll' },
    { quantity: 1, name: 'mess kit' },
    { quantity: 1, name: 'tinderbox' },
    { quantity: 10, name: 'torch' },
    { quantity: 10, name: 'day of rations' },
    { quantity: 1, name: 'waterskin' },
    { quantity: 1, name: '50ft hemp rope' },
    // trinket
    {
      quantity: 1,
      name: 'blank book',
      notes: 'pages refuse to hold ink, chalk, graphite, or any other substance or marking',
    },
  ],
  funds: {
    cp: 0,
    sp: 0,
    ep: 0,
    gp: 150,
    pp: 0,
  },
  // features & traits
  features: ['Fighting Style: Two-weapon Fighting', 'Second Wind', 'Rustic Hospitality'],
  traits: [
    'Darkvision',
    'Keen Senses (proficiency in perception)',
    'Fey Ancestry (advantage saving )',
    'Elf Weapon Training',
    'Fleet of Foot',
    'Mask of the Wild (can attempt to hide when lightly covered by natural phenomena)',
  ],
  personalityTraits: [
    'When I set my mind to something, I follow through no matter what gets in my way.',
  ],
  ideals: ['People deserve to be treated with dignity and respect.'],
  bonds: ['I worked the land, I love the land, and I will protect the land.'],
  flaws: [
    'I have a weakness for the vices of the city, especially hard drink',
    'Almost always drunk, overly confident but not very intimidating (roll 1d4, subtract from Dexterity rolls, add to Charisma rolls)',
    'Other elves see me as a worthless, human-loving drunk. Cannot go home out of shame',
  ],
  // physical appearance
  age: 150,
  height: '5\'11"',
  weight: '200 lb',
  eyes: 'violet/blue',
  skin: 'tan',
  hair: 'brown, man bun',
  // story
  backstory: `
Defining Event: I stood alone against a terrible monster.
  `,
  alliesAndOrganizations: 'none',
  treasure: 'none',
  characterAppearance: {
    url: '',
    description: `
Attire:
 - Tattered but clean rags for tunic and pants
 - Leather armor that is burnt, scratched and worn to the point of looking like slightly thicker cloth.
 - Large sling bag slung from right shoulder to left hip
 - Man bun tied up with a weave of prairie grass
Visible Accessories:
 - 1 handaxe holstered on each side. Each ornately carved
 - Warhammer sheathed on right hip
 - Growler shaped steel flask typically hanging from left hand
 - Longbow, arrow quiver, and hemp rope all slung from left shoulder to right hip
`,
  },
  // magic
  spellsKnown: [],
  spellSlots: {
    1: { total: 0, expended: 0 },
    2: { total: 0, expended: 0 },
    3: { total: 0, expended: 0 },
    4: { total: 0, expended: 0 },
    5: { total: 0, expended: 0 },
    6: { total: 0, expended: 0 },
    7: { total: 0, expended: 0 },
    8: { total: 0, expended: 0 },
    9: { total: 0, expended: 0 },
  },
};
