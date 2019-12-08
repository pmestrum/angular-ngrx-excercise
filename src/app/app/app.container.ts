import { Component, OnInit } from '@angular/core';
import { Person } from '../core/interfaces/Person';
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

  trackByFn(index, person: Person) {
    return person.id;
  }
}
