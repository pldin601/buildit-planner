import {Commerce} from "../Commerce";
import {AllProducts, Production} from "../Production";
import {latestPromise, ProductionPromise} from "../Factory";
import convertTime from "../convertTime";

export type Requires = Partial<
  {
    [K in AllProducts]: number;
  }
>;

export type CommerceProductsData<Product extends string> = {
  [K in Product]: {
    time: string;
    requires: Requires;
  };
};

export abstract class AbstractCommerce<Product extends string>
  implements Commerce<Product> {
  protected abstract productsData: CommerceProductsData<Product>;

  private queueTime: number = 0;

  constructor(private production: Production) {}

  public produce(product: Product, startTime: number): ProductionPromise {
    if (!this.canProduce(product)) {
      throw new Error(`This factory doesn't produce ${product}`);
    }

    const { time, requires } = this.productsData[product];

    // Produce Requirements
    const promise = latestPromise(
      Object.entries(requires).map(([prod, qty]) =>
        this.production.produce((prod as any) as AllProducts, qty as number)
      )
    );

    // Produce Item
    const max = Math.max(promise.time, startTime);
    this.queueTime = max + convertTime(time);

    return {
      time: this.queueTime
    };
  }

  canProduce(product: string): product is Product {
    return product in this.productsData;
  }

  getQueueTime(): number {
    return this.queueTime;
  }
}