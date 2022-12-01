import * as actions from './person-actions';
import { PersonState } from '../../interfaces/person.interface';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false,
  selectedSize: 0,
};

function personsLoad(state: PersonState, action: actions.PersonsLoadAction) {
  return {
    ...INITIAL_STATE,
    loading: true,
  };
}

function personsLoadSuccess(state: PersonState, action: actions.PersonsLoadSuccessAction) {
  return {
    ...INITIAL_STATE,
    data: action.payload.persons.map(p => ({
        ...p,
        selected: false
      })
    ),
    loaded: true,
  };
}

function personsLoadFail(state: PersonState, action: actions.PersonsLoadFailAction) {
  return {
    ...INITIAL_STATE,
    failed: true,
    errorMessage: action.payload.message
  };
}

function selectPerson(state: PersonState, action: actions.PersonsSelectAction) {
  const newData = state.data.map(person => {
    if (person.id === action.payload.person.id) {
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

function deselectPerson(state: PersonState, action: actions.PersonsDeselectAction) {
  const newData = state.data.map(person => {
    if (person.id === action.payload.person.id) {
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

// tslint:disable-next-line:max-line-length
export function personReducer(state: PersonState = INITIAL_STATE, action: actions.Actions): PersonState {
  switch (action.type) {
    case actions.PERSONS_LOAD: {
      return personsLoad(state, action);
    }
    case actions.PERSONS_LOAD_SUCCESS: {
      return personsLoadSuccess(state, action);
    }
    case actions.PERSONS_LOAD_FAIL: {
      return personsLoadFail(state, action);
    }
    case actions.PERSON_SELECT: {
      return selectPerson(state, action);
    }
    case actions.PERSON_DESELECT: {
      return deselectPerson(state, action);
    }
  }
  return state;
}
