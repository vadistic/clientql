type Args = any[]
type Property = string | number

export type Segments = Array<[Property, Args[]]>
export type FluenAsyncProxyCb = (segments: Segments) => Promise<any>

const idSegmenets: Segments = []

const $fluentAsyncProxy = () => ({})

export const fluentAsyncProxy = <T = any>(
  asyncCb: FluenAsyncProxyCb,
  prev: Segments = idSegmenets,
  level: number = -1
): T =>
  new Proxy($fluentAsyncProxy as any, {
    apply: (target, thisArg, argArray) => {
      prev[level][1] = [...prev[level][1], argArray]

      return fluentAsyncProxy(asyncCb, prev, level)
    },
    get: (target, key) => {
      /**
       * Promise trap
       * - not binding anything since it seems pointles
       * - the way it is now supports chains, await & error handling
       */

      if (key === 'then') {
        return (...args: any) => asyncCb(prev).then(...args)
      }
      if (key === 'catch') {
        return (...args: any) => asyncCb(prev).catch(...args)
      }
      if (key === 'finally') {
        return (...args: any) => asyncCb(prev).finally(...args)
      }

      /**
       * Return promise
       */
      if (key === 'UNWRAP') {
        return asyncCb(prev)
      }

      /**
       *  Trap any string props with recursive pathProxy
       *  skips symbols, because those are not safe to log here
       *  (used by node/jest etc.)
       */
      if (typeof key === 'string' || typeof key === 'number') {
        prev[level + 1] = [key, []]
        return fluentAsyncProxy(asyncCb, prev, level + 1)
      }

      /**
       * Noop but for semantics
       */

      if ((key as any) in target) {
        const value = (target as any)[key]
        return typeof value === 'function' ? value.bind(target) : value
      }
    }
  })
