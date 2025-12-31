import rl from "../utils/readline"
import confirmExit from "../utils/confirmExit"
import createCharacter from "./createCharacter"
import chalk from "chalk"
import combat from "../services/combat"

export default async function menu() {
  process.stdout.write("\x1Bc")
  console.log(`Boas vindas ao ${chalk.bold.blue(`Shell RPG`)}\n`)
  console.log(`${chalk.yellow(1)} - Criar personagem`)
  console.log(`${chalk.yellow(2)} - Auxilio de combate`)
  console.log(`${chalk.yellow(3)} - Ver status`)
  console.log(`${chalk.yellow(4)} - Sair`)
  const answer = await rl.question("> ")

  if (answer === "1") {
    await createCharacter()
  }
  if (answer === "2") {
    await combat()
  }
  if (answer === "3") {
    console.log("historia")
  }
  if (answer === "4") {
    const shouldExit = await confirmExit()
    if (shouldExit) {
      rl.close()
      process.exit(0)
    }
  }
}
