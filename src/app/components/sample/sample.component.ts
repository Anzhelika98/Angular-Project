import {Component, Directive, Input, OnInit} from '@angular/core';
import {ImplementationStatus} from '../../shared/model/implementation-status.model';
import {Project} from '../../shared/model/project.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {start} from 'repl';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  @Input() project: Project;
  @Input() sampleForm: FormGroup;

  public statuses: ImplementationStatus[] = [
    {
      'id': 1,
      'name': 'Planned'
    },
    {
      'id': 2,
      'name': 'Pipelined'
    },
    {
      'id': 3,
      'name': 'Ongoing'
    },
    {
      'id': 4,
      'name': 'Stalled'
    },
    {
      'id': 5,
      'name': 'Extended'
    },
    {
      'id': 6,
      'name': 'Terminated'
    },
    {
      'id': 7,
      'name': 'Suspended'
    },
    {
      'id': 8,
      'name': 'Completed'
    }
  ];


  constructor(private fb: FormBuilder) {

  }



  ngOnInit() {

  }


  public calculationOfDuration(): number {
    if (this.project.plannedEndDate && this.project.plannedStartDate &&
      (this.project.plannedEndDate.getTime() - this.project.plannedStartDate.getTime()) >= 0) {//24*60*60*1000
      return +((this.project.plannedEndDate.getTime() - this.project.plannedStartDate.getTime()) / 86400000).toFixed();
    }
    return null;
  }

  public dayOrDays(): boolean {
    if (this.calculationOfDuration() >= 0 && this.calculationOfDuration() < 10) {
      return true;
    }
  }


}
