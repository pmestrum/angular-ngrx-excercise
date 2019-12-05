import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/core/interfaces/Person';
import { PersonRestService } from 'src/core/services/person.rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: Persons;

  constructor(private personRestService: PersonRestService) {}

  title = 'temp';

  ngOnInit(): void {
    this.personRestService.getUsers$().subscribe(persons => this.persons = persons);
  }
}
