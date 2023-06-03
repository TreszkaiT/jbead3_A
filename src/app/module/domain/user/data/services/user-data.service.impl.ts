import { Observable, of } from 'rxjs';
import {
    UserDataService,
    UserEntity,
    UserEntityAdd,
    UserEntityUpdate,
    UserModel,
} from 'src/app/api/domain/user';
import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from 'src/app/core/config';

@Injectable()
export class UserDataServiceImpl extends UserDataService {

    public url: string = '';

    private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

    constructor(private http: HttpClient, private config: ConfigService) {
        super();
    
        this.url = this.config.get('apiUrl') + '/user';
      }

    public add$(user: UserEntityAdd): Observable<UserEntity> {
        return this.http.post<UserEntity>(`${this.url}`, user, {headers: this.headers});
    }
    public get$(userId: string): Observable<UserEntity | undefined> {
        return this.http.get<UserEntity>(this.url + '/' + userId, {headers: this.headers});
    }
    public list$(): Observable<UserEntity[]> {
        return this.http.get<UserEntity[]>(this.url + '/all', {headers: this.headers});
    }
    public update$(user: UserEntityUpdate): Observable<UserEntityUpdate> {
        return this.http.put<UserEntityUpdate>(`${this.url}/${user.id}`, user, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
    }

    public override patch$(user: UserEntityUpdate): Observable<UserEntityUpdate> {             // mivel van UserEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
        return this.http.patch<UserEntityUpdate>(`${this.url}/${user.id}`, user, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
    }

    public override delete$(userId: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.url}/${userId}`, {headers: this.headers});
    }

}
