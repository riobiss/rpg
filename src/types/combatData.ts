import type { Combatants } from "./CombatantsType"
export type DamageResult = {
  target: Combatants[1]
  roll: number
  damage: number
}
