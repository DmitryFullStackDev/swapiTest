import { request } from '../utils'

export const API = {
  getHeroes: {
    get: (page: number, search: string) => request.get(`people/?search=${search}&page=${page}`),
  },
}
