import { Observable, of } from 'rxjs';
import {
    PhoneDataService, PhoneEntity, PhoneEntityAdd, PhoneEntityUpdate, PhoneModel
} from 'src/app/api/domain/phone';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class PhoneDataServiceImpl extends PhoneDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/phone';

  }

  public override add$(phone: PhoneEntityAdd): Observable<PhoneEntity> {
    return this.http.post<PhoneEntity>(`${this.url}`, phone, {headers: this.headers});
  }

  public override get$(phoneId: string): Observable<PhoneEntity | undefined> {
    return this.http.get<PhoneEntity>(this.url + '/' + phoneId, {headers: this.headers});
  }

  public override list$(): Observable<PhoneEntity[]> {
    return this.http.get<PhoneEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate> {             // mivel van PhoneEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<PhoneEntityUpdate>(`${this.url}/${phone.id}`, phone, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate> {             // mivel van PhoneEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<PhoneEntityUpdate>(`${this.url}/${phone.id}`, phone, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override delete$(phoneId: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${phoneId}`, {headers: this.headers});
  }

}
