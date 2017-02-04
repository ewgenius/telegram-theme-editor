import { handleActions, Action } from 'redux-actions';
import { TelegramTheme, PropertyPayload } from '../lib/TelegramTheme';
import { def } from '../lib/themes';
import { SET_PROPERTY } from '../actions/theme';

export type State = TelegramTheme;

const initialState: State = def;

export const reducer = handleActions<State, any>({
  [SET_PROPERTY]: (state, action: Action<PropertyPayload>) => {
    const {key, value, ref} = action.payload;
    return {
      ...state,
      [key]: {
        value,
        ref
      }
    };
  }
}, initialState);
