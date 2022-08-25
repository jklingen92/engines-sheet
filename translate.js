import { constants } from "./javascript/constants.js";
import _ from "lodash"
import fs from "fs"

let translation = {}

// Dynamic json generation
constants.specs.forEach(spec => {
  translation[spec] = (spec)
  translation[`${spec}-short`] = (spec.slice(0,3))
})

constants.hit_tiers.forEach(tier => {
  translation[tier] = (tier)
})

const  constantObjects = [
  constants.skills,
  constants.sizes,
  constants.parameters,
]
constantObjects.forEach(obj => {
  Object.keys(obj).forEach(x => {
    translation[x] = (x)
  })
})


// Translation file overrides.
const translationFilePaths = [
  "defaultTranslation.json"
  // Add external translation files here. They will override values generated below
]

translationFilePaths.forEach(filePath => {
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  translation = {
    ...translation,
    ...jsonData,
  }
})

// Add cased versions of translations to files
Object.keys(translation).forEach(key => {
  translation[`${key}-up`] = _.upperCase(translation[key])
  translation[`${key}-title`] = _.startCase(translation[key])
})

// Keep this line
console.log(JSON.stringify(translation))  