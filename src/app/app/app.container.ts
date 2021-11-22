import { Component, OnInit } from '@angular/core';
import { Person, Persons, SelectablePerson } from '../core/interfaces/Person';
import { PersonRestService } from '../core/services/person.rest.service';
import { PersonService } from '../core/services/person.service';

// import { PersonSandbox } from '../core/sandboxes/person.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer  {
  persons$ = this.personService.persons$;
  selectedSize$ = this.personService.selectedSize$;

  constructor(private personService: PersonService) {}

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
