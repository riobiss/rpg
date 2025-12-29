import rl from "./utils/readline.js"
import confirmExit from "./utils/confirmExit.js"
import createCharacter from "./CreateCharacter.js"
import chalk from "chalk"
import combat from "./combat/combat.js"

function app() {
  console.clear()
  console.log(`Boas vindas ao ${chalk.blue(`Shell RPG`)}\n`)
  setTimeout(() => {
    console.log("1 - Criar personagem")
    console.log("2 - Auxilio de combate")
    console.log("3 - Ver status")
    console.log("4 - Sair")
    rl.question("> ", (answer: string) => {
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
        combat()
      }
      if (answer === "3") {
        console.log("historia")
      }
      if (answer === "4") {
        confirmExit(app)
      }
    })
  }, 1000)
}
export default app
