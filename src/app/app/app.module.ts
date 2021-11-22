import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { AppContainer } from './app.container';
import { HeaderComponent } from './header/header.component';

// import { environment } from '../../environments/environment';
// import { StoreModule } from '@ngrx/store';
// import { reducers } from '../core/store/reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppContainer,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {}
