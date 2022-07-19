import { combineReducers } from 'redux';

import landingReducer from '../modules/landing';

export const appReducer = combineReducers({
  landing: landingReducer,
});

const rootReducer = (state, action) => {
  const { type } = action;

  if (type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
