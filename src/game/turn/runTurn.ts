import type { Turn } from "../../types/Turn"
import playTurn from "./playTurn"

export default async function runTurn(turnQueue: Turn[]) {
  const turn = turnQueue.shift()
  if (!turn) return

  const character = turn.entity

  if (!character) return

  if (character.health <= 0) {
    character.alive = false
    return
  }
  await playTurn(character)

  turnQueue.push(turn)
}
