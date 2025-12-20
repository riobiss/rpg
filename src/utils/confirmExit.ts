import rl from "./readline"
export default function confirmExit(menu: Function) {
  console.clear()
  console.log("Tem certeza que quer fechar o programa?")
  console.log("1 - cancelar")
  console.log("2 - fechar programa")

  rl.question("> ", (answer) => {
    if (answer !== "1" && answer !== "2") {
      console.clear()
      console.log("Resposta inválida")

      setTimeout(() => {
        menu()
      }, 1000)
    }
    if (answer === "1") {
      menu()
    }
    if (answer === "2") {
      rl.close()
    }
  })
}
