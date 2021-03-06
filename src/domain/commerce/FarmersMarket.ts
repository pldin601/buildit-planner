import {AbstractCommerce} from "./AbstractCommerce";

const farmersMarketData = {
  beef: {
    time: "2h7m",
    requires: {
      animalFeed: 3
    }
  },
  vegetables: {
    time: "17m",
    requires: {
      seeds: 2
    }
  },
  cream: {
    time: "1h3m",
    requires: {
      animalFeed: 1
    }
  },
  flourBag: {
    time: "25m30s",
    requires: {
      seeds: 2,
      textiles: 2
    }
  },
  corn: {
    time: "51m",
    requires: {
      minerals: 1,
      seeds: 4
    }
  },
  fruitAndBerries: {
    time: "1h16m",
    requires: {
      seeds: 2,
      treeSaplings: 1
    }
  },
  cheese: {
    time: "1h29m",
    requires: {
      animalFeed: 2
    }
  }
};

export const products = Object.keys(farmersMarketData);

export type FarmersMarketProducts = keyof typeof farmersMarketData;

export class FarmersMarket extends AbstractCommerce<FarmersMarketProducts> {
  protected productsData = farmersMarketData;
}
