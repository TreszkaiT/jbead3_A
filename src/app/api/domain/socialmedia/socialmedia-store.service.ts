import { Observable } from 'rxjs';

import { SocialmediaEntity, SocialmediaEntityAdd, SocialmediaEntityUpdate } from './socialmedia';

export abstract class SocialmediaStoreService {
    public abstract dispatchAddEntityAction(entity: SocialmediaEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: SocialmediaEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<SocialmediaEntity | undefined>;
    public abstract selectEntityList$(): Observable<SocialmediaEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
