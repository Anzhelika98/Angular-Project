import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Project} from '../../shared/model/project.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() projectForm: FormGroup;
  @Input() project: Project;


  constructor() {
  }

  ngOnInit() {


  }


}
