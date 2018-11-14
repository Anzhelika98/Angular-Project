import {Component, OnInit, ViewChild} from '@angular/core';
import {Sector} from '../../shared/model/sector.model';

import {MatDialog} from '@angular/material';
import {SectorPopupComponent} from './sector-popup.component';
import {MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElement {
  name: string;
  percent: number;
}

const ELEMENT_DATA_SECTOR: PeriodicElement[] = [
  {
    'name': 'Health',
    'percent': 100
  },
  {

    'name': 'Agricalture',
    'percent': 80
  },
  {
    'name': 'Economy',
    'percent': 88
  },
  {

    'name': 'Administrative',
    'percent': 99
  }
];

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  public sector: Sector;
  public data: SendSectorData;

  displayedColumns: string[] = ['name', 'percent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_SECTOR);
  @ViewChild(MatSort) sort: MatSort;


  public sectors: Sector[] = [
    {
      'id': 1,
      'name': 'Health'
    },
    {
      'id': 2,
      'name': 'Agricalture'
    },
    {
      'id': 3,
      'name': 'Economy'
    },
    {
      'id': 4,
      'name': 'Administrative'
    }
  ];

  constructor(public dialog: MatDialog) {

  }

  ngOnInit() {
    this.sector = new Sector();
    this.dataSource.sort = this.sort;
  }

  openSectorPopup(): void {
    const dialogRef = this.dialog.open(SectorPopupComponent, {
      width: '250px',
      data: {sectorId: 1, sectors: this.sectors, percent: 66}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }

}

export interface SendSectorData {
  sectorId: number;
  percent: number;
}
