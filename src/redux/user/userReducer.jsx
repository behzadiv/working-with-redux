import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
const initialState = {
  loading: false,
  error: "",
  users: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
      break;
    case FETCH_USERS_FAILURE:
      return { loading: false, error: action.payLoad, users: [] };
    case FETCH_USERS_SUCCESS:
      return { loading: false, error: "", users: action.payLoad };
    default:
      return state;
  }
};

export default usersReducer;
