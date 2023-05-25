import { Observable } from 'rxjs';

import { LanguageEntity, LanguageEntityAdd, LanguageEntityUpdate } from './language';

export abstract class LanguageDataService {
    public abstract add$(entity: LanguageEntityAdd): Observable<LanguageEntity>;
    public abstract get$(id: string): Observable<LanguageEntity | undefined>;
    public abstract list$(): Observable<LanguageEntity[]>;
    public abstract update$(entity: LanguageEntityUpdate): Observable<LanguageEntityUpdate>;
    public abstract patch$(entity: LanguageEntityUpdate): Observable<LanguageEntityUpdate>; 
}
