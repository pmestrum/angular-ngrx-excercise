import { Person } from '../../interfaces/Person';
import { createReducer, on } from '@ngrx/store';
import { personDeselectAction, personLoadAction, personLoadFailAction, personLoadSuccessAction, personSelectAction } from './person.actions';
import { PersonState } from '../../interfaces/state.interface';

const INITIAL_STATE: PersonState = {
  loading: false,
  loaded: false,
  failed: false,
  errorMessage: '',
  persons: [],
};

function personLoadReducer(state: PersonState): PersonState {
  return {
    ...INITIAL_STATE,
    loading: true
  };
}

function personLoadSuccessReducer(state: PersonState, payload: { persons: Person[] }): PersonState {
  return {
    ...INITIAL_STATE,
    loaded: true,
    persons: payload.persons
  };
}

function personLoadFailReducer(state: PersonState, payload: { errorMessage: string }): PersonState {
  return {
    ...INITIAL_STATE,
    failed: true,
    errorMessage: payload.errorMessage
  };
}

function personSelectReducer(state: PersonState, payload: { personId: number }): PersonState {
  return {
    ...state,
    persons: state.persons.map(person => person.id === payload.personId ? { ...person, selected: true } : person),
  };
}

function personDeselectReducer(state: PersonState, payload: { personId: number }): PersonState {
  return {
    ...state,
    persons: state.persons.map(person => person.id === payload.personId ? { ...person, selected: false } : person),
  };
}

export const personReducer = createReducer(INITIAL_STATE,
  on(personLoadAction, personLoadReducer),
  on(personLoadSuccessAction, personLoadSuccessReducer),
  on(personLoadFailAction, personLoadFailReducer),
  on(personSelectAction, personSelectReducer),
  on(personDeselectAction, personDeselectReducer),
);
