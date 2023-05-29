import { Observable, of } from 'rxjs';
import {
    OtherskillDataService, OtherskillEntity, OtherskillEntityAdd, OtherskillEntityUpdate, OtherskillModel
} from 'src/app/api/domain/otherskill';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class OtherskillDataServiceImpl extends OtherskillDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/otherskill';

  }

  public override add$(otherskill: OtherskillEntityAdd): Observable<OtherskillEntity> {
    return this.http.post<OtherskillEntity>(`${this.url}`, otherskill, {headers: this.headers});
  }

  public override get$(otherskillId: string): Observable<OtherskillEntity | undefined> {
    return this.http.get<OtherskillEntity>(this.url + '/' + otherskillId, {headers: this.headers});
  }

  public override list$(): Observable<OtherskillEntity[]> {
    return this.http.get<OtherskillEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(otherskill: OtherskillEntityUpdate): Observable<OtherskillEntityUpdate> {             // mivel van OtherskillEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<OtherskillEntityUpdate>(`${this.url}/${otherskill.id}`, otherskill, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(otherskill: OtherskillEntityUpdate): Observable<OtherskillEntityUpdate> {             // mivel van OtherskillEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<OtherskillEntityUpdate>(`${this.url}/${otherskill.id}`, otherskill, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
