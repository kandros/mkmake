#!/usr/bin/env node
const { Snippet } = require('enquirer')
const fs = require('fs')

const prompt = new Snippet({
  name: 'makefile',
  message: 'Fill out commands for Makefile',
  required: true,
  fields: [
    {
      name: 'runCommand',
      message: 'run Command',
    },
    {
      name: 'devCommand',
      message: 'dev Command',
    },
  ],
  template: `run: 
\t\${runCommand}
dev:
\t\${devCommand}
`,
})

prompt
  .run()
  .then(toFile('Makefile'))
  .catch(console.error)

function toFile(filename) {
  return function(answer) {
    console.log(`created ${filename}`)
    fs.writeFileSync(filename, answer.result, { encoding: 'utf-8' })
  }
}
