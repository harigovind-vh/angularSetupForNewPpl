import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@app/shared';
import { APP_CONFIG, AppConfig } from '@app/config';
import { CoreModule } from '@app/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
