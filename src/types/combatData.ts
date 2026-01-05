import type { Character } from "./Character"

export type DamageResult = {
  target: Character
  roll: number
  damage: number
  rollAttack: number

}
