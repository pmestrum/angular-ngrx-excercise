import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { SelectablePerson } from '../interfaces/Person';
import { PersonRestService } from '../services/person.rest.service';
import { PersonsDeselectAction, PersonsLoadAction, PersonsLoadFailAction, PersonsLoadSuccessAction, PersonsSelectAction } from '../store/personState/person-actions';
import { State } from '../store/state.interface';

@Injectable({ providedIn: 'root' })
export class PersonSandbox {

  persons$ = this.store.select(state => state.personState.data);
  selectedSize$ = this.store.select(state => state.personState.selectedSize);

  constructor(private store: Store<State>, private personRestService: PersonRestService) {}

  loadPersons() {
    this.store.dispatch(new PersonsLoadAction());

    this.personRestService.getUsers$()
      .pipe(take(1))
      .subscribe(response => {
          this.store.dispatch(new PersonsLoadSuccessAction({ persons: response.data }));
        },
        error => {
          this.store.dispatch(new PersonsLoadFailAction(error.toString()));
        });
  }

  deselectPerson(person: SelectablePerson) {
    this.store.dispatch(new PersonsDeselectAction({person}));
  }

  selectPerson(person: SelectablePerson) {
    this.store.dispatch(new PersonsSelectAction({person}));
  }
}
