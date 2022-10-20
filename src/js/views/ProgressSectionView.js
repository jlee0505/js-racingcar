import { DOM, CAR_STATE } from "../constants.js";

class ProgressSectionView {
  constructor(target) {
    this.$target = target;
  }

  render(cars) {
    this.$target.insertAdjacentHTML = cars
      .map((car) => this.createResultTemplate(car.name, car.states))
      .join("");
  }

  createResultTemplate(name, states) {
    return String.raw`
      <div class="mr-2">
        <div class="car-player">${name}</div>
        ${states
          .map((state) =>
            result === CAR_STATE.FORWARD ? this.createCarForwardTemplate() : ""
          )
          .join("")}
      </div>
    `;
  }

  createCarForwardTemplate() {
    return String.raw`<div class="${DOM.PLAY_SECTION.FORWARD_ICON} mt-2"⬇</div>`;
  }
}

export default ProgressSectionView;
