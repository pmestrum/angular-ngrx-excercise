import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { AppContainer } from './app.container';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AppContainer,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppContainer]
})
export class AppModule {}
