import player from "../../entities/player.js"
import enemy from "../../entities/enemy.js"
import rl from "../../utils/readline.js"
import chalk from "chalk"

export default async function chooseCombatants() {
  console.clear()
  console.log("Combatentes")
  player.forEach((player, index) => {
    return console.log(`${chalk.blue(index + 1)} - ${player.name}`)
  })
  const answerAttacker = Number(await rl.question("\nQuem vai atacar: "))
  const attacker = player[answerAttacker - 1]
  const { name, health, damage, defense } = attacker
  console.log(
    `Atacante - ${name}\nVida - ${health}\nDano - ${damage}\nDefesa - ${defense}`
  )
  console.log("\nAlvo: ")
  enemy.forEach((enemy, index) => {
    return console.log(`${index + 1} - ${enemy.name}`)
  })
  const answerTarget = Number(await rl.question("> "))
  const target = enemy[answerTarget - 1]
  console.log(
    `Alvo - ${target.name}\nVida - ${target.health}\nDano - ${target.damage}\nDefesa - ${target.defense}`
  )
}
