import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../../core/interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;

  ngOnInit(): void {
  }
}
