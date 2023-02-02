import { TurnOnLamp } from "../TurnOnLamp/turn-on-lamp.js";

export class OvenLamp extends TurnOnLamp {
  constructor(lampQuantity) {
    super();
    this.lampQuantity = lampQuantity;
  }
}
