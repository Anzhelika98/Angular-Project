import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../shared/api/project.service';
import {Observable} from 'rxjs';
import {Project} from '../../shared/model/project.model';



@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public project: Project;

  private project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute, private router: Router, private service: ProjectService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project$ = this.service.getProjectById(+id);

    this.project$.subscribe(
      project => {
        this.project = new Project();
        this.project.code = project.code;
        this.project.title = project.title;
        this.project.description = project.description;
        this.project.implementationStatusId = project.implementationStatusId;
        this.project.plannedStartDate = new Date(project.plannedStartDate);
        this.project.plannedEndDate = new Date(project.plannedEndDate);
        this.project.sectors = project.sectors;
        this.project.locations = project.locations;

      }
    );

  }

}
