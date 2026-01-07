import combatController from "../../controller/combatController"
import gameState from "../../game/play/gameState"
import rl from "../../utils/readline"
import chooseCombatants from "./chooseCombatants"

export default async function selectWeapon() {
  await chooseCombatants()
  const state = gameState
  console.log(`\nCom qual arma vai atacar?`)
  console.log("\n1 - Mão")
  state[0].backpack?.swords.forEach((swords, index) => {
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
  while (true) {
    const answer = Number(await rl.question("> "))
    if (answer === 1) {
      combatController()
    }
/*     if (answer === 2) {
      combatController(combatants) //tenho que passar a espada como parametro e fazer uma nova função
    } */
  }
}
