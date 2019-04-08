type Scalar = boolean | string | number | null

type ScalarKeys<T> = {
  [P in keyof T]: T[P] extends Scalar ? P : never
}[keyof T]

type FlatFragment<T> = { [K in ScalarKeys<Required<T>>]: T[K] }

/**
 * THIS FILE WAS AUTO GENERATED
 * DO NOT EDIT ETC...
 */

export const CLIENT_BOILERPLATE = `

/**
 * THIS FILE WAS AUTO GENERATED
 * DO NOT EDIT ETC...
 */

type Scalar = boolean | string | number | null

type ScalarKeys<T> = {
  [P in keyof T]: T[P] extends Scalar ? P : never
}[keyof T]

type FlatFragment<T> = { [K in ScalarKeys<Required<T>>]: T[K] }
`.trim()
