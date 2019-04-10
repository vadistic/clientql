export type Truthy<T> = T extends boolean
  ? NonNullable<T> & true
  : NonNullable<T>

export const truthy = <T>(input: T): input is Truthy<T> => !!input

export const isNotEmpty = <T>(input: T): input is Truthy<T> =>
  !!input &&
  (typeof input === 'object'
    ? Array.isArray(input)
      ? input.length > 0
      : Object.keys(input).length > 0
    : true)

export interface StringMap<T> {
  [index: string]: T
}

export type Narrowable =
  | string
  | number
  | boolean
  | symbol
  | object
  | null
  | undefined
  | void
  | ((...args: any[]) => any)
  | {}

export type Literally<
  T extends V | Array<V | T> | { [k: string]: V | T },
  V extends Narrowable = Narrowable
> = T

export const literally = <
  T extends V | Array<V | T> | { [k: string]: V | T },
  V extends Narrowable
>(
  input: T,
) => input

export const tuplify = <T extends [any] | any[]>(tuple: T): T => tuple

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U>
    ? Array<Mutable<U>>
    : Mutable<T[P]>
}

export type Indexed<T> = T & {
  [index: string]: T[keyof T]
}

export const indexed = <T>(input: T) => input as Indexed<T>

/*
 * Idea for strongly typed piping fn
 * (since I like using logic operators)
 *
 * - fails (no shorcircuit yet) on false or undefined value
 * - returns fail as undef for easy !bang assertion when needed
 *
 * it's hard to handle infering false from true so let's tying is as Nonboolean
 *
 */

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

export const truePipe: TruePipe = (...fns: any[]) => (input: any) =>
  fns.reduce(
    (val, fn: any) =>
      val === undefined || val === false ? undefined : fn(val),
    input,
  )
