import { Component, OnInit } from '@angular/core';
import { SelectablePerson } from '../core/interfaces/Person';
import { PersonSandbox } from '../core/sandboxes/person.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer implements OnInit {

  constructor(public sandbox: PersonSandbox) {}

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
