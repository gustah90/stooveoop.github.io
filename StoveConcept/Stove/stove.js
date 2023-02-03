import { StovePanel } from "../StovePanel/stove-panel.js";
import { KitchenRanges } from "../KitchenRanges/kitchen-ranges.js";
import { StoveOven } from "../StoveOven/stove-oven.js";

export class Stove {
  constructor(stoveParams) {
    this.color = stoveParams.color;
    this.brand = stoveParams.brand;
    this.width = stoveParams.width;
    this.height = stoveParams.height;
    this.kitchenRange = new KitchenRanges(4);
    this.stoveOven = new StoveOven(1);
    this.stovePanel = new StovePanel(5, 1, this.kitchenRange, this.stoveOven);
  }
}
