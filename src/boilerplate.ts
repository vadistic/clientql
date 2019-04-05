type Scalar = boolean | string | number | null

type ScalarKeys<T> = {
  [P in keyof T]: T[P] extends Scalar ? P : never
}[keyof T]

type FlatFragment<T> = { [K in ScalarKeys<Required<T>>]: T[K] }
