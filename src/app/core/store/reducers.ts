import { ActionReducerMap } from '@ngrx/store';
import { personReducer } from './person/person-reducer';
import { State } from '../interfaces/state.interface';

export const reducers: ActionReducerMap<State> = {
  personState: personReducer
};
