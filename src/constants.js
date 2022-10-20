export const DOM = Object.freeze({
  INPUT_SECTION: {
    NAME_FORM: ".name-form",
    NAME_INPUT: ".name-input",
    COUNT_FORM: ".count-form",
    COUNT_FORM: ".count-input",
  },
  PLAY_SECTION: {
    PLAY_AREA: ".play-area",
    FORWARD_ICON: ".forward-icon",
  },
  RESULT_SECTION: {
    RESULT_AREA: ".result-area",
  },
});

export const ERROR_MESSAGE = Object.freeze({
  INPUT_PLAYER: "자동자 이름을 입력해주세요.",
  MAX_PLAYER: "자동차 이름은 최소 1자에서 최대 5자까지 입력할 수 있습니다.",
  INPUT_COUNT: "시도 횟수를 입력해주세요.",
  MAX_COUNT: "시도 횟수는 1~10사이의 숫자를 입력해 주세요.",
  CONGRATULATIONS: "🎇🎇🎇🎇축하합니다!🎇🎇🎇🎇",
});

export const CAR_STATE = Object.freeze({
  FORWARD: "forward",
  STOP: "stop",
  CAR_NAME_SPLITTER: ",",
  CAR_NAME_MAX_LENGTH: 5,
  FORWARD_STANDARD: 4,
});
