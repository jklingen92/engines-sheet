function generateTierDescription(tier) {
  return `Calculation: ${tier.calculation}\nDescription: ${tier.description}\nDamage:${tier.damage}`
}

export default {
  generateTierDescription
}