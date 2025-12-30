import rl from "../utils/readline.js"
import confirmExit from "../utils/confirmExit.js"
import createCharacter from "./createCharacter.js"
import chalk from "chalk"
import combat from "./combat/combatPrompt.js"

export default async function menu() {
  while (true) {
     process.stdout.write("\x1Bc")
    console.log(`Boas vindas ao ${chalk.bold.blue(`Shell RPG`)}\n`)
    console.log(`${chalk.yellow(1)} - Criar personagem`)
    console.log(`${chalk.yellow(2)} - Auxilio de combate`)
    console.log(`${chalk.yellow(3)} - Ver status`)
    console.log(`${chalk.yellow(4)} - Sair`)
    const answer = await rl.question("> ")

    if (answer === "1") {
      await createCharacter()
      continue
    }
    if (answer === "2") {
      await combat()
      continue
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
      continue
    }
  }
}
