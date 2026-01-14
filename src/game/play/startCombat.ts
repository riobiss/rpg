import initTurnQueue from "../turn/initTurnQueue"
import runTurn from "../turn/runTurn"

export default async function StartCombat() {
  const turnQueue = initTurnQueue()
  let turnCount = 1
  while (turnQueue.length > 0) {
    await runTurn(turnQueue)
    turnCount++
  }
}
