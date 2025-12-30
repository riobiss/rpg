import player from "../../entities/player.js"
import enemy from "../../entities/enemy.js"
import rl from "../../utils/readline.js"
import chalk from "chalk"

export default function chooseCombatants() {
  console.clear()
  console.log("Combatentes")
  player.forEach((player, index) => {
    return console.log(`${chalk.blue(index + 1)} - ${player.name}`)
  })
  rl.question("\nQuem vai atacar: ", (answer: string) => {
    const ans = Number(answer)
    const attacker = player[ans - 1]
    console.log(
      `Atacante - ${attacker.name}\nVida - ${attacker.health}\nDano - ${attacker.damage}\nDefesa - ${attacker.defense}`
    )
    console.log("\nAlvo: ")
    enemy.forEach((enemy, index) => {
      return console.log(`${index + 1} - ${enemy.name}`)
    })
    rl.question("> ", (answer: string) => {
      const ans = Number(answer)
      const target = enemy[ans - 1]
      console.log(
        `Alvo - ${target.name}\nVida - ${target.health}\nDano - ${target.damage}\nDefesa - ${target.defense}`
      )
      return { attacker, target }
    })
  })
}
