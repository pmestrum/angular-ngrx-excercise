import { PersonState } from '../../interfaces/Person';
import { createReducer, on } from '@ngrx/store';
import { personLoadAction, personLoadFailAction, personLoadSuccessAction } from './person.actions';

const INITIAL_STATE: PersonState = {
  loading: false,
  loaded: false,
  failed: false,
  errorMessage: '',
  person: null
};


function personLoadReducer() {
  return state => ({
    ...INITIAL_STATE,
    loading: true
  });
}

function personLoadSuccessReducer() {
  return (state, { person }) => ({
    ...INITIAL_STATE,
    loaded: true,
    person
  });
}

function personLoadFailReducer() {
  return (state, { errorMessage }) => ({
    ...INITIAL_STATE,
    failed: true,
    errorMessage
  });
}

export const personReducer = createReducer(INITIAL_STATE,
  on(personLoadAction, personLoadReducer()),
  on(personLoadSuccessAction, personLoadSuccessReducer()),
  on(personLoadFailAction, personLoadFailReducer()),
);
