import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { Person, Persons } from '../core/interfaces/person.interface';
import { PersonRestService } from '../core/services/person.rest.service';
import { State } from '../core/interfaces/state.interface';
import { personsLoadAction } from '../core/store/person/person-actions';

@Injectable()
export class AppSandbox {

  persons$: Observable<Person[]>; // TODO implement

  constructor(private store: Store<State>, private personRestService: PersonRestService) {
  }

  loadPersons(): void {
    // TODO implement

    this.store.dispatch(personsLoadAction());

    this.personRestService.getUsers$().pipe(
      first(),
    ).subscribe(
      {
        next: (persons: Persons) => {
          // TODO dispatch success
        },
        error: (error) => {
          // TODO dispatch fail
        }
      }
    );
  }
}
