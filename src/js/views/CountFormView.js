class CountFormView {
  constructor(target) {
    this.$target = target;
  }

  render() {
    this.$target.insertAdjacentHTML = this.createTemplate();
    this.mounted();
    this.focusTryCountInput();
  }

  mounted() {
    this.$countInput = $(`${DOM.INPUT_SECTION.COUNT_INPUT}`);
  }

  focusTryCountInput() {
    this.$countInput.focus();
  }

  reset() {
    this.$countInput.value = "";
  }

  createTemplate() {
    return String.raw`
        <p>시도할 횟수를 입력해주세요.</p>
        <div class="d-flex">
          <input type="number" class="w-100 mr-2" placeholder="시도 횟수" />
          <button type="button" class="btn btn-cyan">확인</button>
        </div>
    `;
  }
}

export default CountFormView;
