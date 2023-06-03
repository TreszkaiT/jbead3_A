import { Observable } from 'rxjs';

import { PictureEntity, PictureEntityAdd, PictureEntityUpdate } from './picture';

export abstract class PictureStoreService {
    public abstract dispatchAddEntityAction(entity: PictureEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: PictureEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<PictureEntity | undefined>;
    public abstract selectEntityList$(): Observable<PictureEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
