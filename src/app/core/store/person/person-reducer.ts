/*
 create & export personReducer (using createReducer creator method)
 create INITIAL_STATE
 add 2 reducers for load & loadSuccess
 optional: add extra reducer for loadFail
 */

import { createReducer, on, Action } from '@ngrx/store';
import { getPersonsAction, getPersonsSuccessAction } from './person-actions';
import { PersonState } from '../../interfaces/person.interface';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false
};

export const personReducer = createReducer(INITIAL_STATE,
  on(getPersonsAction, (state) => {
    return {
      ...INITIAL_STATE,
      loading: true,
    };
  }),

  on(getPersonsSuccessAction, (state, action) => {
    return {
      ...INITIAL_STATE,
      loaded: true,
      data: action.data
    };
  }),
);
