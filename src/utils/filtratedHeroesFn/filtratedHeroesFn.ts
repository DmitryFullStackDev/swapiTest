import { FiltersType, HeroType } from '../../types'

export const filtratedHeroesFn = (heroes: HeroType[], filters: FiltersType) => {
  const { gender, minMaxMass, minMaxHeight, hair_color, skin_color, eye_color } = filters

  return heroes.filter(item => {
    if (
      (gender.length === 0 || gender.find(el => el === item.gender)) &&
      (hair_color.length === 0 || hair_color.find(el => el === item.hair_color)) &&
      (skin_color.length === 0 || skin_color.find(el => el === item.skin_color)) &&
      (eye_color.length === 0 || eye_color.find(el => el === item.eye_color)) &&
      ((minMaxMass[0] === 0 && minMaxMass[1] === 300) ||
        (Number(item.mass) >= minMaxMass[0] && Number(item.mass) <= minMaxMass[1])) &&
      ((minMaxHeight[0] === 0 && minMaxHeight[1] === 300) ||
        (Number(item.height) >= minMaxHeight[0] && Number(item.height) <= minMaxHeight[1]))
    ) {
      return item
    }
  })
}
