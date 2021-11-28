import { Component } from '@angular/core';
import { PersonRestService } from '../core/services/person.rest.service';
import { Person } from '../core/interfaces/person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer  {
  persons$ = this.personRestService.getUsers$();

  constructor(private personRestService: PersonRestService) {}

  trackByFn(index, person: Person) {
    return person.id;
  }
}
