import { SelectablePerson } from './Person';

export interface State {
  personState: PersonState;
}

export interface PersonState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  errorMessage?: string;
  persons: SelectablePerson[];
}
