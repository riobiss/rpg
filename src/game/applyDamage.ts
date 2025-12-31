import type { Player } from "../types/playerType"
import type { Enemy } from "../types/enemyType"
export default function applyDamage(attacker: Player, target: Enemy) {
  const { damage } = attacker
  const { health, defense } = target
  const attackDefense = defense - damage
  if (attackDefense >= 1) {
    return 0
  }
  const attackHealth = health - -attackDefense
  return attackHealth
}
