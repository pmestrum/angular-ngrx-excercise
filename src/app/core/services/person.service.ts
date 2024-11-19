import { inject, Injectable } from '@angular/core';
import { PersonRestService } from './person.rest.service';
import { Store } from '@ngrx/store';
import { personLoadAction, personLoadFailAction, personLoadSuccessAction } from '../store/person/person.actions';
import { firstValueFrom } from 'rxjs';
import { State } from '../interfaces/state.interface';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private store: Store<State> = inject(Store);
  private personRestService = inject(PersonRestService);

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
