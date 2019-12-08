import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { PersonRestService } from '../services/person.rest.service';
import { PersonsLoadAction, PersonsLoadFailAction, PersonsLoadSuccessAction } from '../store/personState/person-actions';
import { State } from '../store/state.interface';

@Injectable({ providedIn: 'root' })
export class PersonSandbox {

  persons$ = this.store.select(state => state.personState.data);

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
}
