import races from "./data/races"
import rl from "./utils/readline"

export default class CreateCharacter {
  name: string
  race: RaceInteface
  setName() {
    console.clear()
    console.log("Qual vai ser o  nome do seu personagem?")
    rl.question("> ", (answer) => {
      this.name = answer
    })
  }
  setRaces() {
    console.clear()
    console.log(
      `Com qual raça você quer jogar?\nselecione a raça para ver mais detalhes\n`
    )
    races.map((race, index) => {
      return console.log(`${index + 1} - ${race.name}`)
    })
    rl.question("> ", (answer) => {
      if (answer === "1") {
        this.race = races[0]
        console.log(this.race)
      }
    })
  }
}
