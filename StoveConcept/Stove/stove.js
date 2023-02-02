import { StovePanel } from "../StovePanel/stove-panel.js";
import { KitchenRanges } from "../KitchenRanges/kitchen-ranges.js";
import { StoveOven } from "../StoveOven/stove-oven.js";

export class Stove {
  constructor() {
    this.color = "white";
    this.brand = "Notable";
    this.width = `${60}cm`;
    this.height = `${90}cm`;
    this.stovePanel = new StovePanel(5, 1);
    this.kitchenRange = new KitchenRanges(4);
    this.stoveOven = new StoveOven(1);
  }
}
