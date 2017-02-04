import { createAction } from 'redux-actions';
import { PropertyPayload } from '../lib/TelegramTheme';

export const SET_PROPERTY = 'SET_PROPERTY';

export const setPropertyAction = createAction<PropertyPayload>(SET_PROPERTY);
