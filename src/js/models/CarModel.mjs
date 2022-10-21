import { GAME } from "../constants.js";

class CarModel {
  name;
  states;

  constructor(name) {
    this.name = name;
    this.states = [];
  }

  get forwardCount() {
    return this.states.filter((state) => state === GAME.FORWARD).length;
  }
}

export default CarModel;
