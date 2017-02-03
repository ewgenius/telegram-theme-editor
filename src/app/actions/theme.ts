import { Action } from '@ngrx/store';

export const ActionTypes = {
  SET_PROPERTY: 'SET_PROPERTY',
  REF_PROPERTY: 'REF_PROPERTY'
};

export class SetPropertyAction implements Action {
  type = ActionTypes.SET_PROPERTY;

  constructor(public payload: {
    key: string;
    value: string;
  }) { }
}

export class RefPropertyAction implements Action {
  type = ActionTypes.SET_PROPERTY;

  constructor(public payload: {
    key: string;
    ref: string;
  }) { }
}

export type Actions = SetPropertyAction | RefPropertyAction;
