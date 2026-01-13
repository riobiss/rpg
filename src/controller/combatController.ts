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
    await applyDamage(figthers)
  }
  const sword = character.backpack?.weapons?.[inputWeapon - 2]
  if (!sword) return
  await applyDamageWeapon(sword, figthers.target)
}
