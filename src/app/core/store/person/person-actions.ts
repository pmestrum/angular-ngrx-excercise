import { createAction, props } from '@ngrx/store';
import { Persons, SelectablePerson } from '../../interfaces/person.interface';

export const getPersonsAction = createAction('GET_PERSONS');
export const getPersonsSuccessAction = createAction('GET_PERSONS_SUCCESS', props<Persons>());

export const toggleSelectPersonAction = createAction('TOGGLE_SELECT_PERSON', props<SelectablePerson>());

