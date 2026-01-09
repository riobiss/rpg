import rl from "../utils/readline"
import confirmExit from "../utils/confirmExit"
import createCharacter from "./createCharacter"
import selectWeapon from "./combat/selectWeapon"

export default async function menu() {
  process.stdout.write("\x1Bc")
  console.log(`Boas vindas ao ${`Shell RPG`}\n`)
  console.log(`${1} - Criar personagem`)
  console.log(`${2} - Auxilio de combate`)
  console.log(`${3} - Ver status`)
  console.log(`${4} - Sair`)
  let inputMenu: number | undefined

  while (inputMenu === undefined) {
    const value = Number(await rl.question("> "))

    if (Number.isNaN(value)) continue
    if (value < 1 || value > 4) continue

    inputMenu = value
  }

  if (inputMenu === 1) {
    await createCharacter()
  }
  if (inputMenu === 2) {
    await selectWeapon()
  }
  if (inputMenu === 3) {
    console.log("historia")
  }
  if (inputMenu === 4) {
    const shouldExit = await confirmExit()
    if (shouldExit) {
      rl.close()
      process.exit(0)
    }
  }
}
