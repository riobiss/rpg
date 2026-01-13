import type { Character } from "../../types/Character"
import type { DamageResult } from "../../types/combatData"
import rl from "../../utils/readline"

export default async function viewAttack(
  target: Character,
  roll: number,
  effectiveDamage: number,
  diceRolls: number | number[]
) {
  console.log("")
  console.log(`Dado de ação: ${roll}`)
  console.log(`Dado do ataque: ${diceRolls}`)
  console.log(`Dano causado: ${effectiveDamage}`)
  console.log(`Vida atual: ${target.health}`)
}
