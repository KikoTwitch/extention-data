export type Enclosure = {
  name: string;
};

export type EnclosureKey = keyof typeof enclosures;

const enclosures = {
  pasture: {
    name: "Pasture",
  },
  reptiles: {
    name: "Reptile Room",
  },
  parrots: {
    name: "Parrot Aviary",
  },
  crows: {
    name: "Crow Aviary",
  },
  chickens: {
    name: "Chicken Coop",
  },
  foxes: {
    name: "Fox Enclosure",
  },
  nutrition: {
    name: "Nutrition House",
  },
  critters: {
    name: "Critter Cave",
  },
} as const satisfies Record<string, Enclosure>;

const enclosureKeys = Object.keys(enclosures) as EnclosureKey[];

export const isEnclosureKey = (str: string): str is EnclosureKey =>
  enclosureKeys.includes(str as EnclosureKey);

export default enclosures;
