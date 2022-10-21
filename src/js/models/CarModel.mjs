import { CAR_STATE } from "../../constants.js";

class Car {
  name;
  states;

  constructor(name) {
    this.name = name;
    this.states = [];
  }

  get forwardCount() {
    return this.states.filter((state) => state === CAR_STATE.FORWARD).length;
  }
}

export default Car;
