import combatController from "../../controller/combatController"
import type { Character } from "../../types/Character"
import rl from "../../utils/readline"

export default async function selectWeapon(
  character: Character,
  target: Character
) {
  console.log(`\nCom qual arma vai atacar o ${target.name}?`)
  console.log("\n1 - Mão")
  character.backpack?.weapons?.forEach((swords, index) => {
    const damage = swords.damage.base.map((dmg) => {
      return ` ${dmg.rolls}d${dmg.sides} ${dmg.type}`
    })
    console.log(
      `\n${index + 2} - ${swords.name}
      Dano:${damage}
      Tipo: ${swords.weaponType}
      Propriedades: Mão ${swords.properties.hand}, Versatilidade ${
        swords.properties.versatile.rolls
      }d${swords.properties.versatile.sides}, Crítico ${
        swords.properties.criticalChance
      }
      Peso: ${swords.weight}
      Durabilidade: ${swords.durability}
      Especial: ${swords.special}
      `
    )
  })

  const answer = Number(await rl.question("> "))
  await combatController(character, target, answer)
}
