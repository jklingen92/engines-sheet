const constants = {
  specs: [  
    "power",
    "handling",
    "stability",
    "intricacy",
    "efficiency",
    "resonance",
  ],
  parameters: {
    proficiency: 2,
    hardness: 0,
    natural_frequency: 10,
  },
  skills: {
    athletics: "power",
    destruction: "power",
    resistance: "power",
    acrobatics: "handling",
    sleight_of_hand: "handling",
    stealth: "handling",
    fashion: "intricacy",
    magnitude: "intricacy",
    precision: "intricacy",
    transmutation: "intricacy",
    craft: "efficiency",
    investigation: "efficiency",
    lore: "efficiency",
    mending: "efficiency",
    nature: "efficiency",
    perception: "efficiency",
    deception: "resonance",
    insight: "resonance",
    intention: "resonance",
    intimidation: "resonance",
    performance: "resonance",
    persuasion: "resonance",
  },
  blindSkills: [
    "investigation",
    "lore",
    "nature",
    "perception",
    "deception",
    "insight",
    "intention",
    "intimidation",
    "persuasion",
  ],
  hit_tiers: [
    "exploit",
    "miss",
    "dodge",
    "glance",
    "block",
    "strike",
    "crit",
    "double"
  ],
  sizes: {
    tiny: 16,
    small: 13,
    medium: 10,
    large: 7,
    huge: 4,
    gargantuan: 1,
  },
  initial: {
    hardness: 0,
    level: 1,
    size: "medium",
    natural_frequency: 10,
    hp: 0,
    hp_max: 0,
    speed: 12,
    energy: 0
  },
  hit_tier_descriptions: {
    "exploit": {
      "calculation": "-",
      "description": "The attack is executed poorly enough that the defending engine has an opportunity to counterattack in some way. For a melee attack, this can be an attack of opportunity. For a ranged attack, this can be a deflection or interception.",
      "damage": "0 Phys, 0 Elem, No contact (from primary attack)"
    },
    "miss": {
      "calculation": "1 + HAN",
      "description": "The attack misses without any action on the defending engines part.",
      "damage": "0 Phys, 0 Elem, No contact"
    },
    "dodge": {
      "calculation": "Based on size",
      "description": "The attack forces the defending engine to dodge.",
      "damage": "0 Phys, 0 Elem, No contact"
    },
    "glance": {
      "calculation": "Dodge + HAND",
      "description": "The attack glances off of the defending engines body.",
      "damage": "0 Phys, 0D + [mod] Elem, Contact (defenders choice)"
    },
    "block": {
      "calculation": "Glance + HARD",
      "description": "The attack forces the defending engine to block.",
      "damage": "0D + [mod] Phys, xD + [mod] Elem, Contact (defenders choice)"
    },
    "strike": {
      "calculation": "Block + POW",
      "description": "The attack strikes the defending engine.",
      "damage": "xD + [mod] Phys, xD + [mod] Elem, Contact (attackers choice)"
    },
    "crit": {
      "calculation": "Strike + ^",
      "description": "The attack strikes the defending engine.",
      "damage": "2xD + [mod] Phys, xD + [mod] Elem, Contact (attackers choice)"
    },
    "double": {
      "calculation": "Strike + 2^",
      "description": "The attack strikes the defending engine.",
      "damage": "3xD + [mod] Phys, xD + [mod] Elem, Contact (attackers choice)"
    },
  }
}

//Dynamic constant generation
constants.specs.forEach(spec => {
  constants.initial[spec] = 10
}) 

export { constants }
