import {
  COMPLEX_TYPEDEFS,
  PRISMA_TYPEDEFS,
  VATS_TYPEDEFS,
} from '@graphql-clientgen/testing'
import path from 'path'
import { getGeneratorProps } from '../generator'

export const prismaProps = getGeneratorProps(PRISMA_TYPEDEFS)

export const complexProps = getGeneratorProps(COMPLEX_TYPEDEFS)

export const vatsProps = getGeneratorProps(VATS_TYPEDEFS)

export const fileSnapPath = (filename: string, ...dir: string[]) => [
  path.resolve(__dirname, '__file_snapshots__', ...dir, filename),
  filename,
]
