import { Action } from '@ngrx/store';
import { Person } from '../../interfaces/Person';

export const PERSONS_LOAD = 'PERSONS_LOAD';
export const PERSONS_LOAD_SUCCESS = 'PERSONS_LOAD_SUCCESS';
export const PERSONS_LOAD_FAIL = 'PERSONS_LOAD_FAIL';

export class PersonsLoadAction implements Action {
  readonly type = PERSONS_LOAD;
}

export class PersonsLoadSuccessAction implements Action {
  readonly type = PERSONS_LOAD_SUCCESS;

  constructor(public payload: { persons: Person[] }) {}
}

export class PersonsLoadFailAction implements Action {
  readonly type = PERSONS_LOAD_FAIL;

  constructor(public payload: { message: string }) {}
}

export type Actions = PersonsLoadAction | PersonsLoadSuccessAction | PersonsLoadFailAction;
