import { PersonState } from '../state.interface';
import * as actions from './person-actions';
import { createReducer, on } from '@ngrx/store';
import { Person } from '../../interfaces/Person';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false,
  selectedSize: 0,
};

function personsLoad() {
  return {
    ...INITIAL_STATE,
    loading: true,
  };
}

function personsLoadSuccess(state: PersonState, persons: Person[]) {
  return {
    ...INITIAL_STATE,
    data: persons.map(p => ({
        ...p,
        selected: false
      })
    ),
    loaded: true,
  };
}

function personsLoadFail(state: PersonState, errorMessage: string) {
  return {
    ...INITIAL_STATE,
    failed: true,
    errorMessage
  };
}

function selectPerson(state: PersonState, selectedPerson: Person) {
  const newData = state.data.map(person => {
    if (person.id === selectedPerson.id) {
      return {
        ...person,
        selected: true
      };
    }
    return person;
  });
  return {
    ...state,
    data: newData,
    selectedSize: newData.filter(p => p.selected).length,
  };
}

function deselectPerson(state: PersonState, deselectedPerson: Person) {
  const newData = state.data.map(person => {
    if (person.id === deselectedPerson.id) {
      return {
        ...person,
        selected: false
      };
    }
    return person;
  });
  return {
    ...state,
    data: newData,
    selectedSize: newData.filter(p => p.selected).length,
  };
}

export const personReducer = createReducer(INITIAL_STATE,
  on(actions.personsLoadAction, (state) => personsLoad()),
  on(actions.personsLoadSuccessAction, (state, { persons }) => personsLoadSuccess(state, persons)),
  on(actions.personsLoadFailAction, (state, { message }) => personsLoadFail(state, message)),
  on(actions.personSelectAction, (state, { person }) => selectPerson(state, person)),
  on(actions.personDeselectAction, (state, { person }) => deselectPerson(state, person)),
);
