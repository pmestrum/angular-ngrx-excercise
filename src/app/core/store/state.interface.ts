import { LoadState, SelectablePerson } from '../interfaces/Person';

export interface State {
  personState: PersonState;
}

export interface PersonState extends LoadState<SelectablePerson[]> {
  selectedSize: number;
}
