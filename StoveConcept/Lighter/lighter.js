export class Lighter {
  constructor(color, stoveTool) {
    this.lighterColor = color;
    this.turnedOn = false;
    this.stoveTool = stoveTool;
  }
  turnOn() {
    this.turnedOn = true;
    this.stoveTool.fireUp();
  }
  turnOff() {
    this.turnedOn = false;
    this.stoveTool.fireDown();
  }
}
