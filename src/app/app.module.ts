import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SampleComponent} from './components/sample/sample.component';
import {LocationComponent} from './components/location/location.component';
import {SectorComponent} from './components/sector/sector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    LocationComponent,
    SectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
