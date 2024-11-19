import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectablePerson } from '../../../core/interfaces/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person: SelectablePerson;

  @Output() toggleSelected = new EventEmitter<void>();
}
