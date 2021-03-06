import {AbstractCommerce} from "./AbstractCommerce";

const gardeningSuppliesData = {
  grass: {
    time: "25m30s",
    requires: {
      seeds: 1,
      shovel: 1
    }
  },
  firePit: {
    time: "3h24m",
    requires: {
      bricks: 2,
      shovel: 1,
      cement: 2
    }
  },
  treeSaplings: {
    time: "1h16m",
    requires: {
      seeds: 1,
      shovel: 1
    }
  },
  lawnMower: {
    time: "1h42m",
    requires: {
      metal: 3,
      paint: 1,
      electronicalComponents: 1
    }
  },
  gardenFurniture: {
    time: "1h54m",
    requires: {
      planks: 2,
      plastic: 2,
      textiles: 2
    }
  },
  gardenGnomes: {
    time: "1h16m",
    requires: {
      cement: 2,
      glue: 1
    }
  }
};

export const products = Object.keys(gardeningSuppliesData);

export type GardeningSuppliesProducts = keyof typeof gardeningSuppliesData;

export class GardeningSupplies extends AbstractCommerce<
  GardeningSuppliesProducts
> {
  protected productsData = gardeningSuppliesData;
}
