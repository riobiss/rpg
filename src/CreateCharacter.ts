import races from "./data/races.js"
import rl from "./utils/readline.js"

export default function createCharacter() {
  console.clear()
  rl.question("Escolha o nome do seu personagem: ", (answer: string) => {
    console.log(`Seja bem vindo ${answer}`)

    console.log(
      `Com qual raça você quer jogar?\nSelecione a raça para ver mais detalhes\n`
    )
    rl.question("> ", (answer: string) => {
      console.clear()
      races.map((race, index) => {
        return console.log(`- ${index + 1} ${race.name}`)
      })
      if (answer === "1") {
        return console.log("OI")
      }
    })
  })
}
