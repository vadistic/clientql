export type Truthy<T> = T extends boolean
  ? NonNullable<T> & true
  : NonNullable<T>

export const truthy = <T>(input: T): input is Truthy<T> => !!input

export type Indexed<T> = T & {
  [index: string]: T[keyof T]
}

export const indexed = <T>(input: T) => input as Indexed<T>

export const isNotEmpty = <T>(input: T): input is NonNullable<T> =>
  !!input &&
  (typeof input === 'object'
    ? Array.isArray(input)
      ? input.length > 0
      : Object.keys(input).length > 0
    : true)

export const isString = (input: any): input is string =>
  typeof input === 'string'
