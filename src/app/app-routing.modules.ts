import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectListComponent} from './components/projectList/project-list.component';
import {ProjectEditComponent} from './components/projectEdit/project-edit.component';


const routes: Routes = [
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/:id',
    component: ProjectEditComponent
  },
  {
    path: '**',
    redirectTo: 'projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModules {

}
