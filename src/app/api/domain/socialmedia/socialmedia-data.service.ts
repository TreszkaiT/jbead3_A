import { Observable } from 'rxjs';

import { SocialmediaEntity, SocialmediaEntityAdd, SocialmediaEntityUpdate } from './socialmedia';

export abstract class SocialmediaDataService {
    public abstract add$(entity: SocialmediaEntityAdd): Observable<SocialmediaEntity>;
    public abstract get$(id: string): Observable<SocialmediaEntity | undefined>;
    public abstract list$(): Observable<SocialmediaEntity[]>;
    public abstract update$(entity: SocialmediaEntityUpdate): Observable<SocialmediaEntityUpdate>;
    public abstract patch$(entity: SocialmediaEntityUpdate): Observable<SocialmediaEntityUpdate>; 
}
