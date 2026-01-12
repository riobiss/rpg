import shields from "../data/shields"
import swords from "../data/swords"

export default [
  {
    alive: true,
    initiative: 5,
    name: "Goblin",
    damage: { rolls: 1, sides: 12 },
    health: 40,
    defense: 4,
    backpack: {
      weapons: [swords[0]],
      shield: [shields[0]],
    },
  },
  {
    alive: true,
    initiative: 1,
    name: "Ogro",
    damage: { rolls: 1, sides: 18 },
    health: 100,
    defense: 10,
    backpack: {
      weapons: [swords[1]],
      shield: [shields[1]],
    },
  },
  {
    alive: false,
    initiative: 0,
    name: "Golem",
    damage: { rolls: 1, sides: 14 },
    health: 80,
    defense: 15,
    backpack: {
      weapons: [swords[2]],
      shield: [shields[2]],
    },
  },
]
