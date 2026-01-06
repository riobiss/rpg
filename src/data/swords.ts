export default [
  {
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
    name: "Espada Longa Real",
    weaponType: "espada-pesada",
    damage: {
      base: [{ rolls: 2, sides: 12, type: "cortante" }],
    },
    properties: {
      hand: "two",
      heavy: true,
      criticalChance: 0.15,
    },
    weight: "1,8kg / pesada",
    durability: 28,
    special: "ignora 1 ponto de armadura",
  },

  {
    name: "Espada Sombria",
    weaponType: "espada-curta",
    damage: {
      base: [
        { rolls: 1, sides: 18, type: "cortante" },
        { rolls: 1, sides: 8, type: "cortante" },
      ],
      extra: [
        {
          rolls: 1,
          sides: 6,
          type: "cortante",
          condition: "pelas costas",
        },
      ],
    },
    properties: {
      hand: "one",
      light: true,
      stealthy: true,
      criticalChance: 0.2,
    },
    weight: "1,1kg / leve",
    durability: 20,
  },

  {
    name: "Espada do Templário",
    weaponType: "espada-versátil",
    damage: {
      base: [{ rolls: 1, sides: 22, type: "cortante" }],
      versatile: [{ rolls: 1, sides: 16, type: "cortante" }],
    },
    properties: {
      hand: "one",
      criticalChance: 0.12,
    },
    weight: "1,4kg / média",
    durability: 35,
    special: "sem penalidade contra inimigos sagrados",
  },

  {
    name: "Espada Dracônica",
    weaponType: "espada-pesada-duas-maos",
    damage: {
      base: [
        { rolls: 2, sides: 10, type: "cortante" },
        { rolls: 1, sides: 12, type: "cortante" },
      ],
      extra: [{ rolls: 1, sides: 8, type: "fogo" }],
    },
    properties: {
      hand: "two",
      heavy: true,
      criticalChance: 0.18,
    },
    weight: "2,0kg / muito pesada",
    durability: 26,
  },
]
