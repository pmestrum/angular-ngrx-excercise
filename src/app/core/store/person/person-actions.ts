// create personsLoadAction and personsLoadSuccessAction
// optional: create personsLoadFailAction

import { createAction, props } from '@ngrx/store';
import { Person } from '../../interfaces/person.interface';

export const personsLoadAction = createAction('PERSONS_LOAD');

export const personsLoadSuccessAction = createAction('PERSONS_LOAD_SUCCESS',
  props<{ persons: Person[] }>()
);

export const personsLoadFailAction = createAction('PERSONS_LOAD_FAIL',
  props<{ errorMessage: string }>()
);

// TODO create 2 actions: select & deselect
