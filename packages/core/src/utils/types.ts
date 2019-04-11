/*
 * guards
 */

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

export const nonNull = <T>(input: T): input is NonNullable<T> =>
  input !== null && input !== undefined

export const isString = (input: any): input is string =>
  typeof input === 'string'

/*
 * strict literals
 */

export const tuplify = <T extends [any] | any[]>(tuple: T): T => tuple

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

/*
 * index signatures
 */

export interface StringMap<T> {
  [index: string]: T
}

export type Indexed<T> = T & {
  [index: string]: T[keyof T]
}

export const indexed = <T>(input: T) => input as Indexed<T>

/*
 * mutability
 */

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U>
    ? Array<Mutable<U>>
    : Mutable<T[P]>
}
