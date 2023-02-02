export class Lighter {
  constructor(color, id, stoveTool) {
    this.lighterColor = color;
    this.turnedOn = false;
    this.id = id;
    this.stoveTool = stoveTool;
  }
  turnOn(index) {
    this.id = index;
    this.turnedOn = true;
  }
  turnOff(index) {
    this.id = index;
    this.turnedOn = false;
  }
}
