const recipes = new Map([
  [
    "Workbench",
    [
      {
        Stone: 10,
        Wood: 20,
        Flax: 8,
      },
      {
        "Copper Ingot": 10,
        Wood: 20,
        Flax: 8,
      },
    ],
  ],
  [
    "Furnace",
    [
      {
        Stone: 20,
        Wood: 5,
        Flax: 2,
      },
      {
        Stone: 20,
        Wood: 5,
        Flax: 2,
      },
    ],
  ],
  [
    "Spear",
    [
      {
        Stone: 2,
        Wood: 4,
        Flax: 2,
      },
    ],
  ],
  [
    "Pickaxe",
    [
      {
        Stone: 5,
        Wood: 3,
        Flax: 2,
      },
    ],
  ],
  [
    "Axe",
    [
      {
        Stone: 3,
        Wood: 4,
        Flax: 3,
      },
    ],
  ],
  [
    "Sickle",
    [
      {
        Stone: 4,
        Wood: 1,
        Flax: 3,
      },
    ],
  ],
  [
    "Bow",
    [
      {
        Stone: 1,
        Wood: 4,
        Flax: 8,
      },
    ],
  ],
  [
    "Copper Ingot",
    {
      Copper: 2,
    },
  ],
  [
    "Bronze Ingot",
    {
      Copper: 2,
      Tin: 1,
    },
  ],
]);

const setup = new Map([
  [
    "stations",
    [
      {
        name: "Workbench",
        unlock: "",
        expand: "",
        tier: 0,
      },
      {
        name: "Furnace",
        unlock: "Pickaxe0",
        expand: "",
        tier: -1,
      },
    ],
  ],
  [
    "items",
    [
      {
        name: "Stone",
        count: 0,
        unlock: "",
        expand: "Mine",
        region: "Mine",
        tier: 1,
      },
      {
        name: "Copper",
        count: 0,
        unlock: "Pickaxe0",
        expand: "Mine",
        region: "Mine",
        tier: 0,
      },
      {
        name: "Copper Ingot",
        count: 0,
        region: "Furnace",
        tier: 0,
      },
      {
        name: "Bronze Ingot",
        count: 0,
        region: "Furnace",
        tier: 1,
      },
      {
        name: "Tin",
        count: 0,
        unlock: "Pickaxe1",
        expand: "Mine",
        region: "Mine",
        tier: 0,
      },
      {
        name: "Iron",
        count: 0,
        unlock: "Pickaxe2",
        expand: "Mine",
        region: "Mine",
        tier: 0,
      },
      {
        name: "Coal",
        count: 0,
        unlock: "Pickaxe3",
        expand: "Mine",
        region: "Mine",
        tier: 0,
      },
      {
        name: "Mythril",
        count: 0,
        unlock: "Pickaxe4",
        expand: "Mine",
        region: "Mine",
        tier: 0,
      },
      {
        name: "Wood",
        count: 0,
        unlock: "",
        expand: "Mill",
        region: "Forest",
        tier: 1,
      },
      {
        name: "Hardwood",
        count: 0,
        unlock: "Axe1",
        expand: "Mill",
        region: "Forest",
        tier: 0,
      },
      {
        name: "Ironwood",
        count: 0,
        unlock: "Axe3",
        expand: "Mill",
        region: "Forest",
        tier: 0,
      },
      {
        name: "Flax",
        count: 0,
        unlock: "",
        expand: "Farm",
        region: "Forest",
        tier: 1,
      },
      {
        name: "Linen",
        count: 0,
        unlock: "Sickle1",
        expand: "Farm",
        region: "Forest",
        tier: 0,
      },
      {
        name: "Silk",
        count: 0,
        unlock: "Sickle3",
        expand: "Farm",
        region: "Forest",
        tier: 0,
      },
    ],
  ],
  [
    "tools",
    [
      {
        name: "Spear",
        item: "meat",
        tier: 0,
      },
      {
        name: "Pickaxe",
        item: "stone",
        tier: 0,
      },
      {
        name: "Axe",
        item: "wood",
        tier: 0,
      },
      {
        name: "Sickle",
        item: "flax",
        tier: 0,
      },
      {
        name: "Bow",
        item: "meat",
        tier: 0,
      },
    ],
  ],
  [
    "enemies",
    [
      {
        name: "Goblin",
        tier: 0,
        active: false,
      },
    ],
  ],
]);

export default recipes;
export { recipes, setup };
