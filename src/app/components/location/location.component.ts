import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {LocationPopupComponent} from './location-popup.component';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';


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

  @Input() locationForm: FormGroup;

  public country: Country;
  public district: District;
  public data: SendLocationData;
  public countriesList: Country[];
  public districtList: District[];

  displayedColumns: string[] = ['country', 'district', 'percent'];
  dataSource = new MatTableDataSource(ELEMENT_DATA_LOC);
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private projectService: ImpProjectService) {

  }


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.projectService.getCountries().subscribe(
      countries => {
        this.countriesList = countries;
      }
    );

    this.projectService.getDistricts().subscribe(
      districts => {
        this.districtList = districts;
      }
    );

  }

  openLocationPopup(): void {
    const dialogRef = this.dialog.open(LocationPopupComponent, {
      width: '250px',
      data: {
        countryId: 1, countries: this.countriesList, districtId: 3, districts: this.districtList, percent: 80,
        locationForm: this.locationForm
      }
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
