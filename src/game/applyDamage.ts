import type { Combatants } from "../types/CombatantsType"
import dice from "../game/dice/dice"
import type { DamageResult } from "../types/combatData"

export default async function applyDamage([
  attacker,
  target,
]: Combatants): Promise<DamageResult> {
  const roll = dice(20)

  let damage = attacker.damage

  if (roll < 14) {
    return {
      target,
      roll,
      damage: 0,
    }
  }

  if (roll >= 20) {
    damage *= 2
  }

  const effectiveDamage = Math.max(damage - target.defense, 0)

  const newHealth = target.health - effectiveDamage

  return {
    target: {
      ...target,
      health: newHealth,
    },
    roll,
    damage: effectiveDamage,
  }
}
