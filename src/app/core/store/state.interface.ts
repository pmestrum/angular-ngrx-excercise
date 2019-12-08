import { Person } from '../interfaces/Person';

export interface State {
  personState: PersonState;
}

export interface PersonState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
  data: Person[];
}
