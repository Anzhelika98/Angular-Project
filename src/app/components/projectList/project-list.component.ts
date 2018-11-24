import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProjectService} from '../../shared/api/project.service';
import {Project} from '../../shared/model/project.model';
import {switchMap, tap} from 'rxjs/operators';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {element} from 'protractor';
import {Observable, pipe} from 'rxjs';


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

  constructor(private projectService: ImpProjectService, private router: Router) {

  }


  public data: ProjectDto;
  public project: Project;
  public projectInfo: PeriodicElementProject;
  @Input() projectList: PeriodicElementProject[] = [];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    document.title = 'Projects';

    this.getProjectList();

  }

  public getProjectList() {
    this.projectService.getProjects().subscribe(projects => {
        this.projectList = [];
        for (const project of projects) {
          this.projectInfo = {
            'id': project['id'],
            'name': project['title']
          };

          this.projectList.push(this.projectInfo);
        }
      },
      error => console.error(error)
    );
  }

  public goToNewProject() {
    this.router.navigateByUrl(`projects/-1`);
  }


  public deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe(
      response => {
        if (response.success) {
          this.getProjectList();
        } else {
          alert('don\'t deleted');
        }
      }
    );

  }

  // public gotoProjects() {
  //   const projectId = this.project ? this.project.id : null;
  //   this.router.navigate(['/projects', {id: projectId}]);
  // }


}


export interface ProjectDto {
  id: number;
}
