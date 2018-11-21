import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Sector} from '../../shared/model/sector.model';
import {MatDialog} from '@angular/material';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../shared/api/project.service';
import {from, Observable, pipe} from 'rxjs';
import {Project} from '../../shared/model/project.model';
import {log} from 'util';
import {map, tap} from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  percent: number;
}

// const ELEMENT_DATA_SECTOR: PeriodicElement[] = [
//   {
//     'name': 'Health',
//     'percent': 100
//   },
//   {
//
//     'name': 'Agricalture',
//     'percent': 80
//   },
//   {
//     'name': 'Economy',
//     'percent': 88
//   },
//   {
//
//     'name': 'Administrative',
//     'percent': 99
//   }
// ];

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {


  @Input() sectorForm: FormGroup;
  @Input() sectors: Sector[];
  public data: SendSectorData;
  public dataSource: MatTableDataSource<Sector>;
  public sectorList: Sector[] = [];

  isReady = false;


  displayedColumns: string[] = ['name', 'percent'];

  @ViewChild(MatSort) sort: MatSort;


  constructor(private projectService: ImpProjectService) {

  }

  ngOnInit() {
    this.projectService.getSectors().subscribe(
      sectors => {
        this.sectorList = sectors;
        this.isReady = true;
      }
    );
    this.dataSource = new MatTableDataSource(this.sectors);
    this.dataSource.sort = this.sort;

  }

  public getSectorNameById(id: number): string {
    return this.sectorList.find(el => el.id === id).name;

  }


}

export interface SendSectorData {
  sectorId: number;
  percent: number;
}
