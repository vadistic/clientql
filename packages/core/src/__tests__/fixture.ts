import {
  COMPLEX_TYPEDEFS,
  PRISMA_TYPEDEFS,
  VATS_TYPEDEFS,
} from '@clientql/testing'
import path from 'path'
import { CoreProps, getCoreProps } from '../core'

export const prismaProps: CoreProps = getCoreProps(PRISMA_TYPEDEFS)

export const complexProps: CoreProps = getCoreProps(COMPLEX_TYPEDEFS)

export const vatsProps = getCoreProps(VATS_TYPEDEFS)

export const fileSnapPath = (
  filename: string,
  ...dir: string[]
): [string, string] => [
  path.resolve(__dirname, '__file_snapshots__', ...dir, filename),
  filename,
]
