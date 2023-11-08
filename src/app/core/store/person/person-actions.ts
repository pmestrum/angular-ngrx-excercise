import { createAction, props } from '@ngrx/store';
import { Persons } from '../../interfaces/person.interface';

export const getPersonsAction = createAction('GET_PERSONS');
export const getPersonsSuccessAction = createAction('GET_PERSONS_SUCCESS', props<Persons>());

