import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/combatPrompt"
import type { Combatants } from "../types/Combatants"
import viewAttack from "../ui/combat/viewAttack"

export default async function combatController() {
  const state: Combatants = await chooseCombatants()
  while (true) {
    const combatants: Combatants = {
      attacker: state.attacker,
      target: state.target,
    }
    const attackResult = await applyDamage(combatants)
    state.target = attackResult.target

    const continueAttack = await viewAttack(attackResult)
    
    if (continueAttack !== 1) break
  }
}
