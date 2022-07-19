import { combineReducers } from 'redux';

import { LandingComponentReducer } from '../modules/landing';

export const appReducer = combineReducers({
  landing: LandingComponentReducer,
});

const rootReducer = (state, action) => {
  const { type } = action;

  if (type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
