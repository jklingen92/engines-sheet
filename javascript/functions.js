// Sheetworker functions
const functions = {}

functions["initialize"] = values => {
  setAttrs({
    ...constants.initial,
    initialized: "true"
  })
}

functions["convert_to_number"] = values => {
  const input = Object.values(values)[0] || 0
  return parseInt()
}

functions["calc_proficiency"] = values => {
  return Math.floor((values["level"] - 1) / 4) + 2
}

// Spec functions
functions["calc_spec_mod"] = values => {
  return Math.floor((Object.values(values)[0] - 10) / 2)
}
functions['calc_spec_save_mod'] = values => {
  // Find the save attr
  let spec, save;
  // Determine the spec
  Object.keys(values).forEach(key => {
    if (key.slice(-5) === "_save") {
      spec = key.slice(0, key.length - 5)
      save = values[key]
    }
  })
  if (save === "0") {
    return values[`${spec}_mod`]
  }
  return values[`${spec}_mod`] + values.proficiency
}

// Skill functions 
Object.keys(constants.skills).forEach(skill => {
  functions[`calc_${skill}_mod`] = values => {
    if (values[`${skill}`] === "0") {
      return values[`${constants.skills[skill]}_mod`]
    }
    return values[`${constants.skills[skill]}_mod`] + values['proficiency']
  }
})

functions["calc_speed"] = values => {
  let speed_mod = 0
  if (values.size === "tiny") {
    speed_mod = -4
  } else if (values.size === "small") {
    speed_mod = -2
  } else if (values.size === "large") {
    speed_mod = 2
  } else if (values.size === "huge") {
    speed_mod = 4
  } else if (values.size === "gargantuan") {
    speed_mod = 6
  }
  return values.power + values.proficiency + speed_mod
}

functions["calc_init"] = values => {
  return values.handling_mod + values.proficiency
}

// Hit Tier functions
functions["calc_miss_tier"] = values => {
  return values.handling_mod + 1
}

functions["calc_dodge_tier"] = values => {
  return Math.max(constants.sizes[values.size], values.miss_tier)
}

functions["calc_glance_tier"] = values => {
  if (values.handling_mod <= 0){
    return values.dodge_tier
  }
  return values.dodge_tier + values.handling_mod
}

functions["calc_block_tier"] = values => {
  return values.glance_tier + values.hardness
}

functions["calc_strike_tier"] = values => {
  if (values.power_mod <=0) {
    return values.block_tier
  }
  return values.block_tier + values.power_mod
}

functions["long_rest"] = values => {
  setAttrs({
    hp: values.hp_max,
    energy: 0
  })
}

