import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_FAILURE,
  FETCH_USERS_SUCCESS,
} from "./userTypes";
import axios from "axios";
function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST,
  };
}
function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payLoad: error,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payLoad: users,
  };
}

export function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUsersRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(fetchUsersSuccess(res.data)))
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
}
