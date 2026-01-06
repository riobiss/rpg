import type { DiceRoll } from "./DiceRoll"

export type Character = {
  name: string
  health: number
  damage: DiceRoll
  defense: number
}
