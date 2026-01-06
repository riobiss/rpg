import type { Swords } from "./Swords"

export type Character = {
  name: string
  health: number
  damage: {
    rolls: number
    sides: number
  }
  defense: number
  backpack?: {
    swords: Swords[]
  }
}
