#!/usr/bin/env node

import meow from 'meow'
import { clientgenCmd } from './commands'

export type Flags = {
  schema: {
    type: 'string'
    alias: string
  }
  output: {
    type: 'string'
    alias: string
  }
  config: {
    type: 'string'
    alias: string
  }
} & meow.AnyFlags

const cli = meow<Flags>(
  `
	Usage
	  $ clientgen -s src/schema.graphql -o src/generated/client

	Options
    --schema, -s typedefs file or graphql endpoint
    --output, -o directory for generated client lib
    --config, -c json file with generator options

`,
  {
    flags: {
      schema: {
        type: 'string',
        alias: 's',
      },
      output: {
        type: 'string',
        alias: 'o',
      },
      config: {
        type: 'string',
        alias: 'c',
      },
    },
  },
)

// default command
if (cli.input.length === 0 || cli.input[0] === 'generate') {
  clientgenCmd(cli)
}
