import {from, Observable, of, zip} from 'rxjs';
import {Project} from '../model/project.model';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectService} from '../api/project.service';
import {Sector} from '../model/sector.model';
import {Country} from '../model/country.model';
import {District} from '../model/district.model';
import {element} from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ImpProjectService extends ProjectService {

  private static id = 4;
  private _projects: Project[];


  constructor(private http: HttpClient) {
    super();
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
    let project;
    if (this.projects) {
      project = this.projects.find(item => item.id === id);
    }
    if (project) {
      return of(project);
    }
    return this.http.get<Project>(`./src/app/shared/mock/project-${id}.json`);
  }


  get projects(): Project[] {
    return this._projects;
  }


  saveProject(project: Project): Observable<any> {
    if (project && project.title && project.code) {
      if (project.id) {
        let index = this.projects.findIndex(el => el.id === project.id);
        this.projects[index] = project;
        return of({
          success: true
        });
      } else {
        project.id = ImpProjectService.id++;
        this._projects.push(project);
        return of({
          success: true
        });
      }
    }
    return of({
      success: false
    });


  }

  deleteProject(id: number): Observable<any> {
    const index = this.projects.findIndex(el => el.id === id);
    if (index > -1) {
      this.projects.splice(index, 1);
      return of({
        success: true
      });
    }
    return of({
      success: false,
      message: 'no such project'
    });


  }

}
