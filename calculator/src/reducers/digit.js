import { INPUT_DIGIT } from "../actionTypes";

const INITIAL_STATE = {
  number: 0
};

const applyInputNumber = (state, action) => {
  if (state.number === 0 && action.digit === 0) {
    return state;
  }
  const newNumber = parseInt(`${state.number}${action.digit}`);
  console.log(newNumber);

  return {
    ...state,
    number: newNumber
  };
};

const digitReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_DIGIT: {
      return applyInputNumber(state, action);
    }
    default:
      return state;
  }
};

export default digitReducer;
