import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { personReducer } from './store/person/person.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const reducers = {
  personState: personReducer
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: false}),
  ]
})
export class CoreModule { }
