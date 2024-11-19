import { createAction, props } from '@ngrx/store';
import { Person } from '../../interfaces/Person';

export const personLoadAction = createAction('[Person] load');
export const personLoadSuccessAction = createAction('[Person] load success', props<{persons: Person[]}>());
export const personLoadFailAction = createAction('[Person] load fail', props<{errorMessage: string}>());
export const personSelectAction = createAction('[Person] select', props<{personId: number}>());
export const personDeselectAction = createAction('[Person] deselect', props<{personId: number}>());
