export const deepAssign = <T extends object>(objA: T, objB?: any): T => {
  if (!objB) {
    return objA
  }

  const res: any = {
    ...objA,
    ...objB,
  }

  for (const key of Object.keys(objB)) {
    const propA = (objA as any)[key]
    const propB = (objB as any)[key]

    if (
      typeof propA === 'object' &&
      typeof propB === 'object' &&
      !Array.isArray(propA) &&
      !Array.isArray(propB)
    ) {
      res[key] = deepAssign(propA, propB)
    }
  }

  return res
}
