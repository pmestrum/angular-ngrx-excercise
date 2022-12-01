import { Action, createAction, props } from '@ngrx/store';
import { PersonInterface, SelectablePerson } from '../../interfaces/person.interface';

export const PERSONS_LOAD = 'PERSONS_LOAD';
export const PERSONS_LOAD_SUCCESS = 'PERSONS_LOAD_SUCCESS';
export const PERSONS_LOAD_FAIL = 'PERSONS_LOAD_FAIL';
export const PERSON_SELECT = 'PERSON_SELECT';
export const PERSON_DESELECT = 'PERSON_DESELECT';

export class PersonsLoadAction implements Action {
  readonly type = PERSONS_LOAD;
}

export class PersonsLoadSuccessAction implements Action {
  readonly type = PERSONS_LOAD_SUCCESS;

  constructor(public payload: { persons: PersonInterface[] }) {
  }
}

export class PersonsLoadFailAction implements Action {
  readonly type = PERSONS_LOAD_FAIL;

  constructor(public payload: { message: string }) {
  }
}

export class PersonsSelectAction implements Action {
  readonly type = PERSON_SELECT;

  constructor(public payload: { person: SelectablePerson }) {
  }
}

export class PersonsDeselectAction implements Action {
  readonly type = PERSON_DESELECT;

  constructor(public payload: { person: SelectablePerson }) {
  }
}

export type Actions = PersonsLoadAction | PersonsLoadSuccessAction | PersonsLoadFailAction | PersonsSelectAction | PersonsDeselectAction;
