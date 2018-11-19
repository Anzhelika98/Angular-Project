import {Observable, of, zip} from 'rxjs';
import {Project} from '../model/project.model';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ProjectService} from '../api/project.service';


@Injectable({
  providedIn: 'root'
})
export class ImpProjectService extends ProjectService {


  private _projects: Project[];

  constructor(private http: HttpClient) {
    super();
  }

  createProject(): Observable<Project> {

    return undefined;
  }


  getProjects(): Observable<Project[]> {
    const projects: Observable<Project[]> = zip(
      this.http.get('./src/app/shared/mock/project-1.json'),
      this.http.get('./src/app/shared/mock/project-2.json'),
      this.http.get('./src/app/shared/mock/project-3.json')
    ).pipe(
      map((project: Project) => ({project}))
    );

    return projects;
  }


  deleteProject(id: number): Observable<Project> {
    return;
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get('./src/app/shared/mock/project-1.json').pipe(
      map((project) => (project as Array<Project>).find((elem) => id === elem['id']))
    );
  }

  get projects(): Project[] {
    return this._projects;
  }

  set projects(value: Project[]) {
    this._projects = value;
  }


}
