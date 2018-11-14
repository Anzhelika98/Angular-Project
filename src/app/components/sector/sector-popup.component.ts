import {Component, Inject} from '@angular/core';
import {Sector} from '../../shared/model/sector.model';
import {Country} from '../../shared/model/country.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup-sector',
  templateUrl: './sector-popup.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorPopupComponent {

  public sector: Sector;

  constructor(
    public dialogRef: MatDialogRef<SectorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SectorPopupData) {
    this.sector = new Sector();
  }

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


  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface SectorPopupData {
  sectorId: number;
  sectors: Array<Country>;
  percent: number;
}

