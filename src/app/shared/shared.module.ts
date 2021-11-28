import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    PersonComponent
  ],
  declarations: [PersonComponent]
})
export class SharedModule { }
