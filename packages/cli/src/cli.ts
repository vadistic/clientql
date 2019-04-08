#!/usr/bin/env node

const cli = async () => {
  const argv = process.argv

  const remoteflag = argv.findIndex(el => el === '-e')
  const remote = remoteflag !== -1 ? argv[remoteflag + 1] : undefined

  const localflag = argv.findIndex(el => el === '-s')
  const local = localflag !== -1 ? argv[localflag + 1] : undefined

  console.log('generate start')

  console.log('generate success')
}

cli()
