import {ProductionUnit} from "./ProductionUnit";
import {ProductionPlanner} from "./ProductionPlanner";
import {Production} from "./Production";

let unit: Production;
let planner: ProductionPlanner;

beforeEach(() => {
  planner = new ProductionPlanner();
  unit = new ProductionUnit(planner);
});

test("Should produce common factory product", () => {
  expect(unit.produce("metal", 1, 0)).toEqual({ time: 60 });
});

test("Should produce coconut factory product", () => {
  expect(unit.produce("coconut", 1, 0)).toEqual({ time: 360 });
});

test("Should produce frosty fjords factory product", () => {
  expect(unit.produce("fish", 1, 0)).toEqual({ time: 360 });
});

test("Should produce oil plant factory product", () => {
  expect(unit.produce("crudeOil", 1, 0)).toEqual({ time: 360 });
});

test("Should produce white mountains factory product", () => {
  expect(unit.produce("silk", 1, 0)).toEqual({ time: 360 });
});

test("Should produce building supplies product", () => {
  expect(unit.produce("nails", 1, 0)).toEqual({ time: 300 });
});

test("Should produce car parts product", () => {
  expect(unit.produce("carTire", 1, 0)).toEqual({ time: 16560 });
});

test("Should produce donut shop product", () => {
  expect(unit.produce("coffee", 1, 0)).toEqual({ time: 28620 });
});

test("Should produce farmers market product", () => {
  expect(unit.produce("cheese", 1, 0)).toEqual({ time: 26940 });
});

test("Should produce fashion store product", () => {
  expect(unit.produce("watch", 1, 0)).toEqual({ time: 22860 });
});

test("Should produce fast food product", () => {
  expect(unit.produce("pizza", 1, 0)).toEqual({ time: 35856 });
});

test("Should produce fish market product", () => {
  expect(unit.produce("fish", 1, 0)).toEqual({ time: 360 });
});

test("Should produce furniture store product", () => {
  expect(unit.produce("chairs", 1, 0)).toEqual({ time: 1872 });
});

test("Should produce gardening product", () => {
  expect(unit.produce("gardenGnomes", 1, 0)).toEqual({ time: 19440 });
});

test("Should produce hardware store product", () => {
  expect(unit.produce("hammer", 1, 0)).toEqual({ time: 852 });
});

test("Should produce home appliances product", () => {
  expect(unit.produce("tv", 10, 0)).toEqual({ time: 115200 });
});

test("Should produce silk market product", () => {
  expect(unit.produce("bathrobe", 1, 0)).toEqual({ time: 26100 });
});

test("Should produce tropical product", () => {
  expect(unit.produce("tropicalDrink", 1, 0)).toEqual({ time: 27660 });
});

test("Should planner be correctly invoked #1", () => {
  spyOn(planner, "collectItem");
  unit.produce("metal", 1, 0);
  expect(planner.collectItem).toHaveBeenCalledWith("metal", 60);
});

test("Should planner be correctly invoked #2", () => {
  spyOn(planner, "collectItem");
  unit.produce("hammer", 1, 0);
  expect(planner.collectItem).toHaveBeenCalledWith("metal", 60);
  expect(planner.collectItem).toHaveBeenCalledWith("wood", 180);
  expect(planner.collectItem).toHaveBeenCalledWith("hammer", 852);
});

test("Planner should correctly generate production plan", () => {
  unit.produce("tv", 10, 0);
  expect(planner.getPlanItems()).toEqual([
    {
      product: "plastic",
      type: "collect",
      quantity: 20,
      time: 1080
    },
    {
      product: "glass",
      type: "collect",
      quantity: 20,
      time: 18540
    },
    {
      product: "electronicalComponents",
      type: "collect",
      quantity: 20,
      time: 25740
    },
    {
      product: "tv",
      type: "collect",
      quantity: 10,
      time: 115200
    }
  ]);
});
