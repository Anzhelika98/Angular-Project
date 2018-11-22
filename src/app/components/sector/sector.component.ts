import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Sector} from '../../shared/model/sector.model';
import {MatSort, MatTableDataSource} from '@angular/material';
import {FormGroup} from '@angular/forms';
import {ImpProjectService} from '../../shared/service/imp-project.service';
import {Project} from '../../shared/model/project.model';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})

export class SectorComponent implements OnInit {
  @Input() sectorForm: FormGroup;
  @Input() sectors: Sector[];
  @Input() project: Project;

  public data: SendSectorData;
  public dataSource: MatTableDataSource<any>;
  public sectorList: Sector[] = [];
  public selectedSectorId: number;


  isReady = false;
  displayedColumns: string[] = ['name', 'percent'];


  @ViewChild(MatSort) sort: MatSort;

  constructor(private projectService: ImpProjectService) {

  }

  ngOnInit() {
    this.projectService.getSectors().subscribe(
      sectors => {
        this.sectorList = sectors;
        this.isReady = true;
      }
    );
    this.dataSource = new MatTableDataSource(this.sectors);
    // this.dataSource.sort = this.sort;

  }

  public getSectorNameById(id: number): string {
    return this.sectorList.find(el => el.id === id).name;
  }

  public addSector() {
    const sector = this.sectorForm.controls.sectorPercent;
    if (sector.value && this.selectedSectorId) {
      this.dataSource.data = [...this.dataSource.data, {'id': this.selectedSectorId, 'percent': sector.value}];
    }

    this.selectedSectorId = null;
    sector.reset();
  }


}

export interface SendSectorData {
  sectorId: number;
  percent: number;
}
