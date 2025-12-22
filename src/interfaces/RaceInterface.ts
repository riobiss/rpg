interface RaceInteface {
  name: string
  description: string
  abilities: { level1: string; level5: string; level10: string }
  advantage: string
  disadvantage: string
  height: { min: number; max: number }
}
