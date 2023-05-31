import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ChangeSpecificHero, FiltersType, HeroType } from '../types'

export const getAllHeroes = createAction<number>('getAllHeroes')

export const heroes = createSlice({
  name: 'heroes',
  initialState: [] as HeroType[],
  reducers: {
    setHeroes: (state, { payload }: PayloadAction<HeroType[]>) => payload,
    changeSpecificHero: (state, { payload }: PayloadAction<ChangeSpecificHero>) => {
      const heroIndex = state.findIndex(el => el.name === payload.name)

      state[heroIndex] = payload.data
    },
  },
})

export const isLoading = createSlice({
  name: 'isLoading',
  initialState: false as boolean,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => payload,
  },
})

export const pageAmount = createSlice({
  name: 'pageAmount',
  initialState: null as number,
  reducers: {
    setPageAmount: (state, { payload }: PayloadAction<number>) => payload,
  },
})

export const search = createSlice({
  name: 'search',
  initialState: '' as string,
  reducers: {
    setSearch: (state, { payload }: PayloadAction<string>) => payload,
  },
})

export const filters = createSlice({
  name: 'filters',
  initialState: {
    minMaxHeight: [0, 300],
    minMaxMass: [0, 300],
    hair_color: [],
    skin_color: [],
    eye_color: [],
    gender: [],
  } as FiltersType,
  reducers: {
    setFilters: (state, { payload }: PayloadAction<FiltersType>) => payload,
  },
})

export const { setHeroes, changeSpecificHero } = heroes.actions
export const { setIsLoading } = isLoading.actions
export const { setPageAmount } = pageAmount.actions
export const { setSearch } = search.actions
export const { setFilters } = filters.actions
