import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { PersonRestService } from './person.rest.service';
import { Person } from '../interfaces/Person';

@Injectable({ providedIn: 'root' })
export class PersonService {

  // tslint:disable-next-line:variable-name
  private _persons$ = new BehaviorSubject<Person[]>([]);

  get persons$(): Observable<Person[]> {
    return this._persons$.asObservable();
  }

  constructor(private personRestService: PersonRestService) {
    this.personRestService.getUsers$()
      .pipe(take(1))
      .subscribe(persons => {
        this._persons$.next(persons.data);
    });
  }
}
