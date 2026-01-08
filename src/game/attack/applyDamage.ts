import type { Combatants } from "../../types/Combatants"
import dice from "../../game/dice/dice"
import type { DamageResult } from "../../types/combatData"

export default async function applyDamage(combatants: Combatants): Promise<DamageResult> {
  const roll = dice({ rolls: 1, sides: 20 })

  const { attacker, target } = combatants

  let diceRolls = dice(attacker.damage)

  if (roll < 14) {
    return {
      target,
      roll,
      damage: 0,
      diceRolls,
    }
  }

  if (roll === 20) {
    diceRolls *= 2
  }

  const effectiveDamage = Math.max(diceRolls - target.defense, 0)

  const newHealth = target.health - effectiveDamage

  return {
    target: {
      ...target,
      health: newHealth,
    },
    roll,
    damage: effectiveDamage,
    diceRolls,
  }
}
