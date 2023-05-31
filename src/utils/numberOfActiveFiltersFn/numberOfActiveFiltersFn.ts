import { FiltersType } from '../../types'

export const numberOfActiveFiltersFn = (filters: FiltersType) =>
  Object.values(filters).reduce((accum, current) => {
    if (current.length === 0) {
      return accum
    }
    if (current[0] === 0 && current[1] === 300) {
      return accum
    }
    return accum + 1
  }, 0)
