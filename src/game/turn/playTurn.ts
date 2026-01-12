import type { Character } from "../../types/Character"
import selectWeapon from "../../ui/combat/selectWeapon"
import selectTarget from "../play/selectTarget"

export default async function playTurn(character: Character) {
  const target = await selectTarget(character)
  await selectWeapon(character, target)
}
