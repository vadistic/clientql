import { Fieldname } from '@graphql-clientgen/shared'

export interface ClientPaths {
  paths: Fieldname[]
  args: any[][]
}

const idPaths: ClientPaths = {
  args: [],
  paths: []
}

export type PathProxyCb = (paths: ClientPaths) => Promise<any>

export const pathProxy = <T = any>(
  cb: PathProxyCb,
  prev: ClientPaths = idPaths
): T =>
  new Proxy((() => ({})) as any, {
    apply: (target, thisArg, argsArray) => {
      return pathProxy(cb, {
        ...prev,
        args: [...prev.args, argsArray]
      })
    },
    get: (target, key) => {
      /**
       * Promise trap, trail & error here
       * - not binding anything since it seems pointles
       * - the way it is now supports chains, await & error handling
       */

      if (key === 'then') {
        return (...args: any) => cb(prev).then(...args)
      }
      if (key === 'catch') {
        return (...args: any) => cb(prev).catch(...args)
      }
      if (key === 'finally') {
        return (...args: any) => cb(prev).finally(...args)
      }

      /**
       *  Trap any string props with recursive pathProxy
       */
      if (typeof key === 'string') {
        return pathProxy(cb, {
          ...prev,
          paths: [...prev.paths, key]
        })
      }

      /**
       * Should be noop on my empty fn => empty obj target but for edge cases
       */

      if ((key as any) in target) {
        const value = (target as any)[key]
        return typeof value === 'function' ? value.bind(target) : value
      }
    }
  })
