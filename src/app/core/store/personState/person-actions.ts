import { createAction, props } from '@ngrx/store';
import { PersonInterface } from '../../interfaces/person.interface';

export const personsLoadAction = createAction('PERSONS_LOAD');
export const personsLoadSuccessAction = createAction('PERSONS_LOAD_SUCCESS', props<{persons: PersonInterface[]}>());
export const personsLoadFailAction = createAction('PERSONS_LOAD_FAIL', props<{ message: string }>());
export const personSelectAction = createAction('PERSON_SELECT', props<{person: PersonInterface}>());
export const personDeselectAction = createAction('PERSON_DESELECT', props<{person: PersonInterface}>());
