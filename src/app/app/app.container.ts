import { Component, OnInit } from '@angular/core';
import { PersonRestService } from '../core/services/person.rest.service';
import { Person } from '../core/interfaces/person.interface';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css'],
  providers: [AppSandbox]
})
export class AppContainer implements OnInit {
  persons$ = this.sandbox.persons$;

  constructor(private sandbox: AppSandbox) {}

  trackByFn(index, person: Person) {
    return person.id;
  }

  ngOnInit(): void {
    this.sandbox.loadPersons();
  }
}
