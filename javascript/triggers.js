
function parseInputs(inputs) {
  if (typeof(inputs) === "string") {
    return [inputs]
  } else {
    return inputs
  }
}

function open(inputs) {
  const attrs = parseInputs(inputs)
  return {
    event: "sheet:opened", 
    dependencies: JSON.stringify(attrs)
  }
}

function change(inputs) {
  const attrs = parseInputs(inputs)
  return {
    event: parseInputs(attrs).map(attr => `change:${attr}`).join(" "), 
    dependencies: JSON.stringify(attrs)
  }
}

function action(actions) {
  return {
    event: parseInputs(actions).map(action => `clicked:${action}`).join(" ")
  }
}

export default {
  open,
  change,
  action
}