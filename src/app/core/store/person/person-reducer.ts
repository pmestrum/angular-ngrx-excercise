import { createReducer, on } from '@ngrx/store';
import { getPersonsAction, getPersonsSuccessAction, toggleSelectPersonAction } from './person-actions';
import { PersonState } from '../../interfaces/person.interface';

const INITIAL_STATE: PersonState = {
  data: [],
  failed: false,
  loaded: false,
  loading: false,
  selectedSize: 0,
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
      data: action.data.map(person => {
        return {
          ...person,
          selected: false,
        };
      })
    };
  }),
  on(toggleSelectPersonAction, (state, personToToggleSelect) => {
    const newState = {
      ...state,
      data: state.data.map(selectablePerson => {
        if (selectablePerson.id === personToToggleSelect.id) {
          return {
            ...selectablePerson,
            selected: !selectablePerson.selected
          };
        }
        return selectablePerson;
      })
    };
    newState.selectedSize = newState.data.filter(selectablePerson => selectablePerson.selected).length;
    return newState;
  })
);
