import { Injectable } from '@angular/core';

import { Observable, map, of } from 'rxjs';
import { ConfigDataService, ConfigEntity } from 'src/app/api/config';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/core/config/service';

@Injectable()
export class ConfigDataServiceImpl extends ConfigDataService {

  // private config: ConfigEntity = {
  //   id: 1,
  //   theme: 'kb-dark-theme',
  // }

  // public apiUrl = environment.apiUrl;

  public apiUrl: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  public constructor(private http: HttpClient, private config: ConfigService){
    super();

    this.apiUrl = this.config.get('apiUrl') + '/config';
  }

  public override get$(userId: string): Observable<ConfigEntity | null> {
    //return of(this.config);
    //console.log(this.httpClient.get<ConfigEntity>(`${this.apiUrl}/config/${userId}`));//.pipe(map( () => console.log(this.config))));
    //return this.httpClient.get<ConfigEntity>(`${this.apiUrl}/config/${userId}`);
    return this.http.get<ConfigEntity>(`${this.apiUrl}/${userId}`, {headers: this.headers});
  }
  public override update$(config: ConfigEntity): Observable<ConfigEntity> {
    //return of(config);
    //return this.httpClient.patch<ConfigEntity>(`${this.apiUrl}/config`, config);
    return this.http.patch<ConfigEntity>(`${this.apiUrl}`, config, {headers: this.headers});
  }
}
