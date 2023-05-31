import { changeSpecificHero, heroes, setHeroes } from '../slices'
import { HeroType } from '../../types'

describe('heroesSlice', () => {
  test('test1', () => {
    const state: HeroType[] = [
      { name: 'hero', mass: '100' },
      { name: 'hero2', mass: '300' },
    ]

    expect(heroes.reducer(state, setHeroes([{ name: 'hero1' }]))).toEqual([{ name: 'hero1' }])
  })
  test('test2', () => {
    const state: HeroType[] = [
      { name: 'hero', mass: '100' },
      { name: 'hero2', mass: '300' },
    ]

    expect(heroes.reducer(state, changeSpecificHero({ name: 'hero', data: { name: 'hero', mass: '200' } }))).toEqual([
      { name: 'hero', mass: '200' },
      { name: 'hero2', mass: '300' },
    ])
  })
})
