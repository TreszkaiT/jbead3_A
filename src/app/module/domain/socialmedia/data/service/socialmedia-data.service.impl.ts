import { Observable, of } from 'rxjs';
import {
    SocialmediaDataService, SocialmediaEntity, SocialmediaEntityAdd, SocialmediaEntityUpdate, SocialmediaModel
} from 'src/app/api/domain/socialmedia';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class SocialmediaDataServiceImpl extends SocialmediaDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/socialmedia';

  }

  public override add$(socialmedia: SocialmediaEntityAdd): Observable<SocialmediaEntity> {
    return this.http.post<SocialmediaEntity>(`${this.url}`, socialmedia, {headers: this.headers});
  }

  public override get$(socialmediaId: string): Observable<SocialmediaEntity | undefined> {
    return this.http.get<SocialmediaEntity>(this.url + '/' + socialmediaId, {headers: this.headers});
  }

  public override list$(): Observable<SocialmediaEntity[]> {
    return this.http.get<SocialmediaEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(socialmedia: SocialmediaEntityUpdate): Observable<SocialmediaEntityUpdate> {             // mivel van SocialmediaEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<SocialmediaEntityUpdate>(`${this.url}/${socialmedia.id}`, socialmedia, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(socialmedia: SocialmediaEntityUpdate): Observable<SocialmediaEntityUpdate> {             // mivel van SocialmediaEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<SocialmediaEntityUpdate>(`${this.url}/${socialmedia.id}`, socialmedia, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
