import {Component, OnInit} from '@angular/core';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  public location: Location;
  public country: Country;
  public district: District;

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

  ngOnInit() {

    this.country = new Country();
    this.district = new District();
  }
}
