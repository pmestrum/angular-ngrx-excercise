import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../core/interfaces/state.interface';
import { PersonRestService } from '../core/services/person.rest.service';
import { personDeselectAction, personLoadAction, personLoadFailAction, personLoadSuccessAction, personSelectAction } from '../core/store/person/person.actions';
import { firstValueFrom } from 'rxjs';
import { Person } from '../core/interfaces/Person';
import { selectionSizeSelector } from '../core/store/person/person.selectors';

@Injectable()
export class AppSandbox {

  private store = inject(Store<State>);
  private personRestService = inject(PersonRestService);

  persons$ = this.store.select(state => state.personState.persons);
  selectionSize$ = this.store.select(selectionSizeSelector);

  async loadPersons() {
    this.store.dispatch(personLoadAction());
    try {
      const persons = await firstValueFrom(this.personRestService.getUsers$());
      this.store.dispatch(personLoadSuccessAction({ persons: persons.data }));
    } catch (error) {
      this.store.dispatch(personLoadFailAction({ errorMessage: error.toString() }));
    }
  }

  selectPerson(person: Person) {
    this.store.dispatch(personSelectAction({ personId: person.id }));
  }

  deselectPerson(person: Person) {
    this.store.dispatch(personDeselectAction({ personId: person.id }));
  }
}
