import { Component, OnChanges, OnInit } from '@angular/core';
import { Person } from '../core/interfaces/person.interface';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css']
})
export class AppContainer implements OnInit {

  constructor(public sandbox: AppSandbox) {
  }

  ngOnInit() {
    this.sandbox.loadPersons();
  }

  trackByFn(index, person: Person) {
    return person.id;
  }
}
