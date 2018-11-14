import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {SampleComponent} from './components/sample/sample.component';
import {LocationComponent} from './components/location/location.component';
import {SectorComponent} from './components/sector/sector.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  ErrorStateMatcher,
  MatButtonModule, MatDialogModule,
  MatInputModule,
  MatNativeDateModule, MatProgressSpinnerModule,
  MatSelectModule, MatSort, MatSortModule, MatTableDataSource, MatTableModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {LocationPopupComponent} from './components/location/location-popup.component';
import {SectorPopupComponent} from './components/sector/sector-popup.component';
import {ProjectListComponent} from './components/projectList/project-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    LocationComponent,
    SectorComponent,
    LocationPopupComponent,
    SectorPopupComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSortModule


  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  entryComponents: [LocationPopupComponent, SectorPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
