import { createSelector } from '@ngrx/store';
import { State } from '../../interfaces/state.interface';
import { SelectablePerson } from '../../interfaces/Person';

export const selectionSizeSelector = createSelector(
  (state: State) => state.personState?.persons,
  (persons: SelectablePerson[]) => persons?.filter(person => person.selected)?.length || 0,
);
