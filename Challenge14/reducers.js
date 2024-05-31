// reducers.js
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './actions';

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        authError: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
