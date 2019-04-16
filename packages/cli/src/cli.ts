#!/usr/bin/env node

import meow from 'meow'
import { clientgenCmd } from './commands'

const cli = meow(
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
