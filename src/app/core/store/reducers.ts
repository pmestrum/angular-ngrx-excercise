import { ActionReducerMap } from '@ngrx/store';
import { State } from '../interfaces/state.interface';
import { personReducer } from './person/person-reducer';

export const reducers: ActionReducerMap<State> = {
  person: personReducer
};

