import path from 'path'
import { COMPLEX_TYPEDEFS, PRISMA_TYPEDEFS, VATS_TYPEDEFS } from '@clientql/testing'
import { getCodegenProps } from '../src'

export const prismaProps = getCodegenProps(PRISMA_TYPEDEFS)

export const complexProps = getCodegenProps(COMPLEX_TYPEDEFS)

export const vatsProps = getCodegenProps(VATS_TYPEDEFS)

export const fileSnapPath = (filename: string, ...dir: string[]): [string, string] => [
  path.resolve(__dirname, '__file_snapshots__', ...dir, filename),
  filename,
]
