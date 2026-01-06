import swords from "../data/swords"
export default [
  {
    name: "Cristo",
    health: 70,
    damage: {
      rolls: 2,
      sides: 12,
    },
    defense: 10,
    backpack: {
      swords: [swords[0]],
    },
  },
  {
    name: "Jonas",
    health: 50,
    damage: {
      rolls: 1,
      sides: 18,
    },
    defense: 3,
    backpack: {
      swords: [swords[2], swords[3]],
    },
  },
  {
    name: "Jales",
    health: 60,
    damage: {
      rolls: 1,
      sides: 14,
    },
    defense: 7,
    backpack: {
      swords: [swords[1]],
    },
  },
]
