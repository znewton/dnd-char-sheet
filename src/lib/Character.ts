type Abilities = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

interface InventoryItem {
  quantity: number;
  name: string;
  weight?: string;
  notes?: string;
}

interface Armor extends InventoryItem {
  armorClass: string;
  strength?: string;
  stealth?: string;
}

interface Weapon extends InventoryItem {
  damage: string;
  properties?: string;
}

type Spell = {
  level: number;
  name: string;
  prepared: boolean;
};

type SpellSlots = {
  total: number;
  expended: number;
};

export type Character = {
  // basic info
  name: string;
  classAndLevel: string;
  race: string;
  playerName: string;
  background: string;
  alignment: string;
  xp: number;
  // ability scores
  abilityScores: Abilities;
  perception: number;
  inspiration: number;
  // proficiencies
  proficiencyBonus: number;
  skillProficiencies: Array<string>;
  savingThrowProficiencies: Array<string>;
  armorAndWeaponProficiencies: Array<string>;
  toolProficiencies: Array<string>;
  languages: Array<string>;
  // combat
  armorClass: number;
  initiative: number;
  speed: number;
  hpMax: number;
  currentHp: number;
  tempHp: number;
  hitDie: string;
  totalHitDie: string;
  // inventory
  inventory: Array<string | InventoryItem | Armor | Weapon>;
  funds: {
    cp: number;
    sp: number;
    ep: number;
    gp: number;
    pp: number;
  };
  // features & traits
  features: Array<string>;
  traits: Array<string>;
  personalityTraits: Array<string>;
  ideals: Array<string>;
  bonds: Array<string>;
  flaws: Array<string>;
  // physical appearance
  age: number;
  height: string;
  weight: string;
  eyes: string;
  skin: string;
  hair: string;
  // story
  backstory: string;
  alliesAndOrganizations: string;
  treasure: string;
  characterAppearance: {
    url: string;
    description: string;
  };
  // magic
  spellsKnown: Array<Spell>;
  spellSlots: {
    1: SpellSlots;
    2: SpellSlots;
    3: SpellSlots;
    4: SpellSlots;
    5: SpellSlots;
    6: SpellSlots;
    7: SpellSlots;
    8: SpellSlots;
    9: SpellSlots;
  };
};
