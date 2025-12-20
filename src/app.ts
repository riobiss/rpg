import rl from "./utils/readline"
import confirmExit from "./utils/confirmExit"
function menu() {
  console.clear()
  console.log(`Boas vindas ao meu RPG\n`)

  setTimeout(() => {
    console.log("1 - Criar personagem")
    console.log("2 - Ver status")
    console.log("3 - Sair")

    rl.question("> ", (answer) => {
      if (answer !== "1" && answer !== "2" && answer !== "3") {
        console.clear()
        console.log("Opção invalida")
        setTimeout(() => {
          menu()
        }, 1000)
      }
      if (answer === "1") {
        console.log("Criando personagem")
      }
      if (answer === "2") {
        console.log("historia")
      }
      if (answer === "3") {
        confirmExit(menu)
      }
    })
  }, 2000)
}
export default menu
