import {Component, Input, OnInit} from '@angular/core';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../shared/model/project.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  public projectForm: FormGroup;
  public project: Project;
  private project$: Observable<Project>;

  public isReady = false;

  constructor(private projectService: ImpProjectService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }


  canceled() {
    // check something
    this.goBack();
  }

  confirmed(close: boolean) {
    this.setProjectValues()
    this.projectService.saveProject(this.project)
      .subscribe(
        response => {
          if (response.success) {
            if (close) {
              this.goBack();
            }
          }
        }
      )
    ;
  }


  goBack() {
    this.router.navigateByUrl('projects');
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.project$ = this.projectService.getProjectById(id);
      this.project$.subscribe(
        project => {
          this.project = new Project();
          this.project.id = project.id;
          this.project.code = project.code;
          this.project.title = project.title;
          this.project.description = project.description;
          this.project.implementationStatusId = project.implementationStatusId;
          this.project.plannedStartDate = new Date(project.plannedStartDate);
          this.project.plannedEndDate = new Date(project.plannedEndDate);
          this.project.sectors = project.sectors;
          this.project.locations = project.locations;
          this.initFormGroup();
          this.isReady = true;
          document.title = this.project.title;
        });
    } else {
      this.project = new Project();
      this.initFormGroup();
      this.isReady = true;
    }
  }

  initFormGroup() {
    this.projectForm = this.fb.group({
      sampleForm: this.fb.group({
        code: [this.project.code, Validators.required],
        title: [this.project.title, Validators.required],
        description: [this.project.implementationStatusId],
        implementationStatus: [this.project.implementationStatusId],
        startDate: [this.project.plannedStartDate, Validators.required],
        endDate: [this.project.plannedEndDate],
      }),
      sectorForm: this.fb.group({
        select: null,
        percent: null
      }),
      locationForm: this.fb.group({
        country: [null, Validators.required],
        district: [null, Validators.required],
        percent: null
      })
    });
  }


  private setProjectValues() {
    this.project.code = this.projectForm.value.sampleForm.code;
    this.project.title = this.projectForm.value.sampleForm.title;
  }
}
