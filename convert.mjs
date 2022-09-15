#!/usr/bin/env node
import FS from 'node:fs'
import toml from 'toml'

const beforefn = process.argv[process.argv.length-1]

if(!FS.existsSync(beforefn))
  throw new Error(`file: ${beforefn} does not exist`)

const s = FS.readFileSync(beforefn, 'utf8')
const t = toml.parse(s)

FS.writeFileSync(beforefn.split('.')[0] + '.json', JSON.stringify(t, null, 2))