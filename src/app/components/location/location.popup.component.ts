import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';


@Component({
  selector: 'app-location-popup',
  templateUrl: './location.component.popup.html'
})
export class LocationPopupComponent {
  public country: Country;
  public district: District;
  constructor(
    public dialogRef: MatDialogRef<LocationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationPopupData) {
    this.country = new Country();
    this.district = new District();
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

  onNoClick(): void {
    this.dialogRef.close();
  }



}

export interface LocationPopupData {
  countryId: number;
  countries: Array<Country>;
  districtId: number;
  districts: Array<District>;
  percent: number;
}





