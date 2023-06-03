import { Observable } from 'rxjs';

import { PictureEntity, PictureEntityAdd, PictureEntityUpdate } from './picture';

export abstract class PictureDataService {
    public abstract add$(entity: PictureEntityAdd): Observable<PictureEntity>;
    public abstract get$(id: string): Observable<PictureEntity | undefined>;
    public abstract list$(): Observable<PictureEntity[]>;
    public abstract update$(entity: PictureEntityUpdate): Observable<PictureEntityUpdate>;
    public abstract patch$(entity: PictureEntityUpdate): Observable<PictureEntityUpdate>; 
    public abstract delete$(entityId: string): Observable<boolean>;
}
