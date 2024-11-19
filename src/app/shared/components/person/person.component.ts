import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectablePerson } from '../../../core/interfaces/Person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: SelectablePerson;

  @Output() toggleSelected = new EventEmitter<void>();

  ngOnInit(): void {
  }
}
