import { Component, OnInit } from '@angular/core';
import { Person, Persons, SelectablePerson } from '../core/interfaces/Person';
import { PersonRestService } from '../core/services/person.rest.service';
import { PersonService } from '../core/services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  persons$ = this.personService.getPersons$();

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
