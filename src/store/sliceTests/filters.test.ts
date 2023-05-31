import { filters, setFilters } from '../slices'
import { FiltersType } from '../../types'

describe('filtersSlice', () => {
  test('test1', () => {
    const state: FiltersType = {
      minMaxHeight: [0, 300],
      minMaxMass: [0, 300],
      hair_color: [],
      skin_color: [],
      eye_color: [],
      gender: [],
    }

    const updatedState = {
      minMaxHeight: [0, 200],
      minMaxMass: [0, 200],
      hair_color: ['blond'],
      skin_color: ['fair'],
      eye_color: ['brown'],
      gender: ['male'],
    }

    expect(filters.reducer(state, setFilters(updatedState))).toEqual(updatedState)
  })
})
