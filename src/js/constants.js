export const DOM = Object.freeze({
  INPUT_SECTION: {
    NAME_FORM: "#name-form",
    NAME_INPUT: "#name-input",
    NAME_BUTTON: "#name-button",
    COUNT_FORM: "#count-form",
    COUNT_INPUT: "#count-input",
    COUNT_BUTTON: "#count-button",
  },
  PLAY_SECTION: {
    PLAY_AREA: "#play-area",
    FORWARD_ICON: ".forward-icon",
  },
  RESULT_SECTION: {
    RESULT_AREA: "#result-area",
    REPLAY_BUTTON: "#replay-button",
  },
});

export const ERROR_MESSAGE = Object.freeze({
  CAR_NAMES_REQUIRED: "자동자 이름을 입력해주세요.",
  NOT_A_VALID_NAME_LENGTH:
    "자동차 이름은 최소 1자에서 최대 5자까지 입력할 수 있습니다.",
  COUNT_NUM_REQUIRED: "시도 횟수를 입력해주세요.",
  NOT_A_VALID_COUNT_RANGE: "시도 횟수는 1~10사이의 숫자를 입력해 주세요.",
  CONGRATULATIONS: "🎇🎇🎇🎇축하합니다!🎇🎇🎇🎇",
});

export const GAME = Object.freeze({
  FORWARD: "forward",
  STOP: "stop",
  CAR_NAME_MAX_LENGTH: 5,
  COUNT_MIN_NUM: 1,
  COUNT_MAX_NUM: 10,
  RANDOM_MIN_NUM: 0,
  RANDOM_MAX_NUM: 9,
  FORWARD_STANDARD: 4,
});
