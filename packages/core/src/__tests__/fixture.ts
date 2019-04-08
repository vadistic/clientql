import { CoreProps, defaultCoreConfig } from '../config'
import { buildAstMap } from '../map-ast'
import { TYPEDEFS } from './typedefs'

export const astMap = buildAstMap(TYPEDEFS)

export const coreProps: CoreProps = {
  astMap,
  config: defaultCoreConfig
}
