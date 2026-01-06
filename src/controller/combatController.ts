import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/chooseCombatants"
import type { Combatants } from "../types/Combatants"
import viewAttack from "../ui/combat/viewAttack"
import selectWeapon from "../ui/combat/selectWeapon"

export default async function combatController(combatants: Combatants) {
  const state = combatants
  while (true) {
    const combatants: Combatants = {
      attacker: state.attacker,
      target: state.target,
    }
    const attackResult = await applyDamage(combatants)
    combatants.target = attackResult.target

    const continueAttack = await viewAttack(attackResult)

    if (continueAttack !== 1) break
  }
}
