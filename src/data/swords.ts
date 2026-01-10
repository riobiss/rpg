export default [
  {
    id: 1,
    name: "Espada do Cavaleiro de Ferro",
    weaponType: "espada-longa",
    damage: {
      base: [
        { rolls: 1, sides: 20, type: "cortante" },
        { rolls: 1, sides: 10, type: "cortante" },
      ],
    },
    properties: {
      hand: "one",
      versatile: { rolls: 1, sides: 12 },
      criticalChance: 0.1,
    },
    weight: "1,3kg / média",
    durability: 30,
    special: "bônus de +2 em ataques defensivos",
  },
  {
    id: 2,
    name: "Espada do Cavaleiro da Aurora",
    weaponType: "espada-longa",
    damage: {
      base: [
        { rolls: 1, sides: 18, type: "cortante" },
        { rolls: 1, sides: 8, type: "cortante" },
      ],
    },
    properties: {
      hand: "one",
      versatile: { rolls: 1, sides: 12 },
      criticalChance: 0.1,
    },
    weight: "1,2kg / média",
    durability: 28,
    special: "bônus de +1 em ataques defensivos",
  },

  {
    id: 3,
    name: "Espada do Cavaleiro Negro",
    weaponType: "espada-longa",
    damage: {
      base: [
        { rolls: 1, sides: 22, type: "cortante" },
        { rolls: 1, sides: 6, type: "cortante" },
      ],
    },
    properties: {
      hand: "one",
      versatile: { rolls: 1, sides: 12 },
      criticalChance: 0.1,
    },
    weight: "1,4kg / média",
    durability: 32,
    special: "bônus de +2 em ataques contra inimigos armados",
  },

  {
    id: 4,
    name: "Espada do Cavaleiro Escarlate",
    weaponType: "espada-longa",
    damage: {
      base: [
        { rolls: 1, sides: 20, type: "cortante" },
        { rolls: 1, sides: 10, type: "cortante" },
      ],
    },
    properties: {
      hand: "one",
      versatile: { rolls: 1, sides: 12 },
      criticalChance: 0.1,
    },
    weight: "1,3kg / média",
    durability: 26,
    special: "bônus de +2 no primeiro ataque do combate",
  },

  {
    id: 5,
    name: "Espada do Cavaleiro Real",
    weaponType: "espada-longa",
    damage: {
      base: [
        { rolls: 1, sides: 19, type: "cortante" },
        { rolls: 1, sides: 9, type: "cortante" },
      ],
    },
    properties: {
      hand: "one",
      versatile: { rolls: 1, sides: 12 },
      criticalChance: 0.1,
    },
    weight: "1,3kg / média",
    durability: 34,
    special: "bônus de +2 em testes de bloqueio",
  },
]
