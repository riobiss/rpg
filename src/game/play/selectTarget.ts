import enemy from "../../entities/enemy"
import player from "../../entities/player"
import type { Character } from "../../types/Character"
import rl from "../../utils/readline"

export default async function selectTarget(character: Character) {
  const aliveEntity: Character[] = []

  enemy.forEach((e) => {
    if (e.alive) {
      aliveEntity.push(e)
    }
  })
  player.forEach((p) => {
    if (p.alive) {
      aliveEntity.push(p)
    }
  })

  aliveEntity.forEach((e, i) => {
    console.log(`${i + 1} - ${e.name} (${e.health} HP) (${e.defense} DEF)`)
  })
  const input = Number(await rl.question(`${character.name}, Qual seu alvo? `))
  const target = aliveEntity[input - 1]
  return target
}
