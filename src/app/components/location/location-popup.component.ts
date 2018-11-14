import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';


@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html'
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





