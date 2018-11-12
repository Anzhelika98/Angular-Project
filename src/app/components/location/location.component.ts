import {Component, OnInit} from '@angular/core';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {LocationPopupComponent} from './location.popup.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  public location: Location;
  public country: Country;
  public district: District;
  public data: SendLocationData;

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
      'name': 'Martakert'

    },
    {
      'id': 2,
      'name': 'Martuni'

    },
    {
      'id': 3,
      'name': 'Askeran'
    },
    {
      'id': 4,
      'name': 'Hadrut'
    },
    {
      'id': 5,
      'name': 'Syunik'
    },
    {
      'id': 6,
      'name': 'Shirak'
    },
    {
      'id': 7,
      'name': 'Ararat'
    },
    {
      'id': 8,
      'name': 'Armavir'
    }


  ];

  ngOnInit() {

    this.country = new Country();
    this.district = new District();
  }

  openLocationPopup(): void {
    const dialogRef = this.dialog.open(LocationPopupComponent, {
      width: '250px',
      data: {countryId: 1, countries: this.countries, districtId: 2, districts: this.districts, percent: 100}
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
