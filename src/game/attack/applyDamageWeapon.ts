import type { Swords } from "../../types/Swords"
import dice from "../dice/dice"

export default async function applyDamageWeapon(weapon: Swords) {
    
  const dicesWeapon = weapon.damage.base
  dicesWeapon.forEach((weaponItem) => {
    const damageWeapon = dice({
      rolls: weaponItem.rolls,
      sides: weaponItem.sides,
    })
    console.log(damageWeapon)
  })
}
