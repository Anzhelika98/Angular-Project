import {Component, Input, OnInit} from '@angular/core';
import {ImplementationStatus} from '../../shared/model/implementation-status.model';
import {Project} from '../../shared/model/project.model';
import {FormGroup} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';

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


  constructor() {
  }

  public changingEndDate = false;


  ngOnInit() {
  }

  changingStartDateCalculation(event: MatDatepickerInputEvent<any>) {
    this.project.plannedStartDate = event.value;
    return this.calculationOfDuration();
  }


  changingEndDateCalculation(event: MatDatepickerInputEvent<any>) {
    this.project.plannedEndDate = event.value;
    return this.calculationOfDuration();
  }


  public calculationOfDuration(): number {
    if (this.project.plannedEndDate && this.project.plannedStartDate &&
      (this.project.plannedEndDate.getTime() - this.project.plannedStartDate.getTime()) >= 0
    ) {// 24*60*60*1000
      return +((this.project.plannedEndDate.getTime() - this.project.plannedStartDate.getTime()) / 86400000).toFixed();
    }
    if (this.project.plannedStartDate > this.project.plannedEndDate) {
      this.changingEndDate = true;
    }
    return null;
  }


  //
  // public dayOrDays(): boolean {
  //   this.duration = this.calculationOfDuration();
  //   if (this.duration >= 0 && this.duration < 10) {
  //     return true;
  //   }
  // }


}
