import type { DamageResult } from "../../types/combatData"
import rl from "../../utils/readline"

export default async function viewAttack(attackResult: DamageResult) {
  const { target, roll, damage, rollAttack } = attackResult

  console.log("")
  console.log(`Dado de ação: ${roll}`)
  console.log(`Dado do ataque: ${rollAttack}`)
  console.log(`Dano causado: ${damage}`)
  console.log(`Vida atual: ${target.health}`)
  const answer = Number(await rl.question("Quer atacar de novo? (1 = sim) "))
  return answer
}
