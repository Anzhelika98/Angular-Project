import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProjectService} from '../../shared/api/project.service';
import {Project} from '../../shared/model/project.model';
import {switchMap} from 'rxjs/operators';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {element} from 'protractor';
import {Observable} from 'rxjs';


export interface PeriodicElementProject {
  id: number;
  name: string;
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']

})
export class ProjectListComponent implements OnInit {

  constructor(private projectService: ImpProjectService) {

  }


  public data: ProjectDto;
  public project: Project;
  public projectInfo: PeriodicElementProject;
  public dataSource: MatTableDataSource<PeriodicElementProject>;
  public projectList: PeriodicElementProject[] = [];
  public project$: Observable<Project>;
  public selectedId: number;
  displayedColumns: string[] = ['id', 'name'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.projectService.getProjects().subscribe(x => {
        this.projectService.projects = x;
        for (const project of x) {
          this.projectInfo = {
            'id': project['id'],
            'name': project['title']
          };

          this.projectList.push(this.projectInfo);
        }
        this.dataSource = new MatTableDataSource(this.projectList);
        this.dataSource.sort = this.sort;

      },
      error => console.error(error));
  }

  // this.project$ = this.route.paramMap.pipe(
  //   switchMap(params => {
  //     this.selectedId = +params.get('id');
  //     return this.service.getProjects().pipe();
  //   }));


  // public gotoProjects() {
  //   const projectId = this.project ? this.project.id : null;
  //   this.router.navigate(['/projects', {id: projectId}]);
  // }


}


export interface ProjectDto {
  id: number;
}
