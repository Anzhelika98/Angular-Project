import {Component, OnInit, ViewChild} from '@angular/core';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {LocationPopupComponent} from './location-popup.component';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';


export interface PeriodicElementLoc {
  country: string;
  district: string;
  percent: number;
}

const ELEMENT_DATA_LOC: PeriodicElementLoc[] = [
  {
    'country': 'Artsakh',
    'district': 'Martakaert',
    'percent': 50
  },
  {
    'country': 'Erevan',
    'district': 'Syunik',
    'percent': 88
  },
  {
    'country': 'Artsakh',
    'district': 'Martuni',
    'percent': 56
  }

];

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public country: Country;
  public district: District;
  public data: SendLocationData;

  displayedColumns: string[] = ['country', 'district', 'percent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_LOC);
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {

  }

  public countries: Country[] =
    [
      {
        'id': 1,
        'name': 'Artsakh'
      },
      {
        'id': 2,
        'name': 'Erevan'
      }
    ];

  public districts: District[] = [
    {
      'id': 1,
      'name': 'Martakert',
      'countryId': 1
    },
    {
      'id': 2,
      'name': 'Martuni',
      'countryId': 1
    },
    {
      'id': 3,
      'name': 'Askeran',
      'countryId': 1
    },
    {
      'id': 4,
      'name': 'Hadrut',
      'countryId': 1
    },
    {
      'id': 5,
      'name': 'Syunik',
      'countryId': 2
    },
    {
      'id': 6,
      'name': 'Shirak',
      'countryId': 2
    },
    {
      'id': 7,
      'name': 'Ararat',
      'countryId': 2
    },
    {
      'id': 8,
      'name': 'Armavir',
      'countryId': 2
    }


  ]
  ;

  ngOnInit() {

    this.country = new Country();
    this.district = new District();
  }

  openLocationPopup(): void {
    const dialogRef = this.dialog.open(LocationPopupComponent, {
      width: '250px',
      data: {countryId: 1, countries: this.countries, districtId: 3, districts: this.districts, percent: 80}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
    });
  }


}

export interface SendLocationData {
  countryId: number;
  districtId: number;
  percent: number;
}
