import {Observable} from 'rxjs';
import {Project} from '../model/project.model';


export abstract class ProjectService {

  abstract getProjects(): Observable<Project[]>;

  abstract getProjectById(id: number): Observable<Project>;

  abstract createProject(): Observable<Project>;

  abstract deleteProject(id: number): Observable<Project>;

}
