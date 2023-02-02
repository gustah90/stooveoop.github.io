import { StoveBurner } from "../StoveBurner/stove-burner.js";

export class KitchenRanges {
  constructor(burnersQuantity) {
    this.stoveBurners = [];
    this.burnersQuantity = burnersQuantity;
    for (let index = 0; index < burnersQuantity; index++) {
      const stoveBurner = new StoveBurner(index);
      this.stoveBurners.push(stoveBurner);
    }
  }
}
