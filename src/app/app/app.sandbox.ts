import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../core/interfaces/state.interface';
import { PersonRestService } from '../core/services/person.rest.service';
import { personLoadAction, personLoadFailAction, personLoadSuccessAction } from '../core/store/person/person.actions';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppSandbox {

  private store = inject(Store<State>);
  private personRestService = inject(PersonRestService);

  persons$ = this.store.select(state => state.person.persons);

  async loadPersons() {
    this.store.dispatch(personLoadAction());
    try {
      const persons = await firstValueFrom(this.personRestService.getUsers$());
      this.store.dispatch(personLoadSuccessAction({ persons: persons.data }));
    } catch (error) {
      this.store.dispatch(personLoadFailAction({ errorMessage: error.toString() }));
    }
  }
}
