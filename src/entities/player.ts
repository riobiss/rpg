import swords from "../data/swords"
export default [
  {
    alive: true,
    initiative: 0,
    name: "Cristo",
    health: 70,
    damage: {
      rolls: 4,
      sides: 12,
    },
    defense: 10,
    backpack: {
      weapons: [swords[0]],
    },
  },
  {
    alive: true,
    initiative: 0,
    name: "Jonas",
    health: 50,
    damage: {
      rolls: 1,
      sides: 18,
    },
    defense: 3,
    backpack: {
      weapons: [swords[2], swords[3]],
    },
  },
  {
    alive: true,
    initiative: 4,
    name: "Jales",
    health: 60,
    damage: {
      rolls: 1,
      sides: 14,
    },
    defense: 7,
    backpack: {
      weapons: [swords[1]],
    },
  },
]
