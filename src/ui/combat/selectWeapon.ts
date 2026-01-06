import rl from "../../utils/readline"
import chooseCombatants from "./chooseCombatants"

export default async function selectWeapon() {
  const {
    attacker: {
      backpack: { swords },
    },
  } = await chooseCombatants()
  console.log(`\nCom qual arma vai atacar?`)

  swords.forEach((swords, index) => {
    const damage = swords.damage.base.map((dmg) => {
      return ` ${dmg.rolls}d${dmg.sides} ${dmg.type}`
    })
    console.log(
      `\n${index + 1} - ${swords.name}
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
  const answer = await rl.question("> ")
}
