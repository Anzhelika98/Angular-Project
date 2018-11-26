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
  public unusedSectorList: Sector[] = [];
  private allSectors: Sector[] = [];
  public selectedSectorId: number;
  private percentSum = 0;
  public status = false;


  isReady = false;
  displayedColumns: string[] = ['name', 'percent', 'delete'];


  @ViewChild(MatSort) sort: MatSort;

  constructor(private projectService: ImpProjectService) {

  }

  ngOnInit() {

    this.projectService.getSectors().subscribe(
      sectors => {
        this.isReady = true;
        this.allSectors = sectors;
        this.initUnusedSectors();


      }
    );
    this.dataSource = new MatTableDataSource(this.sectors);
    this.dataSource.sort = this.sort;


  }

  public getSectorNameById(id: number): string {
    let sector = this.allSectors.find(el => el.id === id);
    return sector.name;

  }

  public addSector(): void {
    const percent = this.sectorForm.controls.percent;
    const perSum = this.percentSum;
    if (percent.value && this.selectedSectorId) {
      this.percentSum += +percent.value;
      if (this.percentSum <= 100) {
        if (!this.dataSource.data) {
          this.dataSource.data = [{'sectorId': this.selectedSectorId, 'percent': percent.value}];
          this.dataSource.sort = this.sort;
        } else {
          this.dataSource.data = [...this.dataSource.data, {'sectorId': this.selectedSectorId, 'percent': percent.value}];
          this.dataSource.sort = this.sort;
        }
        this.selectedSectorId = null;
        this.initUnusedSectors();
        percent.reset();
        this.status = false;
      } else {
        this.percentSum = perSum;
        this.status = true;
      }
    }

  }

  public deleteSectorRow(id: number) {
    const index = this.dataSource.data.findIndex(elem => elem.sectorId === id);
    this.dataSource.data.splice(index, 1);
    this.initUnusedSectors();
    this.dataSource.data = [...this.dataSource.data];
  }


  private initUnusedSectors() {
    this.unusedSectorList = [];
    this.percentSum = 0;
    loop: for (let usedSector of this.allSectors) {
      if (this.dataSource.data) {
        for (let sector of this.dataSource.data) {
          if (sector.sectorId === usedSector.id) {
            this.percentSum += +sector.percent;
            continue loop;
          }
        }
      }
      this.unusedSectorList.push(usedSector);
    }
  }
}

export interface SendSectorData {
  sectorId: number;
  percent: number;
}
