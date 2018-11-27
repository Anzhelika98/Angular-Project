import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Country} from '../../shared/model/country.model';
import {District} from '../../shared/model/district.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {Location} from '../../shared/model/location.model';


@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html'
})
export class LocationPopupComponent implements OnInit {

  public locationForm: FormGroup;
  public countriesList: Country[];
  public districtList: District[];
  public districtsByCountryId: any[];
  public selectedCountryId: number;
  public selectedDistrictId: number;

  constructor(
    public dialogRef: MatDialogRef<LocationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationPopupData,
    private projectService: ImpProjectService,
    private fb: FormBuilder) {

    this.locationForm = this.fb.group({
      country: [null/*, Validators.required*/],
      district: [null/*, Validators.required*/],
      percent: null
    });

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

  public filterDistrict(e: any) {
    this.districtsByCountryId = this.districtList.filter((el) => el.countryId === e);
  }

  confirm() {
    const location = new Location();
    const percent = this.locationForm.value.percent;
    location.countryId = this.selectedCountryId;
    location.districtId = this.selectedDistrictId;
    location.percent = percent;

    this.dialogRef.close(location);
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





