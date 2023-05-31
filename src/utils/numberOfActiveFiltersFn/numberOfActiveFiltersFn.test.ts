import { numberOfActiveFiltersFn } from './numberOfActiveFiltersFn'

const filters6 = {
  minMaxHeight: [0, 172],
  minMaxMass: [0, 77],
  hair_color: ['blond'],
  skin_color: ['fair'],
  eye_color: ['blue'],
  gender: ['male'],
}

const filters = {
  minMaxHeight: [0, 300],
  minMaxMass: [0, 300],
  hair_color: [],
  skin_color: [],
  eye_color: [],
  gender: [],
}

const filters4 = {
  minMaxHeight: [0, 200],
  minMaxMass: [0, 200],
  hair_color: ['blond'],
  skin_color: ['white'],
  eye_color: [],
  gender: [],
}

describe('numberOfActiveFiltersFn', () => {
  test('test1', () => {
    expect(numberOfActiveFiltersFn(filters6)).toBe(6)
  })
  test('test2', () => {
    expect(numberOfActiveFiltersFn(filters)).toBe(0)
  })
  test('test3', () => {
    expect(numberOfActiveFiltersFn(filters4)).toBe(4)
  })
})
