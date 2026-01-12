import type { Shields } from "./Shields"
import type { Swords } from "./Swords"

export type Character = {
  alive: boolean
  initiative: number
  name: string
  health: number
  damage: {
    rolls: number
    sides: number
  }
  defense: number
  backpack?: {
    weapons?: Swords[]
    shields?: Shields[]
  }
}
