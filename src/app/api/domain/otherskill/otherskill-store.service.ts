import { Observable } from 'rxjs';

import { OtherskillEntity, OtherskillEntityAdd, OtherskillEntityUpdate } from './otherskill';

export abstract class OtherskillStoreService {
    public abstract dispatchAddEntityAction(entity: OtherskillEntityAdd): void;
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchGetEntityAction(id: string): void;
    public abstract dispatchListEntitiesAction(): void;
    public abstract dispatchUpdateEntityAction(entity: OtherskillEntityUpdate): void;
    public abstract dispatchDeleteEntityAction(id: string): void;
    public abstract selectEntity$(id: string): Observable<OtherskillEntity | undefined>;
    public abstract selectEntityList$(): Observable<OtherskillEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
