import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { SelectablePerson } from '../interfaces/Person';
import { PersonRestService } from './person.rest.service';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private persons$ = new BehaviorSubject<SelectablePerson[]>([]);

  constructor(private personRestService: PersonRestService) {
    this.personRestService.getUsers$()
      .pipe(take(1))
      .subscribe(persons => {
        this.persons$.next(persons.data.map(person => (Object.freeze({
          ...person,
          selected: false
        }))));
      });
  }

  getPersons$(): Observable<SelectablePerson[]> {
    return this.persons$.asObservable();
  }

  selectPerson(person: SelectablePerson) {
    this.persons$.pipe(take(1)).subscribe(persons => {
      this.persons$.next(persons.map(p => Object.freeze({
        ...p,
        selected: p === person ? true : p.selected
      })));
    });
  }

  deselectPerson(person: SelectablePerson) {
    this.persons$.pipe(take(1)).subscribe(persons => {
      this.persons$.next(persons.map(p => Object.freeze({
        ...p,
        selected: p === person ? false : p.selected
      })));
    });
  }
}
