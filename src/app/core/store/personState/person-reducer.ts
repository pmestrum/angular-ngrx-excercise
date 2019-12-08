import { PersonState } from '../state.interface';
import * as actions from './person-actions';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false,
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
    data: action.payload.persons,
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
  }
  return state;
}
