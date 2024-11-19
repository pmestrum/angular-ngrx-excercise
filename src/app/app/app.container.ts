import { Component } from '@angular/core';
import { Person } from '../core/interfaces/Person';
import { PersonService } from '../core/services/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer  {
  persons$ = this.personService.persons$;

  constructor(private personService: PersonService) {}

  trackByFn(index, person: Person) {
    return person.id;
  }
}
