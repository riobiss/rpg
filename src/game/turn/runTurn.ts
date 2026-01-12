import type { Turn } from "../../types/Turn"
import playTurn from "./playTurn"

export default async function runTurn(turnQueue: Turn[]) {
  const turn = turnQueue.shift()
  if (!turn) return

  const character = turn.entity

  if (!character) return
  await playTurn(character)
}
