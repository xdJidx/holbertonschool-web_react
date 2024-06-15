// uiActionCreators.js

import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: 'LOGIN' });

  try {
    const response = await fetch('/login-success.json');
    if (response.ok) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
