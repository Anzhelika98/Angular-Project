import {Component, Directive, OnInit} from '@angular/core';
import {ImplementationStatus} from '../../shared/model/implementation-status.model';
import {Project} from '../../shared/model/project.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  public project: Project;

  ngOnInit() {
    this.project = new Project();


  }

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


}
