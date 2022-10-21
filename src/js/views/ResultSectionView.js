import { DOM } from "../constants.js";
import RacingCarGameModel from "../models/RacingCarGameModel.mjs";

class ResultSectionView {
  constructor(target) {
    this.$target = target;
  }

  render() {}

  getResult() {
    this.winners = new RacingCarGameModel().winnerCars();
  }

  createTemplate = () => {
    return String.raw`
      <div>
        <h2>🏆 최종 우승자: <span class="winner-list">${this.winners.join(
          ","
        )}}</span> 🏆</h2>
        <div class="d-flex justify-center">
          <button id="${
            DOM.RESULT_SECTION.REPLAY_BUTTON
          }" type="button" class="btn btn-cyan">다시 시작하기</button>
        </div>
      </div>
    `;
  };
}

export default ResultSectionView;
