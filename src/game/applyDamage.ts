import type { Combatants } from "../types/CombatantsType"
import dice from "../game/dice/dice"

export default async function applyDamage([attacker, target]: Combatants) {
  const { damage } = attacker
  const { health, defense } = target

  const roll = 20//dice(20)

  let finalDamage = damage

  if (roll < 14) {
    return (finalDamage = 0)
  }

  if (roll >= 20) {
    finalDamage *= 2
  }

  const attack = defense - finalDamage
  if (attack >= 1) {
    return 0
  }

  const newHealth = health - -attack
  return [{ ...target, health: newHealth }, { roll }]
}
