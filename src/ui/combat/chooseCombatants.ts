import player from "../../entities/player"
import enemy from "../../entities/enemy"
import rl from "../../utils/readline"
import type { Character } from "../../types/Character"
import gameState from "../../game/play/gameState"

export default async function chooseCombatants(): Promise<{
  attacker: Character
  target: Character
}> {
  console.clear()
  console.log("Combatentes")
  player.forEach((player, index) => {
    console.log(`${index + 1} - ${player.name}`)
  })

  let attacker: Character | undefined
  console.log("\nAtacante: ")

  while (!attacker) {
    const inputAttacker = Number(await rl.question("> "))

    if (Number.isNaN(inputAttacker)) continue

    attacker = player[inputAttacker - 1]
  }
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
    console.log(`${index + 1} - ${enemy.name}`)
  })

  let target: Character | undefined
  while (!target) {
    const inputTarget = Number(await rl.question("> "))
    if (Number.isNaN(inputTarget)) continue
    target = enemy[inputTarget - 1]
  }

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
