import path from 'path'
import globby from 'globby'
import { readJSONSync, writeFileSync } from 'fs-extra'

// eslint-disable-next-line import/no-extraneous-dependencies
import prettier from 'prettier'

type Target = 'esm' | 'cjs' | 'root'

const PREFIX = '@clientql/'

const createPaths = (pkg: any) =>
  Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
    .filter(name => name.match(PREFIX))
    .reduce((acc, name) => {
      const basename = name.replace(PREFIX, '')

      acc[name] = [`../${basename}/src`]
      acc[name + '/*'] = [`../${basename}/src/*`]

      return acc
    }, {} as any)

const createReferences = (pkg: any, target: Target) =>
  Object.keys({ ...pkg.dependencies, ...pkg.devDependencies })
    .filter(name => name.match(PREFIX))
    .reduce((acc, name) => {
      const basename = name.replace(PREFIX, '')

      acc.push({
        path: `../${basename}/tsconfig${target !== 'root' ? '.' + target : ''}.json`,
      })

      return acc
    }, [] as { path: string }[])

const createConfig = (pkg: any, target: Target) => ({
  extends: './tsconfig.json',
  compilerOptions: {
    rootDir: 'src',
    outDir: `dist/${target}`,
    module: { esm: 'ESNext', cjs: 'CommonJS', root: 'ESNext' }[target],
  },
  include: ['src'],
  references: createReferences(pkg, target),
})

const writePrettyJSONSync = (filePath: string, data: any) => {
  const stringified = JSON.stringify(data, null, 2)

  prettier.resolveConfig(filePath).then(options => {
    const formatted = prettier.format(stringified, { parser: 'json', ...options })

    writeFileSync(filePath, formatted, 'utf-8')
  })
}

const packages = globby.sync('packages/*/package.json')

// package level tsconfigs
packages.forEach(pkgPath => {
  const pkg = readJSONSync(pkgPath)
  const dirname = path.dirname(pkgPath)

  const paths = createPaths(pkg)

  const configPathMain = path.join(dirname, 'tsconfig.json')
  const configPathEsm = path.join(dirname, 'tsconfig.esm.json')
  const configPathCjs = path.join(dirname, 'tsconfig.cjs.json')

  const config = readJSONSync(configPathMain)

  config.compilerOptions = { ...config.compilerOptions, baseUrl: '.', paths }
  config.references = createReferences(pkg, 'root')

  writePrettyJSONSync(configPathMain, config)

  writePrettyJSONSync(configPathEsm, createConfig(pkg, 'esm'))

  writePrettyJSONSync(configPathCjs, createConfig(pkg, 'cjs'))
})

// top level tsconfig
writePrettyJSONSync(path.join(process.cwd(), 'tsconfig.esm.json'), {
  files: [],
  references: packages
    .map(pkgPath => path.basename(path.dirname(pkgPath)))
    .map(pkgName => ({ path: `./packages/${pkgName}/tsconfig.esm.json` })),
})

writePrettyJSONSync(path.join(process.cwd(), 'tsconfig.cjs.json'), {
  files: [],
  references: packages
    .map(pkgPath => path.basename(path.dirname(pkgPath)))
    .map(pkgName => ({ path: `./packages/${pkgName}/tsconfig.cjs.json` })),
})
