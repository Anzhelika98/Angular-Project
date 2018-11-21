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

import {ProjectListComponent} from './components/projectList/project-list.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjectService} from './shared/api/project.service';
import {ImpProjectService} from './shared/service/imp-project.service';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppRoutingModules} from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SampleComponent,
    LocationComponent,
    SectorComponent,
    LocationPopupComponent,
    ProjectListComponent,
    ProjectComponent
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
    MatSortModule,
    HttpClientModule,
    AppRoutingModules

  ],
  providers: [
    {provide: ProjectService, useClass: ImpProjectService}
  ],
  entryComponents: [LocationPopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
