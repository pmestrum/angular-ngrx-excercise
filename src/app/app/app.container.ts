import { Component, inject } from '@angular/core';
import { SelectablePerson } from '../core/interfaces/Person';
import { PersonService } from '../core/services/person.service';
import { Store } from '@ngrx/store';
import { State } from '../core/interfaces/state.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer {
  private state = inject(Store<State>);
  private personService = inject(PersonService);

  persons$ = this.personService.persons$;
  selectedSize$ = this.personService.selectedSize$;

  toggleSelected(person: SelectablePerson) {
    if (person.selected) {
      this.personService.deselectPerson(person);
    } else {
      this.personService.selectPerson(person);
    }
  }

  trackByFn(index, person: SelectablePerson) {
    return person.id;
  }
}
