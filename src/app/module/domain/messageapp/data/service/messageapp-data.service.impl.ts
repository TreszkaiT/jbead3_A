import { Observable, of } from 'rxjs';
import {
    MessageappDataService, MessageappEntity, MessageappEntityAdd, MessageappEntityUpdate, MessageappModel
} from 'src/app/api/domain/messageapp';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class MessageappDataServiceImpl extends MessageappDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/messageapp';

  }

  public override add$(messageapp: MessageappEntityAdd): Observable<MessageappEntity> {
    return this.http.post<MessageappEntity>(`${this.url}`, messageapp, {headers: this.headers});
  }

  public override get$(messageappId: string): Observable<MessageappEntity | undefined> {
    return this.http.get<MessageappEntity>(this.url + '/' + messageappId, {headers: this.headers});
  }

  public override list$(): Observable<MessageappEntity[]> {
    return this.http.get<MessageappEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(messageapp: MessageappEntityUpdate): Observable<MessageappEntityUpdate> {             // mivel van MessageappEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<MessageappEntityUpdate>(`${this.url}/${messageapp.id}`, messageapp, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(messageapp: MessageappEntityUpdate): Observable<MessageappEntityUpdate> {             // mivel van MessageappEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<MessageappEntityUpdate>(`${this.url}/${messageapp.id}`, messageapp, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
