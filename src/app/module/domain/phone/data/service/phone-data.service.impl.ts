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

  //public uri = environment.uri;
  public url: string = '';

  // let headers = new HttpHeaders();                                                      // let - el csak lentebbi metóduson belül deklarálhatok
  // headers = headers.set('Content-Type', 'application/json; charset=utf-8');             // headers hogy ne text/plain-be küldje a szerver felé, mert úgy nem fogadja el. Hanem json-ban

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  // private phoneMap: Map<number, PhoneEntity> = new Map<number, PhoneEntity>();
  // #region Constructors (1)

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/phone';

  }

  // #endregion Constructors (1)

  // #region Public Methods (4)

  public override add$(phone: PhoneEntityAdd): Observable<PhoneEntity> {
    //const id = uuidv4();
    //return this.http.post<PhoneEntity>(`${this.uri}/phone`, phone, {headers: this.headers});
    return this.http.post<PhoneEntity>(`${this.url}`, phone, {headers: this.headers});
  }

  public override get$(phoneId: string): Observable<PhoneEntity | undefined> {
    //return this.http.get<PhoneEntity>(`${this.uri}/phone/${phoneId}`, {headers: this.headers});
    return this.http.get<PhoneEntity>(this.url + '/' + phoneId, {headers: this.headers});
  }

  public override list$(): Observable<PhoneEntity[]> {
    //return this.http.get<PhoneEntity[]>(`${this.uri}/phone/all`, {headers: this.headers});
    return this.http.get<PhoneEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate> {             // mivel van PhoneEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
    //return this.http.put<PhoneEntityUpdate>(`${this.uri}/phone`, entity, {headers: this.headers});
      return this.http.put<PhoneEntityUpdate>(`${this.url}/${phone.id}`, phone, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a code: lesz benne, a pnumber: az nem
  }

  public override patch$(phone: PhoneEntityUpdate): Observable<PhoneEntityUpdate> {             // mivel van PhoneEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
    //return this.http.put<PhoneEntityUpdate>(`${this.uri}/phone`, entity, {headers: this.headers});
      return this.http.patch<PhoneEntityUpdate>(`${this.url}/${phone.id}`, phone, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a code: lesz benne, a pnumber: az nem
  }

  // create és delete hiányzik!!!!

  // #endregion Public Methods (4)
}
