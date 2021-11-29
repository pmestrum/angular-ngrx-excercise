import { Component, OnInit } from '@angular/core';
import { PersonRestService } from '../core/services/person.rest.service';
import { Person } from '../core/interfaces/person.interface';
import { PersonSandbox } from './person.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css'],
  providers: [PersonSandbox]
})
export class AppContainer implements OnInit {
  persons$ = this.sandbox.persons$;

  constructor(private sandbox: PersonSandbox) {}

  trackByFn(index, person: Person) {
    return person.id;
  }

  ngOnInit(): void {
    this.sandbox.loadPersons();
  }
}
