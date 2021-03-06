import {Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {LocationPopupComponent} from './location-popup.component';
import {MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {Observable, zip} from 'rxjs';
import {Location} from '../../shared/model/location.model';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() locationForm: FormGroup;

  public country: Country;
  public district: District;
  @Input() locations: Location[];
  public data: SendLocationData;
  public countriesList: Country[];
  public districtList: District[];
  public dataSource: MatTableDataSource<any>;

  isReady = false;

  displayedColumns: string[] = ['country', 'district', 'percent'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog, private projectService: ImpProjectService) {

  }


  ngOnInit() {

    const countries$: Observable<any> = this.projectService.getCountries();
    const districts$: Observable<any> = this.projectService.getDistricts();
    zip(countries$, districts$).subscribe((res: any) => {
        this.countriesList = res[0];
        this.districtList = res[1];
        this.isReady = true;
      },
      (error) => console.log(error),
      () => this.initSort()
    );


  }


  initSort() {
    this.dataSource = new MatTableDataSource(this.locations ? this.locations : []);
    this.dataSource.sort = this.sort;
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
      this.addLocation(result);
      this.data = result;
      this.dataSource.sort = this.sort;
    });
  }

  public getLocationCountryById(id: number): string {
    return this.countriesList.find(el => el.id === id).name;
  }

  public getLocationDistrictById(id: number): string {
    return this.districtList.find(el => el.id === id).name;
  }

  public addLocation(location: Location) {
    this.dataSource.data.push(location);
    this.dataSource = new MatTableDataSource(<any>this.dataSource.data);


  }


}

export interface SendLocationData {
  countryId: number;
  districtId: number;
  percent: number;
}
