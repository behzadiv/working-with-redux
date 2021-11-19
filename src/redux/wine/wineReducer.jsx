import { BUY_WINE } from "./wineTypes";

const initialState = {
  numOfWine: 30,
};
const wineReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_WINE:
      return { ...state, numOfWine: state.numOfWine - action.payload };
      break;

    default:
      return state;
  }
};

export default wineReducer;
