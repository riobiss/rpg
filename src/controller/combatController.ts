import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/combatPrompt"
import rl from "../utils/readline"
import type { Combatants } from "../types/CombatantsType"
import viewAttack from "../ui/combat/viewAttack"

export default async function combatController() {
  const { attacker, target } = await chooseCombatants()
  const combatants: Combatants = [attacker, target]
  const attack = await applyDamage(combatants)
  viewAttack(attack)
  const answer = Number(await rl.question("Quer atacar de novo?"))
  if (answer === 1) {
    combatController()
  }
}
