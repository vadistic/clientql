export const getTypeClientName = (typename: string) =>
  changeCase.pascalCase(typename + ' Promise')
