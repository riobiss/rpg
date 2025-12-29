import rl from "./utils/readline.js"
import confirmExit from "./utils/confirmExit.js"
import createCharacter from "./CreateCharacter.js"
import chalk from "chalk"

function app() {
  console.clear()
  console.log(`Boas vindas ao ${chalk.blue(`Shell RPG`)}\n`)
  setTimeout(() => {
    console.log("1 - Criar personagem")
    console.log("2 - Ver status")
    console.log("3 - Sair")

    rl.question("> ", (answer) => {
      if (answer !== "1" && answer !== "2" && answer !== "3") {
        console.clear()
        console.log("Opção invalida")
        setTimeout(() => {
          app()
        }, 1000)
      }
      if (answer === "1") {
        createCharacter()
      }
      if (answer === "2") {
        console.log("historia")
      }
      if (answer === "3") {
        confirmExit(app)
      }
    })
  }, 1000)
}
export default app
