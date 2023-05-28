import { Observable, of } from 'rxjs';
import {
    LanguageDataService, LanguageEntity, LanguageEntityAdd, LanguageEntityUpdate, LanguageModel
} from 'src/app/api/domain/language';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class LanguageDataServiceImpl extends LanguageDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/language';

  }

  public override add$(language: LanguageEntityAdd): Observable<LanguageEntity> {
    return this.http.post<LanguageEntity>(`${this.url}`, language, {headers: this.headers});
  }

  public override get$(languageId: string): Observable<LanguageEntity | undefined> {
    return this.http.get<LanguageEntity>(this.url + '/' + languageId, {headers: this.headers});
  }

  public override list$(): Observable<LanguageEntity[]> {
    return this.http.get<LanguageEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(language: LanguageEntityUpdate): Observable<LanguageEntityUpdate> {             // mivel van LanguageEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<LanguageEntityUpdate>(`${this.url}/${language.id}`, language, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(language: LanguageEntityUpdate): Observable<LanguageEntityUpdate> {             // mivel van LanguageEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<LanguageEntityUpdate>(`${this.url}/${language.id}`, language, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
