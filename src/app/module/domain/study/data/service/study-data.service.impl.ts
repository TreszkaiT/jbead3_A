import { Observable, of } from 'rxjs';
import {
    StudyDataService, StudyEntity, StudyEntityAdd, StudyEntityUpdate, StudyModel
} from 'src/app/api/domain/study';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class StudyDataServiceImpl extends StudyDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/study';

  }

  public override add$(study: StudyEntityAdd): Observable<StudyEntity> {
    return this.http.post<StudyEntity>(`${this.url}`, study, {headers: this.headers});
  }

  public override get$(studyId: string): Observable<StudyEntity | undefined> {
    return this.http.get<StudyEntity>(this.url + '/' + studyId, {headers: this.headers});
  }

  public override list$(): Observable<StudyEntity[]> {
    return this.http.get<StudyEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(study: StudyEntityUpdate): Observable<StudyEntityUpdate> {             // mivel van StudyEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<StudyEntityUpdate>(`${this.url}/${study.id}`, study, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(study: StudyEntityUpdate): Observable<StudyEntityUpdate> {             // mivel van StudyEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<StudyEntityUpdate>(`${this.url}/${study.id}`, study, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override delete$(studyId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${studyId}`, {headers: this.headers});
}

}
