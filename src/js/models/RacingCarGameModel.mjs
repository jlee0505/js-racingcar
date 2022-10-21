class RacingCarGameModel {
  cars;
  count;

  constructor() {
    this.cars = [];
    this.count = 0;
  }

  get winnerCars() {
    const maxForward = Math.max(...this.cars.map((car) => car.forwardCount));
    return this.cars
      .filter((car) => car.forwardCount === maxForward)
      .map((car) => car.name);
  }
}

export default RacingCarGameModel;
