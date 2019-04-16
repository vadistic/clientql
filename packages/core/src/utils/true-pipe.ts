/**
 * Strongly typed piping fn with booleans as result monad
 * (since I like using logic operators, like a lot)
 *
 * - fails (with shortcircuit) on false or undefined value
 * - returns undef on fail for easy bang! assertion and clean typing typing od result
 * - it's like using result monad (when you do not need result monad) and boolean is your result monad
 *
 * it's hard to reliably infer false from true so result is nonboolean
 *
 */
export const truePipe: TruePipe = (...fns: any[]) => (input: any) => {
  /*
   * Standard implementation is something like
   *
   * fns.reduce(
   *   (val, fn: any) => (val === undefined || val === false ? val : fn(val)),
   *  input,
   * )
   *
   * but this will be 10x faster + shortcircuited
   */

  let val = input

  for (const fn of fns) {
    if (val === undefined || val === false) {
      return undefined
    }
    val = fn(val)
  }

  return val
}

export type NonBoolean<T> = T extends boolean ? never : T
export type NonUndefined<T> = T extends undefined ? never : T

export type Truely<T> = NonUndefined<NonBoolean<T>>

export interface TruePipe {
  <I extends any[], R0, R1>(
    fn0: (...args: I) => R0,
    fn1: (arg: Truely<R0>) => R1,
  ): (...args: I) => Truely<R1> | undefined
  <I extends any[], R0, R1, R2>(
    fn0: (...args: I) => R0,
    fn1: (arg: Truely<R0>) => R1,
    fn2: (arg: Truely<R1>) => R2,
  ): (...args: I) => Truely<R2> | undefined
  <I extends any[], R0, R1, R2, R3>(
    fn0: (...args: I) => R0,
    fn1: (arg: Truely<R0>) => R1,
    fn2: (arg: Truely<R1>) => R2,
    fn3: (arg: Truely<R2>) => R3,
  ): (...args: I) => Truely<R3> | undefined
  <I extends any[], R0, R1, R2, R3, R4>(
    fn0: (...args: I) => R0,
    fn1: (arg: Truely<R0>) => R1,
    fn2: (arg: Truely<R1>) => R2,
    fn3: (arg: Truely<R2>) => R3,
    fn4: (arg: Truely<R3>) => R4,
  ): (...args: I) => Truely<R4> | undefined
  <I extends any[], R0, R1, R2, R3, R4, R5>(
    fn0: (...args: I) => R0,
    fn1: (arg: Truely<R0>) => R1,
    fn2: (arg: Truely<R1>) => R2,
    fn3: (arg: Truely<R2>) => R3,
    fn4: (arg: Truely<R3>) => R4,
    fn5: (arg: Truely<R4>) => R5,
  ): (...args: I) => Truely<R5> | undefined
}
