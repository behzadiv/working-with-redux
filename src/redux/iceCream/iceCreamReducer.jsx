import { buyIceCream } from "./iceCreamAction";
import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numOfIceCream: 20,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
      break;
    default:
      return state;
  }
};

export default iceCreamReducer;

