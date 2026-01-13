import enemy from "../../entities/enemy"
import player from "../../entities/player"
import type { Turn } from "../../types/Turn"

export default function initTurnQueue() {
  const turnQueue: Turn[] = []
  for (const playerAlive of player) {
    if (playerAlive.alive) {
      turnQueue.push({ entity: playerAlive })
    }
  }
  for (const enemyAlive of enemy) {
    if (enemyAlive.alive) {
      turnQueue.push({ entity: enemyAlive })
    }
  }
  turnQueue.sort((a, b) => b.entity.initiative - a.entity.initiative)
  return turnQueue
}
