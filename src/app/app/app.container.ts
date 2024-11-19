import { Component, inject, OnInit } from '@angular/core';
import { Person } from '../core/interfaces/Person';
import { AppSandbox } from './app.sandbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.container.html',
  styleUrls: ['./app.container.css'],
  providers: [AppSandbox]
})
export class AppContainer implements OnInit {

  sandbox = inject(AppSandbox);

  ngOnInit() {
    this.sandbox.loadPersons();
  }

  trackByFn(index, person: Person) {
    return person.id;
  }
}
