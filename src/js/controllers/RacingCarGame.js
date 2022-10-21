import { CarModel, RacingCarGameModel } from "../models/index.js";
import {
  CountFormView,
  RacingCarGameView,
  ProgressSectionView,
  EndSectionView,
} from "../views/index.js";
import { nameValidator, countValidator } from "../utils/validators.js";
import { pickRandomNumInRange } from "../utils/utils.js";
import { $ } from "../utils/dom.js";
import { DOM, GAME } from "../constants.js";

class RacingCarGame {
  constructor(target) {
    this.$target = target;
    this.racingCarGameModel = new RacingCarGameModel();
    this.racingCarGameView = new RacingCarGameView(target);
    this.initGame();
    this.renderView();
  }

  initGame() {
    this.racingCarGameView.render();
    this.racingCarGameView.focusOnCarNameInput();
    this.addEvent();
  }

  mounted() {
    this.countFormView = new CountFormView($(DOM.INPUT_SECTION.COUNT_FORM));
    this.progressSectionView = new ProgressSectionView(
      $(DOM.PLAY_SECTION.PLAY_AREA)
    );
    this.resultSectionView = new this.resultSectionView(
      $(DOM.RESULT_SECTION.RESULT_AREA)
    );
  }

  addEvent() {
    $("#app").addEventListener("submit", (e) => {
      e.preventDefault();
      this.onSubmitRacingGame();
    });
    $("#app").addEventListener("click", (e) => {
      this.onClickRacingGame(e.target);
    });
  }

  onSubmitRacingGame(submitter) {
    if (submitter === $(DOM.INPUT_SECTION.NAME_BUTTON)) {
      this.generateCarWithName();
      return;
    }
    if (submitter === $(DOM.INPUT_SECTION.COUNT_BUTTON)) {
      this.progressWithCount();
      return;
    }
  }

  onClickRacingGame(target) {
    if (target === $(DOM.RESULT_SECTION.REPLAY_BUTTON)) {
      this.restartGame();
      return;
    }
  }

  generateCarWithName() {
    const carNames = this.racingCarGameView.$carNamesInput.value;

    try {
      this.validateCarNames(carNames);
    } catch (error) {
      alert(error.message);
      this.racingCarGameView.focusOnCarNameInput;
      return;
    }

    this.generateCars(carNames);

    this.CountFormView.render();
  }

  validateCarNames(carNames) {
    nameValidator.isEntered(carNames);
    nameValidator.isShorterThanFiveLetters(carNames);
  }

  generateCars(carNames) {
    const cars = carNames
      .split(",")
      .map((carName) => new CarModel(carName.trim()));
    this.racingCarGameModel.cars = cars;
  }

  progressWithCount() {
    this.racingCarGameModel.count = $(DOM.INPUT_SECTION.COUNT_INPUT).value;

    try {
      this.validateCount();
    } catch (error) {
      alert(error.message);
      this.countFormView.focusTryCountInput();
      return;
    }

    this.progressRacingResult();
    this.progressSectionView.render(this.racingCarGameModel.cars);
    this.resultSectionView.render($(DOM.RESULT_SECTION.RESULT_AREA));
  }

  validateCount() {
    countValidator.isEntered(this.racingCarGameModel.count);
    countValidator.isValidNum(this.racingCarGameModel.count);
  }

  progressRacingResult() {
    this.racingCarGameModel.cars.forEach((car) => {
      car.states = Array.from({ length: this.racingCarGameModel.count }).map(
        () => {
          pickRandomNumInRange(GAME.RANDOM_MIN_NUM, GAME.RANDOM_MAX_NUM) >=
          GAME.FORWARD_STANDARD
            ? GAME.FORWARD
            : GAME.STOP;
        }
      );
    });
  }

  restartGame() {
    this.resultSectionView.reset();
    this.progressSectionView.reset();
    this.countFormView.reset();
    this.racingCarGameView.reset();
  }
}

export default RacingCarGame;
