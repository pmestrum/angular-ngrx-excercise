import { Component, OnInit } from '@angular/core';
import { SelectablePerson } from '../core/interfaces/person.interface';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css'],
  providers: [AppSandbox]
})
export class AppContainer implements OnInit {

  constructor(public sandbox: AppSandbox) {}

  ngOnInit(): void {
    this.sandbox.loadPersons();
  }

  toggleSelected(person: SelectablePerson) {
    if (person.selected) {
      this.sandbox.deselectPerson(person);
    } else {
      this.sandbox.selectPerson(person);
    }
  }

  trackByFn(index, person: SelectablePerson) {
    return person.id;
  }
}
