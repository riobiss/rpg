import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/combatPrompt"
import rl from "../utils/readline"
import type { Combatants } from "../types/CombatantsType"

export default async function combatController() {
  const { attacker, target } = await chooseCombatants()
  const combatants: Combatants = [attacker, target]
  const attack = await applyDamage(combatants)
  console.log(attack)
  const answer = Number(await rl.question("Quer atacar de novo?"))
  if (answer === 1) {
    combatController()
  }
}
