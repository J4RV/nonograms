const files = require('fs')
const path = require('path')

if (process.argv.length === 0) {
  throw new Error('Missing action name')
}

const PROJECT_FOLDER = path.dirname(__dirname)
const ACTIONS_FOLDER = '/src/actions'
const ACTION_NAME = process.argv[2]

const PAYLOAD_PARAMETERS = process.argv.reduce((acum, arg, index) => {
  // First argument is node path, second is this script's path, third is the new action's name
  if (index > 2) {
    acum.push(arg)
  }
  return acum
}, []).join(', ')

const toSnakeCase = function (camelCaseStr) {
  var upperChars = camelCaseStr.match(/([A-Z])/g)
  var res = camelCaseStr.toString()

  if (upperChars) {
    for (var i = 0; i < upperChars.length; i++) {
      res = res.replace(new RegExp(upperChars[i]), '_' + upperChars[i])
    }
  }

  if (res && res.charAt(0) === '_') {
    res = res.slice(1)
  }

  return res.toUpperCase()
}

const actionScriptContent = () => {
  const ACTION_NAME_SNAKE = toSnakeCase(ACTION_NAME)
  return `export const ${ACTION_NAME_SNAKE} = '${ACTION_NAME_SNAKE}'

export default (${PAYLOAD_PARAMETERS}) => ({
  type: ${ACTION_NAME_SNAKE},
  payload: {${PAYLOAD_PARAMETERS}}
})`
}

files.writeFile(`${PROJECT_FOLDER}/${ACTIONS_FOLDER}/${ACTION_NAME}.js`, actionScriptContent(), (err) => {
  if (err) { return console.error(err) }
  console.log(`Action ${ACTION_NAME} created`)
})
