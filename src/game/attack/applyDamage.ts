import type { Combatants } from "../../types/Combatants"
import dice from "../../game/dice/dice"
import type { DamageResult } from "../../types/combatData"
import viewAttack from "../../ui/combat/viewAttack"

export default async function applyDamage(
  combatants: Combatants
): Promise<DamageResult> {
  const roll = dice({ rolls: 1, sides: 20 })

  const { attacker, target } = combatants

  let diceRolls = dice(attacker.damage)

  if (roll < 14) {
    return {
      target,
      roll,
      effectiveDamage: 0,
      diceRolls,
    }
  }

  if (roll === 20) {
    diceRolls *= 2
  }
  if (target.health <= 0) {
    target.alive = false
  }
  const effectiveDamage = Math.max(diceRolls - target.defense, 0)

  target.health -= effectiveDamage
  await viewAttack(target, roll, effectiveDamage, diceRolls)

  return {
    target,
    roll,
    effectiveDamage,
    diceRolls,
  }
}
