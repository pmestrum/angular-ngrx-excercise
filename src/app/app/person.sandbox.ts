import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../core/interfaces/person.interface';

@Injectable()
export class PersonSandbox {

  persons$: Observable<Person[]>; // TODO implement

  loadPersons(): void {
    // TODO implement
  }
}
