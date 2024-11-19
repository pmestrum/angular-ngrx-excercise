import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
import { SelectablePerson } from '../interfaces/Person';
import { PersonRestService } from './person.rest.service';
import { Store } from '@ngrx/store';
import { personLoadAction, personLoadFailAction, personLoadSuccessAction } from '../store/person/person.actions';
import { firstValueFrom } from 'rxjs';
import { State } from '../interfaces/state.interface';

@Injectable({ providedIn: 'root' })
export class PersonService {

  private store: Store<State> = inject(Store);
  private personRestService = inject(PersonRestService);

  // tslint:disable-next-line:variable-name
  private _selectedSize$ = new BehaviorSubject<number>(0);

  get selectedSize$(): Observable<number> {
    return this._selectedSize$.asObservable();
  }

  constructor() {
    this.loadPersons();
  }

  private async loadPersons() {
    this.store.dispatch(personLoadAction());

    try {
      const persons = await firstValueFrom(this.personRestService.getUsers$());
      this.store.dispatch(personLoadSuccessAction({ persons: persons.data }));
    } catch (error) {
      this.store.dispatch(personLoadFailAction({ errorMessage: error.toString() }));
    }
  }

  selectPerson(person: SelectablePerson) {
    // this._persons$.pipe(take(1)).subscribe(persons => {
    //   const newArray = persons.map(p => Object.freeze({
    //     ...p,
    //     selected: p === person ? true : p.selected
    //   }));
    //   this._persons$.next(newArray);
    //   this.setSelectedSize(newArray);
    // });
  }

  deselectPerson(person: SelectablePerson) {
    // this._persons$.pipe(take(1)).subscribe(persons => {
    //   const newArray = persons.map(p => Object.freeze({
    //     ...p,
    //     selected: p === person ? false : p.selected
    //   }));
    //   this._persons$.next(newArray);
    //   this.setSelectedSize(newArray);
    // });
  }

  private setSelectedSize(newArray: SelectablePerson[]) {
    this._selectedSize$.next(newArray.filter(p => p.selected).length);
  }
}
