import applyDamage from "../game/applyDamage"
import chooseCombatants from "../ui/combat/combatPrompt"
export default async function combat() {
  const { attacker, target } = await chooseCombatants()
  applyDamage(attacker, target)
}
