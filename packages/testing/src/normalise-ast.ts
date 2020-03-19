import { ASTNode, visit } from 'graphql'

export const normalise = (astNode: ASTNode) =>
  visit(astNode, {
    enter(node) {
      const copy = { ...node }
      let flag = false

      if ('loc' in copy) {
        delete copy.loc
        flag = true
      }

      if ('alias' in copy && !copy.alias) {
        delete copy.alias
        flag = true
      }

      if ('arguments' in copy && (!copy.arguments || copy.arguments.length === 0)) {
        delete copy.arguments
        flag = true
      }

      if ('directives' in copy && (!copy.directives || copy.directives.length === 0)) {
        delete copy.directives
        flag = true
      }

      if (
        'selectionSet' in copy &&
        (!copy.selectionSet || copy.selectionSet.selections.length === 0)
      ) {
        delete copy.selectionSet
        flag = true
      }

      // sort selections
      if (copy.kind === 'SelectionSet') {
        copy.selections = copy.selections
          .slice()
          .sort((a, b) => ('name' in a && 'name' in b ? (a.name.value > b.name.value ? -1 : 1) : 0))
        flag = true
      }

      if (flag) {
        return copy
      }
    },
  })
