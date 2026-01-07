import player from "../../entities/player"
import enemy from "../../entities/enemy"
import rl from "../../utils/readline"
import chalk from "chalk"
import type { Character } from "../../types/Character"
import gameState from "../../game/play/gameState"

export default async function chooseCombatants(): Promise<{
  attacker: Character
  target: Character
}> {
  console.clear()
  console.log("Combatentes")
  player.forEach((player, index) => {
    console.log(`${chalk.yellow(index + 1)} - ${player.name}`)
  })
  const answerAttacker = Number(await rl.question("\nQuem vai atacar: "))
  const attacker = player[answerAttacker - 1]
  const {
    name: nameAttacker,
    health: healthAttacker,
    damage: damageAttacker,
    defense: defenseAttacker,
  } = attacker
  console.log(
    `Atacante - ${nameAttacker}\nVida - ${healthAttacker}\nDano - ${damageAttacker.rolls}d${damageAttacker.sides}\nDefesa - ${defenseAttacker}`
  )

  console.log("\nAlvo: ")
  enemy.forEach((enemy, index) => {
    console.log(`${chalk.yellow(index + 1)} - ${enemy.name}`)
  })
  const answerTarget = Number(await rl.question("> "))
  const target = enemy[answerTarget - 1]
  const {
    name: nameTarget,
    health: healthTarget,
    damage: damageTarget,
    defense: defenseTarget,
  } = target
  console.log(
    `\nAlvo - ${nameTarget}\nVida - ${healthTarget}\nDano - ${damageTarget.rolls}d${damageTarget.sides}\nDefesa - ${defenseTarget}`
  )
  gameState.push(attacker, target)
  return { attacker, target }
}
