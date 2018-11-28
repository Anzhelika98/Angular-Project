import {Observable} from 'rxjs';
import {Project} from '../model/project.model';


export abstract class ProjectService {

  /**
   *
   */
  abstract getProjects(): Observable<Project[]>;

  /**
   * Method find in cache by
   * @param id the identity of Project
   */
  abstract getProjectById(id: number): Observable<Project>;

  abstract deleteProject(id: number): Observable<Project>;

}
