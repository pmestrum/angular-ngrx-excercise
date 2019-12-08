import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonComponent } from './components/person/person.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    PersonComponent
  ],
  declarations: [PersonComponent]
})
export class SharedModule { }
