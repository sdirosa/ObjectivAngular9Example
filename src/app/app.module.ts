import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import('@objectiv/developer-tools');
import { ObjectivTrackerModule } from '@objectiv/tracker-angular/dist';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ObjectivTrackerModule.forRoot({
      applicationId: 'angular-app-id',
      transport: {
        transportName: 'ConsoleLogTransport',
        isUsable: () => true,
        handle: async (...args) => console.log(...args)
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
