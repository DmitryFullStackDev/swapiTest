import { filtratedHeroesFn } from './filtratedHeroesFn'

const heroes = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white',
    eye_color: 'red',
    gender: 'n/a',
  },
]

const filters = {
  minMaxHeight: [0, 300],
  minMaxMass: [0, 300],
  hair_color: [],
  skin_color: [],
  eye_color: [],
  gender: [],
}

const filters1 = {
  ...filters,
  minMaxHeight: [0, 100],
}

const filters2 = {
  ...filters,
  minMaxMass: [0, 40],
}

const filters3 = {
  ...filters,
  hair_color: ['blond'],
}

const filters4 = {
  ...filters,
  skin_color: ['gold'],
}

const filters5 = {
  ...filters,
  eye_color: ['blue'],
}

const filters6 = {
  ...filters,
  gender: ['male'],
}

const filters7 = {
  ...filters,
  gender: ['male', 'n/a'],
}

const filters8 = {
  minMaxHeight: [0, 172],
  minMaxMass: [0, 77],
  hair_color: ['blond'],
  skin_color: ['fair'],
  eye_color: ['blue'],
  gender: ['male'],
}

describe('filtratedHeroesFn', () => {
  test('test1', () => {
    expect(filtratedHeroesFn(heroes, filters)).toStrictEqual(heroes)
  })
  test('test1', () => {
    expect(filtratedHeroesFn(heroes, filters1)).toStrictEqual([heroes[2]])
  })
  test('test2', () => {
    expect(filtratedHeroesFn(heroes, filters2)).toStrictEqual([heroes[2]])
  })
  test('test3', () => {
    expect(filtratedHeroesFn(heroes, filters3)).toStrictEqual([heroes[0]])
  })
  test('test4', () => {
    expect(filtratedHeroesFn(heroes, filters4)).toStrictEqual([heroes[1]])
  })
  test('test5', () => {
    expect(filtratedHeroesFn(heroes, filters5)).toStrictEqual([heroes[0]])
  })
  test('test6', () => {
    expect(filtratedHeroesFn(heroes, filters6)).toStrictEqual([heroes[0]])
  })
  test('test7', () => {
    expect(filtratedHeroesFn(heroes, filters7)).toStrictEqual(heroes)
  })
  test('test8', () => {
    expect(filtratedHeroesFn(heroes, filters8)).toStrictEqual([heroes[0]])
  })
})
