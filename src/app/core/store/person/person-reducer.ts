/*
 create & export personReducer (using createReducer creator method)
 create INITIAL_STATE
 add 2 reducers for load & loadSuccess
 optional: add extra reducer for loadFail
 */

import { createReducer, on } from '@ngrx/store';
import { PersonState } from '../../interfaces/person.interface';
import * as actions from './person-actions';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false
};

function load() {
  return {
    ...INITIAL_STATE,
    loading: true,
  };
}

/**
 * @param state
 * @param payload
 */
function loadSuccess(state, payload) {
  return {
    ...INITIAL_STATE,
    loaded: true,
    data: payload.persons
  };
}

/**
 * @param state
 * @param payload
 */
function loadFail(state, payload) {
  return {
    ...INITIAL_STATE,
    failed: true,
    errorMessage: payload.errorMessage,
  };
}

export const personReducer = createReducer<PersonState>(INITIAL_STATE,
  on(actions.personsLoadAction, load),
  on(actions.personsLoadSuccessAction, loadSuccess),
  on(actions.personsLoadFailAction, loadFail)
);
