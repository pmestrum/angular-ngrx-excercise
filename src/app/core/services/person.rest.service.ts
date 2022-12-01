import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persons } from '../interfaces/person.interface';

@Injectable({ providedIn: 'root' })
export class PersonRestService {
  constructor(private http: HttpClient) {}

  getUsers$(): Observable<Persons> {
    return this.http.get<Persons>(`https://reqres.in/api/users?page=1`);
  }
}
