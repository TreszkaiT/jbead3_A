import { Observable, of } from 'rxjs';
import {
    ProofexperienceDataService, ProofexperienceEntity, ProofexperienceEntityAdd, ProofexperienceEntityUpdate, ProofexperienceModel
} from 'src/app/api/domain/proofexperience';
import { environment } from 'src/environments/environment';
import { v4 as uuidv4 } from 'uuid';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/core/config';


@Injectable()
export class ProofexperienceDataServiceImpl extends ProofexperienceDataService {

  public url: string = '';

  private headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});   // fenti két sor egy sorban

  constructor(private http: HttpClient, private config: ConfigService) {
    super();

    this.url = this.config.get('apiUrl') + '/proofexperience';

  }

  public override add$(proofexperience: ProofexperienceEntityAdd): Observable<ProofexperienceEntity> {
    return this.http.post<ProofexperienceEntity>(`${this.url}`, proofexperience, {headers: this.headers});
  }

  public override get$(proofexperienceId: string): Observable<ProofexperienceEntity | undefined> {
    return this.http.get<ProofexperienceEntity>(this.url + '/' + proofexperienceId, {headers: this.headers});
  }

  public override list$(): Observable<ProofexperienceEntity[]> {
    return this.http.get<ProofexperienceEntity[]>(this.url + '/all', {headers: this.headers});
  }

  public override update$(proofexperience: ProofexperienceEntityUpdate): Observable<ProofexperienceEntityUpdate> {             // mivel van ProofexperienceEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni
      return this.http.put<ProofexperienceEntityUpdate>(`${this.url}/${proofexperience.id}`, proofexperience, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

  public override patch$(proofexperience: ProofexperienceEntityUpdate): Observable<ProofexperienceEntityUpdate> {             // mivel van ProofexperienceEntityUpdate típusom, így meghívhatom rá a PATCH-et, amivel lehet csak 1 property-t fogok updatelni    
      return this.http.patch<ProofexperienceEntityUpdate>(`${this.url}/${proofexperience.id}`, proofexperience, {headers: this.headers} );   // így nem vagyok köteles minden property-t átadni... lehet csak a name: lesz benne, a zip: az nem
  }

}
