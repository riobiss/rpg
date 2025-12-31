import chalk from "chalk"
import races from "../data/races"
import rl from "../utils/readline"

export default async function createCharacter() {
  console.clear()
  const answer = await rl.question("Escolha o nome do seu personagem: ")
  console.log(`Seja bem vindo ${answer}\n`)
  console.log(
    `Com qual raça você quer jogar?\nSelecione a raça para ver mais detalhes\n`
  )
  races.map((race, index) => {
    return console.log(`${chalk.yellow(index + 1)} - ${race.name}`)
  })
  const answerRace = await rl.question("> ")
}
