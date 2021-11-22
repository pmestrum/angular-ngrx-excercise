import { createAction, props } from '@ngrx/store';
import { Person, SelectablePerson } from '../../interfaces/Person';

export const personsLoadAction = createAction('PERSONS_LOAD');
export const personsLoadSuccessAction = createAction('PERSONS_LOAD_SUCCESS', props<{persons: Person[]}>());
export const personsLoadFailAction = createAction('PERSONS_LOAD_FAIL', props<{message: string}>());
export const personSelectAction = createAction('PERSON_SELECT', props<{person: Person}>());
export const personDeselectAction = createAction('PERSON_DESELECT', props<{person: Person}>());
