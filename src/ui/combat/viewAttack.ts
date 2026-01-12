import type { DamageResult } from "../../types/combatData"
import rl from "../../utils/readline"

export default async function viewAttack(attackResult: DamageResult) {
  const { target, roll, damage, diceRolls } = attackResult

  console.log("")
  console.log(`Dado de ação: ${roll}`)
  console.log(`Dado do ataque: ${diceRolls}`)
  console.log(`Dano causado: ${damage}`)
  console.log(`Vida atual: ${target.health}`)

}
