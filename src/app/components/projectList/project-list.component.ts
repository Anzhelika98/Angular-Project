import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';

import {Project} from '../../shared/model/project.model';

import {ImpProjectService} from '../../shared/service/imp-project.service';
import {Title} from '@angular/platform-browser';


export interface ProjectList {
  id: number;
  name: string;
}


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']

})
export class ProjectListComponent implements OnInit {
  public data: ProjectDto;
  public project: Project;
  public projectInfo: ProjectList;
  projectList: ProjectList[] = [];


  public name;

  constructor(private projectService: ImpProjectService, private router: Router, private title: Title) {

  }


  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.setTitle('Projects');
    this.getProjectList();

  }


  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
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
