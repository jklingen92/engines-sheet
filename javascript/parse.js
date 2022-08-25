// Parse defines parsing rules for all attrs

const integerAttrs = [
  "proficiency",
  "level",
  "hardness",
  ...constants.specs,
  ...constants.specs.map(spec => `${spec}_mod`),
  ...constants.specs.map(spec => `${spec}_save_mod`),
  ...Object.keys(constants.skills).map(skill => `${skill}_mod`),
  ...constants.hit_tiers.map(hit => `${hit}_tier`),
]

const parsers = {}

integerAttrs.forEach(attr => {
  if (!parsers.hasOwnProperty(attr)) {
    parsers[attr] = parseInt
  }
})

function parseAttr(attr, value) {
  if (parsers.hasOwnProperty(attr)) {
    return parsers[attr](value)
  } else {
    return value
  }
}

function parseValues(values) {
  const parsedValues = {}
  Object.keys(values).forEach(attr => {
    parsedValues[attr] = parseAttr(attr, values[attr])
  })
  return parsedValues
}