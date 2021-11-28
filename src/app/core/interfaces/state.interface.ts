import {  SelectablePerson } from './person.interface';
import { LoadState } from './loadstate.interface';

export interface State {
  personState: PersonState;
}

export interface PersonState extends LoadState<SelectablePerson[]> {
  selectedSize: number;
}
