import { handleActions, Action } from 'redux-actions';
import { TelegramTheme, PropertyPayload } from '../lib/TelegramTheme';
import { dark } from '../lib/themes';
import { SET_PROPERTY } from '../actions/theme';

export type State = TelegramTheme;

const initialState: State = dark;

export const reducer = handleActions<State, any>({
  [SET_PROPERTY]: (state, action: Action<PropertyPayload>) => {
    console.log(state, action.payload);
  }
}, initialState);
