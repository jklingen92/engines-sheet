import pug from "pug"
import _ from "lodash"
import { constants } from "./javascript/constants.js"
import triggers from "./javascript/triggers.js"
import utils from "./javascript/utilities.js"

const render = pug.compileFile("./system.pug")
let html = render({
  _,
  constants,
  triggers,
  utils
})

const exportRE = /(export[\s\S]+from\s+['"][\w.]+['"])/
html = html.replace(exportRE, "")

const scriptRE = /(?<openTag>\<script class=\"event-script\"\>)(?<code>[\s\S]*?)(?<closeTag>\<\/script\>)/gm
const scripts = [...html.matchAll(scriptRE)]
html = html.replace(scriptRE, "")

const workerRE = /(?:\<script type=\"text\/worker\"\>)(?:[\s\S]*?)(?<closeTag>\<\/script\>)/m
const workerMatch = html.match(workerRE)
const index = workerMatch.index + workerMatch[0].length - "</script>".length

let scriptCode = ""
scripts.forEach(match => {
  scriptCode += match.groups["code"] + ";\n\n"
})
html = html.slice(0, index) + "\n" + scriptCode + "\n" + html.slice(index)

// Keep this line
console.log(html)