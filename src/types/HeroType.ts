export type HeroType = {
  name?: string
  height?: string
  mass?: string
  hair_color?: string
  skin_color?: string
  eye_color?: string
  gender?: string
}

export type ChangeSpecificHero = {
  name: string
  data: HeroType
}

export type FiltersType = {
  minMaxHeight: number[]
  minMaxMass: number[]
  hair_color: string[]
  skin_color: string[]
  eye_color: string[]
  gender: string[]
}
