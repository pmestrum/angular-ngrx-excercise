import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { SelectablePerson } from '../interfaces/person.interface';
import { PersonRestService } from './person.rest.service';

@Injectable({ providedIn: 'root' })
export class PersonService {

  // tslint:disable-next-line:variable-name
  private _persons$ = new BehaviorSubject<SelectablePerson[]>([]);
  // tslint:disable-next-line:variable-name
  private _selectedSize$ = new BehaviorSubject<number>(0);

  get persons$(): Observable<SelectablePerson[]> {
    return this._persons$.asObservable();
  }

  get selectedSize$(): Observable<number> {
    return this._selectedSize$.asObservable();
  }

  constructor(private personRestService: PersonRestService) {
    this.personRestService.getUsers$()
      .pipe(take(1))
      .subscribe(persons => {
        this._persons$.next(persons.data.map(person => (Object.freeze({
          ...person,
          selected: false
        }))));
      });
  }

  selectPerson(person: SelectablePerson) {
    this._persons$.pipe(take(1)).subscribe(persons => {
      const newArray = persons.map(p => Object.freeze({
        ...p,
        selected: p === person ? true : p.selected
      }));
      this._persons$.next(newArray);
      this.setSelectedSize(newArray);
    });
  }

  deselectPerson(person: SelectablePerson) {
    this._persons$.pipe(take(1)).subscribe(persons => {
      const newArray = persons.map(p => Object.freeze({
        ...p,
        selected: p === person ? false : p.selected
      }));
      this._persons$.next(newArray);
      this.setSelectedSize(newArray);
    });
  }

  private setSelectedSize(newArray: SelectablePerson[]) {
    this._selectedSize$.next(newArray.filter(p => p.selected).length);
  }
}
