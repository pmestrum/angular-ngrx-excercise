import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../core/interfaces/state.interface';
import { Person } from '../core/interfaces/Person';
import { PersonService } from '../core/services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer {
  private store = inject(Store<State>);
  private personService = inject(PersonService);

  persons$ = this.store.select(state => state.personState.persons);

  constructor() {
    this.personService.loadPersons();
  }

  trackByFn(index, person: Person) {
    return person.id;
  }
}
