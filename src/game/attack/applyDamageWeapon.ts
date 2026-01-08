import type { Character } from "../../types/Character"
import type { Swords } from "../../types/Swords"
import dice from "../dice/dice"

export default async function applyDamageWeapon(weapon: Swords, target: Character) {
  const dicesWeapon = weapon.damage.base

  const diceRolls: number[] = []
  let WeaponDamage = 0
  for (const weaponItem of dicesWeapon) {
    const rollsResult = dice({
      rolls: weaponItem.rolls,
      sides: weaponItem.sides,
    })
    WeaponDamage += rollsResult
    diceRolls.push(rollsResult)
  }

  const roll = dice({ rolls: 1, sides: 20 })
  if (roll < 14) {
    return {
      target,
      roll,
      diceRolls,
      damage: 0,
    }
  }
  if (roll === 20) {
    WeaponDamage *= 2
  }

  const effectiveDamage = Math.max(WeaponDamage - target.defense, 0)

  const newHealth = target.health - effectiveDamage

  return {
    target: {
      ...target,
      health: newHealth,
    },
    roll,
    diceRolls,
    damage: effectiveDamage,
  }
}
