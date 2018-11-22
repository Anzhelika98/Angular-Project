import {from, Observable, of, zip} from 'rxjs';
import {Project} from '../model/project.model';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectService} from '../api/project.service';
import {Sector} from '../model/sector.model';
import {Country} from '../model/country.model';
import {District} from '../model/district.model';


@Injectable({
  providedIn: 'root'
})
export class ImpProjectService extends ProjectService {

  private static id = 4;

  private _projects: Project[];


  constructor(private http: HttpClient) {
    super();
  }

  createProject(): Observable<Project> {

    return undefined;
  }

  deleteProject(id: number): Observable<Project> {
    return;
  }

  getProjects(): Observable<Project[]> {

    if (!this._projects) {
      const projects: Observable<Project[]> = zip(
        this.http.get<Project>('./src/app/shared/mock/project-1.json'),
        this.http.get<Project>('./src/app/shared/mock/project-2.json'),
        this.http.get<Project>('./src/app/shared/mock/project-3.json')
      ).pipe(
        tap(data => {
          if (!this._projects) {
            this._projects = <Project[]>data;
          }
        })
      );
      return projects;
    } else {
      return of(this._projects);
    }

  }

  getSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>('./src/app/shared/mock/sector.json');
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('./src/app/shared/mock/country.json');
  }

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>('./src/app/shared/mock/district.json');
  }


  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`./src/app/shared/mock/project-${id}.json`);
  }


  get projects(): Project[] {
    return this._projects;
  }

  set projects(value: Project[]) {
    this._projects = value;
  }


  save(project: Project): Observable<any> {
    // save function
    alert('saved');
    return of({
      success: true
    });
  }
}
