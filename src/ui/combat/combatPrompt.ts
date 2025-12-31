import player from "../../entities/player"
import enemy from "../../entities/enemy"
import rl from "../../utils/readline"
import chalk from "chalk"
import type { Player } from "../../types/playerType"
import fight from "../fight"

export default async function chooseCombatants(): Promise<{
  attacker: Player
  target: Player
}> {
  console.clear()
  console.log("Combatentes")
  player.forEach((player, index) => {
    console.log(`${chalk.yellow(index + 1)} - ${player.name}`)
  })
  const answerAttacker = Number(await rl.question("\nQuem vai atacar: "))
  const attacker = player[answerAttacker - 1]
  const { name, health, damage, defense } = attacker
  console.log(
    `Atacante - ${name}\nVida - ${health}\nDano - ${damage}\nDefesa - ${defense}`
  )
  console.log("\nAlvo: ")
  enemy.forEach((enemy, index) => {
    console.log(`${chalk.yellow(index + 1)} - ${enemy.name}`)
  })
  const answerTarget = Number(await rl.question("> "))
  const target = enemy[answerTarget - 1]
  console.log(
    `Alvo - ${target.name}\nVida - ${target.health}\nDano - ${target.damage}\nDefesa - ${target.defense}`
  )
  return { attacker, target }
}
