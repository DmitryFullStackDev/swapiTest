import axios from 'axios'

export const request = axios.create({ baseURL: 'https://swapi.py4e.com/api/' })
