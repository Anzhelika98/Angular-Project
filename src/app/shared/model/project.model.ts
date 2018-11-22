import {Sector} from './sector.model';
import {Location} from './location.model';


export class Project {
  public id: number;
  public code: string = null;
  public title: string = null;
  public description: string = null;
  public implementationStatusId: number = null;
  public plannedStartDate: Date = null;
  public plannedEndDate: Date = null;
  public sectors: Sector[] = null;
  public locations: Location[] = null;
}
