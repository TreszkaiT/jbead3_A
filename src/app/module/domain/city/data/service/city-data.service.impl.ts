import { Observable, of } from 'rxjs';
import {
    CityDataService, CityEntity, CityEntityAdd, CityEntityUpdate, CityModel
} from 'src/app/api/domain/city';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class CityDataServiceImpl extends CityDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/city';

  }

  public override add$(city: CityEntityAdd): Observable<CityEntity> {
    return this.http.post<CityEntity>(`${this.url}`, city, {headers: this.headers});
  }

  public override get$(cityId: string): Observable<CityEntity | undefined> {
    return this.http.get<CityEntity>(this.url + '/' + cityId, {headers: this.headers});
  }

  public override list$(): Observable<CityEntity[]> {
    return this.http.get<CityEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(city: CityEntityUpdate): Observable<CityEntityUpdate> {             // mivel van CityEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<CityEntityUpdate>(`${this.url}/${city.id}`, city, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(city: CityEntityUpdate): Observable<CityEntityUpdate> {             // mivel van CityEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<CityEntityUpdate>(`${this.url}/${city.id}`, city, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
