import rl from "./utils/readline"
import confirmExit from "./utils/confirmExit"
import CreateCharacter from "./CreateCharacter"
function menu() {
  const createCharacter = new CreateCharacter()
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
        createCharacter.setRaces()
      }
      if (answer === "2") {
        console.log("historia")
      }
      if (answer === "3") {
        confirmExit(menu)
      }
    })
  }, 1000)
}
export default menu
