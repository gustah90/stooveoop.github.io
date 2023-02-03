import { random_hex_color_code } from "../../Utils/utils.js";
import { Lighter } from "../Lighter/lighter.js";

export class StovePanel {
  constructor(lightersQuantity, lampOvenButtonQuantity, kitchenRange, stoveOven) {
    this.lightersQuantity = lightersQuantity;
    this.lampOvenButtonQuantity = lampOvenButtonQuantity;
    this.ovenButtonLampPressed = false;
    this.stoveLighters = [];
    this.lightersColors = [];
    this.lightersStoveTool = [];
    for (let index = 0; index < (this.lightersQuantity - 1); index++) {
      const stoveLighter = new Lighter(random_hex_color_code(), kitchenRange.stoveBurners[index]);
      this.stoveLighters.push(stoveLighter);
      this.lightersColors.push(stoveLighter.lighterColor);
      this.lightersStoveTool.push(stoveLighter.stoveTool);
    }
    const ovenLighter = new Lighter(random_hex_color_code(), stoveOven);
    this.stoveLighters.push(ovenLighter);
    this.lightersColors.push(ovenLighter.lighterColor);
    this.lightersStoveTool.push(ovenLighter.stoveTool);
  }

  fireUp(index) {
    this.stoveLighters[index].turnOn();
  }
  fireDown(index) {
    this.stoveLighters[index].turnOff();
  }
}
