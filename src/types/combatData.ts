import type { Character } from "./Character"

export type DamageResult = {
  target: Character
  roll: number
  effectiveDamage: number
  diceRolls: number | number[]
}
