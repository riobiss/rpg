import rl from "./readline"

export default async function confirmExit() {
  console.clear()
  console.log("Tem certeza que quer fechar o programa?")
  console.log(`${1} - cancelar`)
  console.log(`${2} - fechar programa`)
  const answer = await rl.question(">")
  if (answer === "2") return true
  return false
}
