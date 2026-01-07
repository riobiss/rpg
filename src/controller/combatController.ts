import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/chooseCombatants"
import type { Combatants } from "../types/Combatants"
import viewAttack from "../ui/combat/viewAttack"
import selectWeapon from "../ui/combat/selectWeapon"

export default async function combatController(combatants: Combatants) {
  const state = combatants
  const figthers: Combatants = {
    attacker: state.attacker,
    target: state.target,
  }
  const attackResult = await applyDamage(figthers)
  figthers.target = attackResult.target

  await viewAttack(attackResult)
}
