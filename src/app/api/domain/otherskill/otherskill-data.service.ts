import { Observable } from 'rxjs';

import { OtherskillEntity, OtherskillEntityAdd, OtherskillEntityUpdate } from './otherskill';

export abstract class OtherskillDataService {
    public abstract add$(entity: OtherskillEntityAdd): Observable<OtherskillEntity>;
    public abstract get$(id: string): Observable<OtherskillEntity | undefined>;
    public abstract list$(): Observable<OtherskillEntity[]>;
    public abstract update$(entity: OtherskillEntityUpdate): Observable<OtherskillEntityUpdate>;
    public abstract patch$(entity: OtherskillEntityUpdate): Observable<OtherskillEntityUpdate>; 
}
