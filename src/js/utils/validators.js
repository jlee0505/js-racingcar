import { GAME, ERROR_MESSAGE } from "../constants.js";

export const nameValidator = {
  isEntered: (carNames) => {
    if (!carNames) throw new Error(ERROR_MESSAGE.CAR_NAMES_REQUIRED);
  },
  isValidLength: (carNames) => {
    const carNamesArr = carNames.split(",").map((carName) => carName.trim());
    if (carNamesArr.length > 5)
      throw Error(ERROR_MESSAGE.NOT_A_VALID_NAME_LENGTH);
  },
};

export const countValidator = {
  isEntered: (count) => {
    if (!count) throw new Error(ERROR_MESSAGE.COUNT_NUM_REQUIRED);
  },
  isValidNum: (count) => {
    if (count <= GAME.COUNT_MIN_NUM || count >= GAME.COUNT_MAX_NUM)
      throw new Error(ERROR_MESSAGE.NOT_A_VALID_COUNT_RANGE);
  },
};
