import { INPUT_DIGIT } from "./actionTypes";

const doInputDigit = digit => ({
  type: INPUT_DIGIT,
  digit
});

export { doInputDigit };
