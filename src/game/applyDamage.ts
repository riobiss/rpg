import type { Combatants } from "../types/Combatants"
import dice from "../game/dice/dice"
import type { DamageResult } from "../types/combatData"

export default async function applyDamage(
  combatants: Combatants
): Promise<DamageResult> {
  const roll = dice({ rolls: 1, sides: 20 })

  const { attacker, target } = combatants

  let rollAttack = dice(attacker.damage)

  if (roll < 14) {
    return {
      target,
      roll,
      damage: 0,
      rollAttack,
    }
  }

  if (roll === 20) {
    rollAttack *= 2
  }

  const effectiveDamage = Math.max(rollAttack - target.defense, 0)

  const newHealth = target.health - effectiveDamage

  return {
    target: {
      ...target,
      health: newHealth,
    },
    roll,
    damage: effectiveDamage,
    rollAttack,
  }
}
