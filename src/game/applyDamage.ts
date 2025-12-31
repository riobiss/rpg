import type { Player } from "../types/playerType"
import type { Enemy } from "../types/enemyType"
export default function applyDamage(attacker: Player, target: Enemy) {
  const { damage } = attacker
  const { health, defense } = target
  const attack = defense - damage
  console.log(attack)
  if (attack >= 1) {
    return 0
  }
  const newHealth = health - -attack
  console.log(newHealth)
  return newHealth
}
