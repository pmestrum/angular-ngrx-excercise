import { createSelector } from '@ngrx/store';
import { PersonState, State } from '../../interfaces/state.interface';

export const selectionSizeSelector = createSelector(
  (state: State) => state.personState,
  (personState: PersonState) => personState?.persons.filter(person => person.selected).length,
);
