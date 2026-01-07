import applyDamage from "../game/applyDamage"
import type { Combatants } from "../types/Combatants"
import viewAttack from "../ui/combat/viewAttack"
import gameState from "../game/play/gameState"

export default async function combatController() {
  const state = gameState
    const figthers: Combatants = {
      attacker: state[0],
      target: state[1],
    }
    const attackResult = await applyDamage(figthers)
    state[1] = attackResult.target

    await viewAttack(attackResult)
}
