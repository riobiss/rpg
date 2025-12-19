import { createInterface } from "readline"
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

function app() {
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
          app()
        }, 1000)
      }
      if (answer === "1") {
        console.log("Criando personagem")
      }
    })
  }, 2000)
}
export default app
