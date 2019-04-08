export const nonNull = <T>(input: T): input is NonNullable<T> =>
  typeof input !== undefined && input !== null

export type Truthy<T> = T extends boolean ? never : NonNullable<T> & true

export const truthy = <T>(input: T): input is Truthy<T> => !!input

export const isNotEmpty = <T>(input: T): input is NonNullable<T> =>
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
  input: T
) => input

export const tuplify = <T extends [any] | any[]>(tuple: T): T => tuple

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U>
    ? Array<Mutable<U>>
    : Mutable<T[P]>
}
