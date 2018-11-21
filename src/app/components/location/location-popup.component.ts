import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';


@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html'
})
export class LocationPopupComponent implements OnInit {

  @Input() locationForm: FormGroup;
  public countriesList: Country[];
  public districtList: District[];
  public country: Country;
  public district: District;

  constructor(
    public dialogRef: MatDialogRef<LocationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationPopupData,
    private projectService: ImpProjectService) {
    this.country = new Country();
    this.district = new District();

  }


  ngOnInit() {
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
  locationForm: FormGroup;
}





