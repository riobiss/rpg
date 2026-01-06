import type { DiceRoll } from "../../types/DiceRoll"

export default function dice({ rolls, sides, modifier = 0 }: DiceRoll): number {
  let total = modifier

  for (let i = 0; i < rolls; i++) {
    total += Math.floor(Math.random() * sides) + 1
  }

  return total
}
