import applyDamage from "../game/attack/applyDamage"
import type { Combatants } from "../types/Combatants"
import viewAttack from "../ui/combat/viewAttack"
import gameState from "../game/play/gameState"
import applyDamageWeapon from "../game/attack/applyDamageWeapon"

export default async function combatController(weapon: number) {
  const figthers: Combatants = {
    attacker: gameState[0],
    target: gameState[1],
  }
  if (weapon === 1) {
    const attackResult = await applyDamage(figthers)
    gameState[1] = attackResult.target

    await viewAttack(attackResult)
  }
  const sword = figthers.attacker.backpack?.swords[weapon - 2]
  if (!sword) return
  const attackResult = await applyDamageWeapon(sword, figthers.target)
  gameState[1] = attackResult.target
  await viewAttack(attackResult)
}
