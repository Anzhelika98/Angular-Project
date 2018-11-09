import {Component, OnInit} from '@angular/core';
import {Sector} from '../../shared/model/sector.model';


@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {

  public sector: Sector;


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

  ngOnInit() {
    this.sector = new Sector();
  }

}
