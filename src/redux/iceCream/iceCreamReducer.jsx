import { buyIceCream } from "./iceCreamAction";

const initialState = {
  numOfIceCream: 20,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyIceCream:
      return { ...state, numOfIceCream: numOfIceCream - 1 };

    default:
      return state;
  }
};

export default iceCreamReducer;
