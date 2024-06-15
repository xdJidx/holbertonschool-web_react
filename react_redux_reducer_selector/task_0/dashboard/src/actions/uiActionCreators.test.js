// uiActionCreators.test.js

import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN_SUCCESS if API request succeeds', async () => {
    fetchMock.getOnce('/login-success.json', {
      body: {},
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_SUCCESS }];
    const store = mockStore({});

    await store.dispatch(loginRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches LOGIN_FAILURE if API request fails', async () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [{ type: 'LOGIN' }, { type: LOGIN_FAILURE }];
    const store = mockStore({});

    await store.dispatch(loginRequest());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
