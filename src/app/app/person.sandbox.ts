import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { Person, Persons } from '../core/interfaces/person.interface';
import { PersonRestService } from '../core/services/person.rest.service';
import { State } from '../core/interfaces/state.interface';
import {
  personDeselectAction,
  personSelectAction,
  personsLoadAction,
  personsLoadFailAction,
  personsLoadSuccessAction
} from '../core/store/personState/person-actions';

@Injectable()
export class PersonSandbox {

  persons$: Observable<Person[]> = this.store.select(state => state.person.data);

  constructor(private store: Store<State>, private personRestService: PersonRestService) {
  }

  loadPersons(): void {
    this.store.dispatch(personsLoadAction());

    this.personRestService.getUsers$().pipe(
      first(),
    ).subscribe(
      {
        next: (persons: Persons) => {
          this.store.dispatch(personsLoadSuccessAction({ persons: persons.data }));
        },
        error: (error) => {
          this.store.dispatch(personsLoadFailAction({ errorMessage: error.toString() }));
        }
      }
    );
  }

  deselectPerson(person: Person) {
    this.store.dispatch(personDeselectAction({ person }));
  }

  selectPerson(person: Person) {
    this.store.dispatch(personSelectAction({ person }));
  }
}
