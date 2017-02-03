import { ActionTypes, Actions, SetPropertyAction, RefPropertyAction } from '../actions/theme';
import { TelegramTheme, hasProperty, getProperty, defaultTheme } from '../lib/telegram-theme';

export type State = TelegramTheme;

const initialState: State = Object.keys(defaultTheme).reduce((theme, key) => {
  theme[key] = {
    value: defaultTheme[key]
  };
  return theme;
}, {});

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SET_PROPERTY: {
      const {key, value} = (action as SetPropertyAction).payload;
      return Object.assign({}, state, {
        [key]: {
          value
        }
      });
    }
    case ActionTypes.REF_PROPERTY: {
      const {key, ref} = (action as RefPropertyAction).payload;
      if (hasProperty(state, ref)) {
        return Object.assign({}, state, {
          [key]: {
            ref
          }
        });
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
}

export const getTheme = (state: State) => state;

export const getThemeValue = (state: State) => Object.keys(state).reduce((t, key) => {
  t[key] = getProperty(state, key);
  return t;
}, {});

export const getKeys = (state: State) => Object.keys(state);
