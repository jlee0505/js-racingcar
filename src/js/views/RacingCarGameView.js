import { DOM } from "../constants.js";
import { $ } from "../utils/dom.js";

class RacingCarGameView {
  $carNamesInput;

  constructor(target) {
    this.$target = target;
    this.render();
  }

  render() {
    this.$target.insertAdjacentHTML = this.createTemplate();
    this.mounted();
  }

  mounted() {
    this.$carNamesInput = $(DOM.INPUT_SECTION.NAME_INPUT);
  }

  focusOnCarNameInput() {
    this.$carNamesInput.focus();
  }

  reset() {
    this.$carNamesInput.value = "";
    this.$carNamesInput.focus();
  }

  createTemplate() {
    return String.raw`
        <section class="d-flex d-flex-col items-center mt-5">
            <form id="${DOM.INPUT_SECTION.NAME_FORM}" class="name-form">
            <fieldset class="name-area">
                <h1 class="text-center">🏎️ 자동차 경주 게임</h1>
                <p>
                5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
                예시) EAST, WEST, SOUTH, NORTH
                </p>
                <div class="d-flex">
                <input id="${DOM.INPUT_SECTION.NAME_INPUT}" type="text" class="w-100 mr-2" placeholder="자동차 이름" />
                <button id-"${DOM.INPUT_SECTION.NAME_BUTTON}" type="button" class="btn btn-cyan">확인</button>
                </div>
            </fieldset>
            </form>
            <form id="${DOM.INPUT_SECTION.COUNT_FORM}" class="count-form">
            </form>
        </section>
        <section id="${DOM.PLAY_SECTION.PLAY_AREA}" class="d-flex justify-center mt-5 play-area hidden">   
        </section>
        <section id="${DOM.RESULT_SECTION.RESULT_AREA}" class="d-flex justify-center mt-5 result-area hidden">
        </section>
    `;
  }
}

export default RacingCarGameView;
