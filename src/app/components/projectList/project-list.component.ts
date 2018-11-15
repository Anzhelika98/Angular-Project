import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElementProject {
  id: number;
  name: string;

}

const ELEMENT_DATA_PROJECT: PeriodicElementProject[] = [
  {
    'id': 1,
    'name': 'Project1'
  },
  {

    'id': 2,
    'name': 'Project2'
  }

];

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']

})
export class ProjectListComponent implements OnInit{

  public data: ProjectDto;

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_PROJECT);
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}


export interface ProjectDto {
  id: number;
}
