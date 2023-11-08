// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { take } from 'rxjs/operators';
// import { PersonRestService } from '../services/person.rest.service';
// import { PersonsLoadAction, PersonsLoadFailAction, PersonsLoadSuccessAction } from '../store/personState/person-actions';
// import { State } from '../store/state.interface';

import { Injectable } from '@angular/core';
import { State } from '../core/interfaces/state.interface';
import { Store } from '@ngrx/store';
import { getPersonsAction, getPersonsSuccessAction, toggleSelectPersonAction } from '../core/store/person/person-actions';
import { PersonRestService } from '../core/services/person.rest.service';
import { debounceTime, delay, firstValueFrom, lastValueFrom } from 'rxjs';
import { Person, SelectablePerson } from '../core/interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class AppSandbox {

  persons$ = this.store.select(state => state.personState.data);
  loading$ = this.store.select(state => state.personState.loading);
  selectedSize$ = this.store.select(state => state.personState.selectedSize);

  constructor(private store: Store<State>, private personRestService: PersonRestService) {
  }

  toggleSelectPerson(person: SelectablePerson): void {
    this.store.dispatch(toggleSelectPersonAction(person));
  }

  async loadPersons(): Promise<void> {
    // trigger actie load persons
    this.store.dispatch(getPersonsAction());
    // await
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    // get persons from server
    const users$ = this.personRestService.getUsers$();
    const data = await firstValueFrom(users$);
    // trigger actie load persons success
    this.store.dispatch(getPersonsSuccessAction(data));
  }
}
