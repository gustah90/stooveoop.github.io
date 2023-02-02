import { Lighter } from "../Lighter/lighter.js";
import { OvenLamp } from "./OvenLamp/oven-lamp.js";
import { OvenGlass } from "./OvenGlass/oven-glass.js";

export class StoveOven extends Lighter {
  constructor(quantity) {
    super();
    this.ovenQuantity = quantity;
    this.lamp = new OvenLamp(1);
    this.ovenGlass = new OvenGlass(`${50}cm`, `${50}cm`);
  }
}
