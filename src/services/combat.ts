import applyDamage from "../game/applyDamage"
import dice from "../game/dice/dice"
import chooseCombatants from "../ui/combat/combatPrompt"
import rl from "../utils/readline"

export default async function combat() {
  const { attacker, target } = await chooseCombatants()
  const roll = dice(20)
  console.log(`\nNumero de dado: ${roll}`)
  if (roll >= 14) {
    applyDamage(attacker, target)
  }
  const answer = Number(await rl.question("Quer atacar de novo?"))
  if (answer === 1) {
    combat()
  }
}
