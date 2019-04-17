import { DocumentNode } from 'graphql'
import { createFragment, FragmentName, Typename, wrapDocument } from '../ast'
import { CoreProps } from '../core'
import { buildSelections } from './selections'
import { FragmentResult, SelectionsResult } from './types'
import { retriveFragmentsFromCache } from './utils'

/**
 * fragments is just wrapped array of selections on some type,
 * but let's have helper for it
 *
 * fragment with type NONE will be a fragment,
 * but will not use any fragment helpers
 */

export const buildFragment = (props: CoreProps) => (
  typename: Typename,
  name?: FragmentName,
): FragmentResult | undefined => {
  const { selections, complete, flat, fragmentNames } = buildSelections(props)(
    typename,
  )

  // invalid typename or empty with current config
  if (!selections) {
    return undefined
  }

  // need to namespace non-complete fragments,
  // user can produce them but thay should be named differently
  // I would not like to produce 2 different fragments with same name
  // TODO: think how to name it
  const fragmentName = getFragmentName(props)({ typename, flat, complete })

  // shortcircuit on cached result
  if (!name && props.cache.fragments.has(fragmentName)) {
    return props.cache.fragments.get(fragmentName)!
  }

  const fragment = createFragment({
    condition: typename,
    fragmentname: name || fragmentName,
    selections,
  })

  return {
    fragment,
    fragmentNames,
    complete,
    flat,
  }
}

/**
 * same as build operation doc, create fragment by typename
 */
export const buildFragmentDoc = (props: CoreProps) => (
  typename: Typename,
  name?: FragmentName,
): DocumentNode | undefined => {
  const fragmentResult = buildFragment(props)(typename, name)

  if (!fragmentResult) {
    return
  }

  const { fragmentNames, fragment } = fragmentResult

  const fragments = retriveFragmentsFromCache(props)(fragmentNames)

  return wrapDocument(fragment, ...fragments)
}

/**
 * helper to normalise fragment naming
 */
export interface GetFragmentNameOptions {
  typename: Typename
  complete: boolean
  flat: boolean
}

export const getFragmentName = (props: CoreProps) => ({
  complete,
  flat,
  typename,
}: GetFragmentNameOptions): FragmentName => {
  if (flat) {
    return typename + props.config.fragmentFlatSuffix
  }

  if (complete) {
    return typename + props.config.fragmentDeepSuffix
  }

  // deep, non-complete selection is a (deep) partial
  return typename + props.config.fragmentPartialSuffix
}
