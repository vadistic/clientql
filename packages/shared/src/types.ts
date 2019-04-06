export const nonNull = <T>(input: T): input is NonNullable<T> =>
  typeof input !== undefined && input !== null

export type NonBoolean<T> = T extends boolean ? never : T

// why not ^^
export type Truthy<T> = T extends boolean
  ? NonNullable<NonBoolean<T>> | true
  : NonNullable<T>

export const truthy = <T>(input: T): input is NonNullable<T> => !!input

export type Falsely<T> = T extends boolean
  ? false
  : T extends string
  ? ''
  : undefined

export const isNotEmpty = <T>(input: T): input is NonNullable<T> =>
  !!input &&
  (typeof input === 'object'
    ? Array.isArray(input)
      ? input.length > 0
      : Object.keys(input).length > 0
    : true)
