import { createReducer, on } from '@ngrx/store';
import { getPersonsAction, getPersonsSuccessAction } from './person-actions';
import { PersonState } from '../../interfaces/person.interface';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false
};

export const personReducer = createReducer(INITIAL_STATE,
  on(getPersonsAction, () => {
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
