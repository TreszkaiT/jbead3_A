import { Observable, of } from 'rxjs';
import {
    PictureDataService, PictureEntity, PictureEntityAdd, PictureEntityUpdate, PictureModel
} from 'src/app/api/domain/picture';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class PictureDataServiceImpl extends PictureDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/picture';

  }

  public override add$(picture: PictureEntityAdd): Observable<PictureEntity> {
    return this.http.post<PictureEntity>(`${this.url}`, picture, {headers: this.headers});
  }

  public override get$(pictureId: string): Observable<PictureEntity | undefined> {
    return this.http.get<PictureEntity>(this.url + '/' + pictureId, {headers: this.headers});
  }

  public override list$(): Observable<PictureEntity[]> {
    return this.http.get<PictureEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(picture: PictureEntityUpdate): Observable<PictureEntityUpdate> {             // mivel van PictureEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<PictureEntityUpdate>(`${this.url}/${picture.id}`, picture, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(picture: PictureEntityUpdate): Observable<PictureEntityUpdate> {             // mivel van PictureEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<PictureEntityUpdate>(`${this.url}/${picture.id}`, picture, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
