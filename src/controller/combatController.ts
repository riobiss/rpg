import applyDamage from "../game/attack/applyDamage"
import viewAttack from "../ui/combat/viewAttack"
import applyDamageWeapon from "../game/attack/applyDamageWeapon"
import type { Character } from "../types/Character"
import type { Combatants } from "../types/Combatants"

export default async function combatController(
  character: Character,
  target: Character,
  inputWeapon: number
) {
  const figthers: Combatants = { attacker: character, target }

  if (inputWeapon === 1) {
    const attackResult = await applyDamage(figthers)
    target = attackResult.target

    await viewAttack(attackResult)
  }
  const sword = character.backpack?.weapons?.[inputWeapon - 2]
  if (!sword) return
  const attackResult = await applyDamageWeapon(sword, figthers.target)
  target = attackResult.target
  await viewAttack(attackResult)
}
