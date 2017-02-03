import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import * as fromTheme from './theme';

export interface State {
  theme: fromTheme.State;
}

const reducers = {
  theme: fromTheme.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

const getThemeState = (state: State) => state && state.theme;

export const getTheme = createSelector(getThemeState, fromTheme.getTheme);
export const getKeys = createSelector(getThemeState, fromTheme.getKeys);
