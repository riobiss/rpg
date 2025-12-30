import rl from "./readline.js"
import chalk from "chalk"

export default async function confirmExit() {
  console.clear()
  console.log("Tem certeza que quer fechar o programa?")
  console.log(`${chalk.yellow(1)} - cancelar`)
  console.log(`${chalk.yellow(2)} - fechar programa`)
  const answer = await rl.question(">")
  if (answer === "2") return true
  return false
}
