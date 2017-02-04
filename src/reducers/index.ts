import { combineReducers } from 'redux';

import * as theme from './theme';

export interface State {
  theme: theme.State;
}

export const reducer = combineReducers({
  theme: theme.reducer
});
