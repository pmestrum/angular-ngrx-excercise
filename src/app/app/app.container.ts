import { Component, OnInit } from '@angular/core';
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
  sizeSelection$ = this.sandbox.sizeSelection$;

  constructor(private sandbox: AppSandbox) {}

  trackByFn(index, person: Person) {
    return person.id;
  }

  ngOnInit(): void {
    this.sandbox.loadPersons();
  }

  toggleSelectPerson(person: Person) {
    if (person.selected) {
      this.sandbox.deselectPerson(person);
    } else {
      this.sandbox.selectPerson(person);
    }
  }
}
