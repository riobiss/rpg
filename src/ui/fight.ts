import combat from "../services/combat"
import chooseCombatants from "./combat/combatPrompt"

export default async function fight() {
  const { attacker, target } = await chooseCombatants()
  combat(attacker, target)
}
