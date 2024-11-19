import { Person } from '../../interfaces/Person';
import { createReducer, on } from '@ngrx/store';
import { personLoadAction, personLoadFailAction, personLoadSuccessAction } from './person.actions';
import { PersonState } from '../../interfaces/state.interface';

const INITIAL_STATE: PersonState = {
  loading: false,
  loaded: false,
  failed: false,
  errorMessage: '',
  persons: [],
};


function personLoadReducer() {
  return state => ({
    ...INITIAL_STATE,
    loading: true
  });
}

function personLoadSuccessReducer(state: PersonState, payload: { persons: Person[] }) {
  return {
    ...INITIAL_STATE,
    loaded: true,
    persons: payload.persons
  };
}

function personLoadFailReducer(state: PersonState, payload: { errorMessage: string }) {
  return {
  ...INITIAL_STATE,
  failed: true,
    errorMessage: payload.errorMessage
  };
}

export const personReducer = createReducer(INITIAL_STATE,
  on(personLoadAction, personLoadReducer()),
  on(personLoadSuccessAction, personLoadSuccessReducer),
  on(personLoadFailAction, personLoadFailReducer),
);
